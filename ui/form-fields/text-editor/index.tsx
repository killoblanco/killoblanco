'use client'

import { Card, CardContent, CardHeader } from '@/ui/elements/card'
import { cn } from '@/ui/utils'
import { ListItemNode, ListNode } from '@lexical/list'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import Toolbar from './plugins/toolbar'

const initialConfig = {
  namespace: 'text-editor',
  nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode],
  theme: {
    heading: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl [&:not(:first-child)]:mt-6',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight border-b pb-2 [&:not(:first-child)]:mt-6',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight [&:not(:first-child)]:mt-6',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight [&:not(:first-child)]:mt-6'
    },
    list: {
      ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
      ol: 'my-6 ml-6 list-decimal [&>li]:mt-2'
    },
    paragraph: 'leading-7 [&:not(:first-child)]:mt-6',
    quote: 'mt-6 border-l-2 pl-6 italic',
    text: {
      bold: 'font-bold',
      italic: 'italic',
      underline: 'underline',
      strikethrough: 'line-through [&.underline]:[text-decoration:underline_line-through]'
    }
  },
  onError: console.error
} as const

export const TextEditorField = (): JSX.Element => (
  <LexicalComposer initialConfig={initialConfig}>
    <Card className={cn(
      'w-full rounded-md border border-input bg-transparent transition-colors',
      'focus-within:outline-none focus-within:ring-1 focus-within:ring-ring',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'relative group'
    )}>
      <CardHeader className={cn(
        'group-focus-within:border-ring border-b border-input',
        'p-1.5 flex flex-row items-center gap-1',
        'sticky top-[-1px] z-[2] bg-zinc-100'
      )}>
        <Toolbar />
      </CardHeader>
      <CardContent className='p-4 grid grid-cols-1 grid-rows-1 transition-colors'>
        <RichTextPlugin
          contentEditable={(
            <ContentEditable className='outline-none mx-auto w-full max-w-prose col-start-1 col-end-2 row-start-1 row-end-2 z-[1]' />
          )}
          placeholder={(
            <div className="leading-7 mx-auto w-full max-w-prose text-muted-foreground col-start-1 col-end-2 row-start-1 row-end-2 z-[0]">
              Escriba aquí...
            </div>
          )}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <ListPlugin />
      </CardContent>
    </Card>
  </LexicalComposer>
)
