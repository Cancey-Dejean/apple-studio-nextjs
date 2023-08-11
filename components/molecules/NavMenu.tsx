import NavLink from "../atoms/NavLink"

interface NavMenuProps {
  data: { label: string; url: string }[]
}

const NavMenu = ({ data }: NavMenuProps) => {
  return (
    <nav>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <NavLink link={item.url} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu
