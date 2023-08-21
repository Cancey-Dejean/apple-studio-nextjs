import React from "react"
import Container from "../atoms/Container"
import Text from "../atoms/Text"
import CardGradient from "./CardGradient"

const maxList = [
  { text: "12-core CPU" },
  { text: "Up to 38-core GPU" },
  { text: "Up to 96GB unified memory" },
  { text: "400GB/s memory bandwidth" },
]
const ultraList = [
  { text: "24-core CPU" },
  { text: "Up to 76-core GPU" },
  { text: "Up to 192GB unified memory" },
  { text: "800GB/s memory bandwidth" },
]

interface SuperPowerProps {}

const SuperPower = ({}: SuperPowerProps) => {
  return (
    <section className="bg-black text-white pt-[228px] pb-[280px] text-center">
      <Container>
        <Text as="h2" variant="text96" className="!font-bold">
          Choose your
          <br />
          superpower.
        </Text>

        <div className="flex items-start gap-4">
          <div className="flex-1">
            <CardGradient
              mainImg="/images/chip-gradient.png"
              gradientImg="/images/m2-max.jpeg"
              mainImgAlt="Gradient Background M2 Chip"
            />

            <ul className="flex flex-col gap-3">
              {maxList.map((item, index) => (
                <li key={index}>
                  <Text
                    as="h3"
                    variant="text28"
                    className="bg-text-gradient-1 text-gradient-clip !font-bold"
                  >
                    {item.text}
                  </Text>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <CardGradient
              mainImg="/images/chip-gradient-large.png"
              gradientImg="/images/m2-ultra.jpeg"
              mainImgAlt="M2 Max Chip"
            />

            <ul className="flex flex-col gap-3">
              {ultraList.map((item, index) => (
                <li key={index}>
                  <Text
                    as="h3"
                    variant="text28"
                    className="bg-text-gradient-2 text-gradient-clip !font-bold"
                  >
                    {item.text}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SuperPower
