import Link from "next/link"
import React from "react"
import { AppleIcon } from "./Icons"
const Logo = ({ height }: { height: string }) => {
  return (
    <Link href="/" className="flex">
      <AppleIcon aria-label="Apple Icon" height={height} />
    </Link>
  )
}

export default Logo
