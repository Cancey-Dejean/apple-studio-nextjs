import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface NavLinkProps {
  link: string
  label: string
  className?: string
  cta?: boolean
}

const NavLink = ({
  link = "/",
  label = "Link",
  cta = false,
  className = "",
  ...linkProps
}: NavLinkProps) => {
  return (
    <Link
      href={link}
      className={twMerge(
        "text-[12px] tracking-[-.01em] font-body text-black/80 leading-[1]",
        cta && "bg-color-blue text-white rounded-full px-[10px] py-[3px]",
        className
      )}
      {...linkProps}
    >
      {label}
    </Link>
  )
}

export default NavLink
