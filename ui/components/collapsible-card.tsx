'use client'

import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/elements/card'
import { Collapsible, CollapsibleContent } from '@/ui/elements/collapsible'
import { CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { useState, type JSX, type PropsWithChildren } from 'react'
import { cn } from '../utils'

interface Props {
  endContent?: JSX.Element
  helpText?: string
  icon?: string
  title: string | JSX.Element
  open?: boolean
}

export const CollapsibleCard = ({
  children,
  endContent,
  helpText,
  icon,
  title,
  open = false
}: PropsWithChildren<Props>): JSX.Element => {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader>
            <CardTitle className="scroll-m-20 text-xl inline-flex gap-4 items-center">
              <span className={cn('size-6', icon)} />
              <span className="flex-1">{title}</span>
              {endContent}
            </CardTitle>
            {helpText != null && (
              <CardDescription>{helpText}</CardDescription>
            )}
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {children}
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
