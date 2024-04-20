import { CollapsibleCard } from '@/ui/components/collapsible-card'
import { TextEditorField } from '@/ui/form-fields/text-editor'

export const ProductDescriptionInfoGroup = (): JSX.Element => {
  return (
    <CollapsibleCard
      title={(
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span className="icon-[tabler--file-text] size-6" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex-1">
            Descripción
          </h4>
        </div>

      )}
    >
      <TextEditorField />
    </CollapsibleCard>
  )
}
