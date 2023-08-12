import classNames from "classnames"
import { ReactNode } from "react"

interface TextProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  variant?: string
  children: ReactNode
  className: string
}

const Text = ({
  as: Element = "h1",
  children,
  className = "",
  variant = "",
}: TextProps) => {
  return (
    <Element className={classNames(className, variant)}>{children}</Element>
  )
}

export default Text
