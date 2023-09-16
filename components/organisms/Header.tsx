import Link from "next/link"
import Container from "../atoms/Container"
import NavLink from "../atoms/NavLink"
import { AppleIcon, BagIcon, SearchIcon } from "../atoms/Icons"
import { menuList } from "@/constants"

const Header = () => {
  return (
    <header className="bg-white h-[200px]">
      <Container>
        <nav>
          <ul className="flex items-center justify-between">
            <li>
              <Link href="/" className="flex">
                <AppleIcon aria-label="Home" />
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
              <button
                className="flex"
                type="button"
                aria-label="Shopping Bag Button"
              >
                <BagIcon aria-label="Shopping Bag" />
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
