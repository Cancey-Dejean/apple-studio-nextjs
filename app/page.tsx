import { AppleIcon, SearchIcon, BagIcon } from "@/components/atoms/Icons"
import NavLink from "@/components/atoms/NavLink"
import Image from "next/image"

const menuList = [
  { label: "Store", url: "#" },
  { label: "Mac", url: "#" },
  { label: "iPad", url: "#" },
  { label: "Iphone", url: "#" },
  { label: "Watch", url: "#" },
  { label: "AirPods", url: "#" },
  { label: "TV & Home", url: "#" },
  { label: "Entertainment", url: "#" },
  { label: "Accessories", url: "#" },
  { label: "Support", url: "#" },
]

export default function Home() {
  return (
    <main className="">
      <AppleIcon />
      <SearchIcon />
      <BagIcon />

      {menuList.map((item, i) => (
        <li key={i} className="">
          <NavLink url="/" label={item.label} />
        </li>
      ))}
    </main>
  )
}
