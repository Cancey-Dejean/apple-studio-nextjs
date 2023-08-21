import Link from "next/link"

type SubNavLogoProps = {
  url?: string
  label?: string
}

const SubNavLogo = ({
  url = "/",
  label = "Product Name",
  ...linkProps
}: SubNavLogoProps) => {
  return (
    <Link
      href={url}
      className="text-black text-[21px] font-display font-semibold opacity-[.88] tracking-[0.231px]"
      {...linkProps}
    >
      {label}
    </Link>
  )
}

export default SubNavLogo
