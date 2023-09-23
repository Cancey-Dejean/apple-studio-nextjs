import Link from "next/link"
import { AppleIcon, BagIcon, SearchIcon } from "../atoms/Icons"
import NavLink from "../atoms/NavLink"
import { menuList } from "@/constants"

const MenuDesktop = ({}: {}) => {
  return (
    <ul className="flex items-center justify-between">
      <li>
        <Link href="/" className="flex">
          <AppleIcon aria-label="Apple Icon" />
        </Link>
      </li>

      {menuList.map((item, index) => (
        <li key={index}>
          <NavLink link={item.url} label={item.label} />
        </li>
      ))}

      <li>
        <button className="flex" type="button" aria-label="Search Button">
          <SearchIcon />
        </button>
      </li>

      <li>
        <button className="flex" type="button" aria-label="Shopping Bag Button">
          <BagIcon aria-label="Shopping Bag" />
        </button>
      </li>
    </ul>
  )
}

export default MenuDesktop
