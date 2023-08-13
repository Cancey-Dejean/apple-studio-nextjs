import classNames from "classnames"
import Link from "next/link"
import { ReactNode } from "react"

interface ButtonLinkProps {
  variant?: "btn-primary" | "btn-secondary" | "btn-inverted"
  url?: string
  className?: string
  children: ReactNode
  linkable?: boolean
  onClick?: () => void
}

const ButtonLink = ({
  variant = "btn-primary",
  children,
  url = "#",
  className = "",
  linkable,
  onClick,
  ...props
}: ButtonLinkProps) => {
  return linkable ? (
    <Link
      href={url}
      className={classNames("btn", `${variant}`, className, { ...props })}
    >
      {children || <span>Linkable Button</span>}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={classNames("btn", `${variant}`, className, { ...props })}
    >
      {children || <span>Button</span>}
    </button>
  )
}

export default ButtonLink
