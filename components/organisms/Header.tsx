import Link from "next/link"
import Container from "../atoms/Container"
import NavLink from "../atoms/NavLink"
import { AppleIcon, BagIcon, SearchIcon } from "../atoms/Icons"
import { menuList } from "@/constants"
import MenuDesktop from "./MenuDesktop"
import MenuMobile from "./MenuMobile"

const Header = () => {
  return (
    <header className="bg-white">
      <Container>
        <nav>
          <div className="block md:hidden">
            <MenuMobile />
          </div>
          <div className="hidden md:block">
            <MenuDesktop />
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
