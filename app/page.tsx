import Container from "@/components/atoms/Container"
import { AppleIcon, SearchIcon, BagIcon } from "@/components/atoms/Icons"
import NavLink from "@/components/atoms/NavLink"
import Hero from "@/components/organisms/Hero"
import SubNav from "@/components/organisms/SubNav"
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

      <Container>
        recusandae assumenda velit consectetur ipsa ullam deleniti voluptatibus
        autem nisi qui necessitatibus. Odit dignissimos aliquid deserunt, ab
        quidem ex blanditiis reprehenderit harum voluptatibus itaque ullam
        commodi officiis veritatis quisquam nostrum dolorem voluptate beatae
        sint! Unde assumenda earum aperiam. Atque delectus, sed eum facere
        consequuntur unde doloremque magnam facilis sit reprehenderit numquam
        assumenda commodi voluptates ex inventore fuga iure laboriosam eius ad
        amet minus autem veritatis enim quis. Facilis eos odit fuga minima alias
        est non. Fuga expedita totam vero, adipisci iure, incidunt at
        accusantium sequi necessitatibus velit magnam qui doloribus, dolore
        dicta possimus quasi? Ducimus unde quisquam cupiditate repellendus, rem
        perferendis pariatur dolore dicta dignissimos expedita. Ab eligendi
        molestiae beatae fuga incidunt quod asperiores perspiciatis doloremque
        magni, velit illo ducimus eum repellat amet provident quos sed, corporis
        nemo, iure culpa porro facere nam temporibus dignissimos. Ex provident
        eaque amet non minima, veniam quod doloremque velit illum aut repellat,
        esse quos cum similique! Illum porro ducimus mollitia consequuntur
        ratione possimus voluptate magnam, aspernatur voluptates culpa nulla
        exercitationem dolore blanditiis dignissimos dolorem omnis at reiciendis
        vel neque consequatur repellat! Ipsam quidem neque laudantium
        perspiciatis numquam consequuntur quibusdam corrupti. Officia molestias
        repellendus voluptatibus, unde beatae numquam rerum dignissimos
        laboriosam ullam in quam? Ad corrupti optio laborum ipsa facilis
        molestiae fuga recusandae! Pariatur repellendus sed eligendi laborum aut
        minima sint doloribus. Vero dicta voluptatem tempore. Assumenda
        mollitia, neque cumque sapiente dolores sit corporis qui maxime vel ut
        perspiciatis obcaecati impedit repellat, sint iure consequuntur
        voluptates itaque sunt, iste fugit velit. Optio minus fuga odio
        doloribus dolorem rerum ducimus aliquid laudantium, atque eaque
        praesentium voluptatem adipisci maiores vitae reiciendis corporis quae
        maxime nisi magnam! Labore eius sit quaerat consectetur sapiente quia
        explicabo, quod numquam, rerum ipsum accusamus adipisci facere expedita
        laboriosam et odit inventore? Facilis, eaque optio.
      </Container>
    </div>
  )
}
