import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type TextProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  variant?:
    | "text-24"
    | "text80"
    | "text19"
    | "text96"
    | "text28"
    | "text40"
    | "text64"
  children: ReactNode
  className?: string
}

const Text = ({
  as: Element = "h1",
  children,
  className = "",
  variant,
}: TextProps) => {
  return (
    <Element
      className={twMerge("font-display font-semibold", variant, className)}
    >
      {children}
    </Element>
  )
}

export default Text
