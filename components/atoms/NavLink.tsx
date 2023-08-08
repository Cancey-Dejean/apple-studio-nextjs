import Link from "next/link"

interface NavLinkProps {
  url: string
  label: string
}

const NavLink = ({ url = "/", label = "Link" }: NavLinkProps) => {
  return (
    <Link
      href={url}
      className="text-[12px] tracking-[-.01em] font-body text-black/80 leading-[1]"
    >
      {label}
    </Link>
  )
}

export default NavLink
