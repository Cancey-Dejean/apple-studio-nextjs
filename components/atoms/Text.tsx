import classNames from "classnames"
import { ReactNode } from "react"

interface TextProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  variant?:
    | "text-24"
    | "text-80"
    | "text-19"
    | "text-96"
    | "text-28"
    | "text-40"
    | "text-64"
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
      className={classNames("font-display font-semibold", className, variant)}
    >
      {children}
    </Element>
  )
}

export default Text
