import Link from "next/link"

interface NavLinkProps {
  link: string
  label: string
}

const NavLink = ({ link = "/", label = "Link" }: NavLinkProps) => {
  return (
    <Link
      href={link}
      className="text-[12px] tracking-[-.01em] font-body text-black/80 leading-[1]"
    >
      {label}
    </Link>
  )
}

export default NavLink
