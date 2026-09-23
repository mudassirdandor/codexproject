import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type SectionFrameProps = ComponentPropsWithoutRef<'section'> & {
  children: ReactNode
}

export default function SectionFrame({
  children,
  className,
  ...props
}: SectionFrameProps) {
  const classes = ['section-frame', className].filter(Boolean).join(' ')

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}
