"use client"
import classNames from "classnames"
import { useEffect, useState } from "react"
import Container from "../atoms/Container"
import SubNavLogo from "../atoms/SubNavLogo"
import NavLink from "../atoms/NavLink"

interface MenuItem {
  label: string
  url: string
  cta?: boolean
}

interface SubNavProps {
  menuItems: MenuItem[]
}

const SubNav = ({ menuItems }: SubNavProps) => {
  const [colorChange, setColorChange] = useState(false)

  const changeSubNavbarBgColor = () => {
    const headerElement = document.querySelector("header")
    if (headerElement) {
      const headerHeight = headerElement.getBoundingClientRect().height
      if (window.scrollY >= headerHeight) {
        setColorChange(true)
      } else {
        setColorChange(false)
      }
      //   console.log(headerHeight)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeSubNavbarBgColor)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", changeSubNavbarBgColor)
    }
  }, []) // The empty array ensures the effect runs only once, like componentDidMount

  return (
    <div
      className={classNames(
        "sticky top-0 z-20 transition-all duration-[.3s] ease-in-out flex items-center",
        colorChange
          ? " bg-white/80 border-b border-b-black/10 [backdrop-filter:saturate(180)_blur(20px)]"
          : "bg-transparent"
      )}
    >
      <Container>
        <div
          className={classNames(
            "flex items-center justify-between border border-transparent h-[44px]",
            colorChange ? "border-b-transparent" : "border-b-black/10"
          )}
        >
          <SubNavLogo url="/" label="Mac Studio" />

          <ul className="flex items-center gap-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  link={item.url}
                  label={item.label}
                  cta={item.cta}
                  className="hover:text-color-blue [transition-all duration-[.3s] ease-in-out]"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default SubNav
