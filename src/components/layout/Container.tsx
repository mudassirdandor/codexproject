import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type ContainerProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export default function Container<T extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? 'div'
  const classes = ['page-container', className].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
