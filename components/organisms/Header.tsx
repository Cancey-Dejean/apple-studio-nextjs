import Link from "next/link"
import Container from "../atoms/Container"
import { AppleIcon, BagIcon, SearchIcon } from "../atoms/Icons"
import NavMenu from "../molecules/NavMenu"

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

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header>
      <Container>
        <Link href="/">
          <AppleIcon />
        </Link>

        <NavMenu data={menuList} />

        <div>
          <SearchIcon />
          <BagIcon />
        </div>
      </Container>
    </header>
  )
}

export default Header
