'use client'

import { Card } from '@/ui/elements/card'
import { Collapsible, CollapsibleContent } from '@/ui/elements/collapsible'
import { CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { useState, type JSX, type PropsWithChildren } from 'react'

interface Props {
  title: JSX.Element
  open?: boolean
}

export const CollapsibleCard = ({
  title,
  open = false,
  children
}: PropsWithChildren<Props>): JSX.Element => {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <Card className="p-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          {title}
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          {children}
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
