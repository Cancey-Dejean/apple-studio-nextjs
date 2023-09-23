// import Link from "next/link"
"use client"
import { menuList } from "@/constants"
import Container from "../atoms/Container"
import Link from "next/link"
// import NavLink from "../atoms/NavLink"
// import { AppleIcon, BagIcon, SearchIcon } from "../atoms/Icons"
// import { menuList } from "@/constants"
// import MenuDesktop from "./MenuDesktop"
// import MenuMobile from "./MenuMobile"

const HeaderApple = () => {
  // const searchButton = document.querySelector(".link-search")
  // const closeButton = document.querySelector(".link-close")

  const handleOpenSearch = () => {
    const desktopNav = document.querySelector(".desktop-nav")
    const searchContainer = document.querySelector(".search-container")
    const overlay = document.querySelector(".overlay")
    desktopNav?.classList.add("hide")
    searchContainer?.classList.remove("hide")
    overlay?.classList.add("show")
  }

  const handleCloseSearch = () => {
    const desktopNav = document.querySelector(".desktop-nav")
    const searchContainer = document.querySelector(".search-container")
    const overlay = document.querySelector(".overlay")
    desktopNav?.classList.remove("hide")
    searchContainer?.classList.add("hide")
    overlay?.classList.remove("show")
  }

  const handleOverlay = () => {
    const desktopNav = document.querySelector(".desktop-nav")
    const searchContainer = document.querySelector(".search-container")
    const overlay = document.querySelector(".overlay")
    desktopNav?.classList.remove("hide")
    searchContainer?.classList.add("hide")
    overlay?.classList.remove("show")
  }

  return (
    <>
      <header className="nav-container">
        <nav>
          <ul className="desktop-nav">
            <li>
              <a href="#" className="link-logo"></a>
            </li>
            <li>
              <a href="#" className="">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="">
                Mac
              </a>
            </li>
            <li>
              <a href="#" className="">
                iPad
              </a>
            </li>
            <li>
              <a href="#" className="">
                Iphone
              </a>
            </li>
            <li>
              <a href="#" className="">
                Watch
              </a>
            </li>
            <li>
              <a href="#" className="">
                AirPods
              </a>
            </li>
            <li>
              <a href="#" className="">
                TV & Home
              </a>
            </li>
            <li>
              <a href="#" className="">
                Entertainment
              </a>
            </li>
            <li>
              <a href="#" className="">
                Accessories
              </a>
            </li>
            <li>
              <a href="#" className="">
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="link-search"
                onClick={handleOpenSearch}
              ></a>
            </li>
            <li>
              <a href="#" className="link-bag"></a>
            </li>
          </ul>
        </nav>
        {/* 
      <Container>Hello</Container> */}

        <div className="search-container hide">
          <div className="link-search"></div>

          <div className="search-bar">
            <form action="">
              <input type="text" placeholder="Search apple.com" />
            </form>
          </div>

          <div className="link-close" onClick={handleCloseSearch}></div>

          <div className="quick-links">
            <h2>Quick Links</h2>

            <ul>
              <li>
                <a href="#">Visit an Apple Store FAQ</a>
              </li>
              <li>
                <a href="#">Shop Apple Store Online</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Airpods</a>
              </li>
              <li>
                <a href="#">Airtag</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="overlay" onClick={handleOverlay}></div>
    </>
  )
}

export default HeaderApple
