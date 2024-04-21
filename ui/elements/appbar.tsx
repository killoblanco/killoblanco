import { type ComponentProps, type PropsWithChildren } from 'react'
import { cn } from '../utils'

interface Props extends ComponentProps<'header'> {}

export const AppBar = ({
  className,
  children,
  ...props
}: PropsWithChildren<Props>): JSX.Element => (
  <header
    className={cn(
      'flex items-center justify-between p-2 rounded-lg backdrop-blur-sm',
      'bg-zinc-100/40 dark:bg-zinc-900/40'
    )}
    {...props}
  >
    {children}
  </header>
)
