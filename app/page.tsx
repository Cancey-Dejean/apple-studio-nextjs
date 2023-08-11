import { AppleIcon, SearchIcon, BagIcon } from "@/components/atoms/Icons"
import NavLink from "@/components/atoms/NavLink"
import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      {/* <AppleIcon />
      <SearchIcon />
      <BagIcon /> */}

      {menuList.map((item, i) => (
        <li key={i} className="">
          <NavLink url="/" label={item.label} />
        </li>
      ))}
    </main>
  )
}
