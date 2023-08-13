import Container from "@/components/atoms/Container"
import { AppleIcon, SearchIcon, BagIcon } from "@/components/atoms/Icons"
import NavLink from "@/components/atoms/NavLink"
import BigText from "@/components/organisms/BigText"
import ChipHighlight from "@/components/organisms/ChipHighlight"
import Hero from "@/components/organisms/Hero"
import HeroBottom from "@/components/organisms/HeroBottom"
import SubNav from "@/components/organisms/SubNav"
import SuperPower from "@/components/organisms/SuperPower"
import Image from "next/image"

const subMenuItems = [
  { label: "Overview", url: "/", cta: false },
  { label: "Tech Specs", url: "/about", cta: false },
  { label: "Compare", url: "/about", cta: false },
  { label: "New to Mac", url: "/about", cta: false },
  { label: "Buy", url: "/services", cta: true },
  // Add more menu items as needed
]

export default function Home() {
  return (
    <div>
      <SubNav menuItems={subMenuItems} />
      <Hero />
      <HeroBottom />
      <SuperPower />
      <BigText />
      <ChipHighlight />
    </div>
  )
}
