'use client'

import { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from '@/ui/elements/select';
import { Separator } from '@/ui/elements/separator';
import { ToggleGroup, ToggleGroupItem } from '@/ui/elements/toggle-group';
import {
  $isListNode,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListNode,
  insertList
} from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $createHeadingNode,
  $createQuoteNode,
  $isHeadingNode,
  HeadingTagType
} from '@lexical/rich-text';
import {
  $setBlocksType
} from '@lexical/selection';
import {
  $findMatchingParent,
  $getNearestNodeOfType
} from '@lexical/utils';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_LOW,
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
  TextFormatType
} from 'lexical';
import { useEffect, useState } from 'react';

const FormatControls = () => {
  const [editor] = useLexicalComposerContext();
  const [activeItems, setActiveItems] = useState<string[]>([]);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          const nextItems = [
            selection.hasFormat('bold') && 'bold',
            selection.hasFormat('italic') && 'italic',
            selection.hasFormat('underline') && 'underline',
            selection.hasFormat('strikethrough') && 'strikethrough',
          ].filter(Boolean) as string[]
          setActiveItems(nextItems);
        }
      });
    });
  }, [editor]);

  const onFormat = (format: string[]) => {
    const addedItem = format
      .map((f) => activeItems.includes(f) ? false : f)
      .filter(Boolean)

    const removedItem = activeItems
      .map((f) => format.includes(f) ? false : f)
      .filter(Boolean)

    for (const item of [...addedItem, ...removedItem]) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, item as TextFormatType);
    }
  };

  return (
    <ToggleGroup type="multiple" variant="outline" size="sm" value={activeItems} onValueChange={onFormat}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <span className='size-4 icon-[tabler--bold]' />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <span className='size-4 icon-[tabler--italic]' />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <span className='size-4 icon-[tabler--underline]' />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <span className='size-4 icon-[tabler--strikethrough]' />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

const AlignmentControls = () => {
  const [editor] = useLexicalComposerContext();

  const onFormat = (format: string) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format as ElementFormatType);
  };

  return (
    <ToggleGroup type="single" variant="outline" size="sm" onValueChange={onFormat}>
      <ToggleGroupItem value="left" aria-label="Toggle left align">
        <span className='size-4 icon-[tabler--align-left]' />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Toggle center align">
        <span className='size-4 icon-[tabler--align-center]' />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Toggle right align">
        <span className='size-4 icon-[tabler--align-right]' />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

const BlockFormatControls = () => {
  const [editor] = useLexicalComposerContext();
  const [blockType, setBlockType] = useState<string>('p');

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          const anchorNode = selection.anchor.getNode();
          let element =
            anchorNode.getKey() === 'root'
              ? anchorNode
              : $findMatchingParent(anchorNode, (e) => {
                const parent = e.getParent();
                return parent !== null && $isRootOrShadowRoot(parent);
              });

          if (element === null) {
            element = anchorNode.getTopLevelElementOrThrow();
          }

          const elementKey = element.getKey();
          const elementDOM = editor.getElementByKey(elementKey);

          if (elementDOM !== null) {
            let type: string;

            if ($isListNode(element)) {
              const parentList = $getNearestNodeOfType<ListNode>(anchorNode, ListNode)
              type = parentList ? parentList.getListType() : element.getListType()
            } else {
              type = $isHeadingNode(element) ? element.getTag() : element.getType()
            }

            const typeMap = {
              bullet: 'ul',
              h1: 'h1',
              h2: 'h2',
              h3: 'h3',
              h4: 'h4',
              number: 'ol',
              parragraph: 'p',
              quote: 'quote',
            }

            setBlockType(typeMap[type as keyof typeof typeMap] ?? 'p')
          }
        }
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    )
  }, [editor])

  const onChangeBlockType = (type: string) => {
    editor.update(() => {
      const selection = $getSelection();

      if (type === 'p') {
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createParagraphNode())
        }
      }

      if (['h1', 'h2', 'h3', 'h4'].includes(type)) {
        $setBlocksType(selection, () => $createHeadingNode(type as HeadingTagType))
      }

      if (['ul', 'ol'].includes(type) && $isRangeSelection(selection)) {
        if (type === 'ul') editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
        if (type === 'ol') editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
      }

      if (type === 'quote') {
        $setBlocksType(selection, () => $createQuoteNode());
      }

      setBlockType(type)
    })
  }

  return (
    <Select value={blockType} onValueChange={onChangeBlockType}>
      <SelectTrigger className='group-focus-within:border-ring'>
        <SelectValue placeholder="Formato" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="h1">
            <span className="inline-flex gap-2 items-center">
              <span className='size-4 icon-[tabler--heading]' />
              Titulo 1
            </span>
          </SelectItem>
          <SelectItem value="h2">
            <span className="inline-flex gap-2 items-center">
              <span className='size-4 icon-[tabler--heading]' />
              Titulo 2
            </span>
          </SelectItem>
          <SelectItem value="h3">
            <span className="inline-flex gap-2 items-center">
              <span className='size-4 icon-[tabler--heading]' />
              Titulo 3
            </span>
          </SelectItem>
          <SelectItem value="h4">
            <span className="inline-flex gap-2 items-center">
              <span className='size-4 icon-[tabler--heading]' />
              Titulo 4
            </span>
          </SelectItem>
          <SelectSeparator />
          <SelectItem value="p">
            <span className="inline-flex gap-2 items-center">
              <span className='size-4 icon-[tabler--typography]' />
              Parrafo
            </span>
          </SelectItem>
          <SelectItem value="ul">
            <span className="inline-flex gap-2 items-center">
              <span className='size-4 icon-[tabler--list]' />
              Lista
            </span>
          </SelectItem>
          <SelectItem value="ol">
            <span className="inline-flex gap-2 items-center">
              <span className='size-4 icon-[tabler--list-numbers]' />
              Lista numerada
            </span>
          </SelectItem>
          <SelectItem value="quote">
            <span className="inline-flex gap-2 items-center">
              <span className='size-4 icon-[tabler--quote]' />
              Cita
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const Toolbar = () => {
  return (
    <div className="flex items-stretch gap-2">
      <BlockFormatControls />
      <Separator orientation="vertical" className='h-auto' />
      <FormatControls />
      <Separator orientation="vertical" className='h-auto' />
      <AlignmentControls />
    </div>
  );
};

export default Toolbar;
