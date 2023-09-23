import Link from "next/link"
import { AppleIcon, BagIcon, SearchIcon } from "../atoms/Icons"
import NavLink from "../atoms/NavLink"
import { menuList } from "@/constants"
import Logo from "../atoms/Logo"

const MenuMobile = ({}: {}) => {
  return (
    <ul className="flex justify-between">
      <li>
        <Logo height="" />
      </li>

      <li className="flex items-center gap-4">
        <button className="flex" type="button" aria-label="Search Button">
          <SearchIcon />
        </button>
        <button className="flex" type="button" aria-label="Shopping Bag Button">
          <BagIcon aria-label="Shopping Bag" />
        </button>
      </li>
    </ul>
  )
}

export default MenuMobile
