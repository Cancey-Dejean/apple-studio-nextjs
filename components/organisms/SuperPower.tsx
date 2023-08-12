import React from "react"
import Container from "../atoms/Container"
import Text from "../atoms/Text"
import Image from "next/image"
import CardGradient from "./CardGradient"

type SuperPowerProps = {}

const SuperPower = ({}: SuperPowerProps) => {
  return (
    <section className="bg-black text-white pt-[228px] pb-[280px] text-center">
      <Container>
        <Text as="h2" variant="text-96">
          Choose your
          <br />
          superpower.
        </Text>

        <div className="flex items-start">
          <div className="flex-1">
            <CardGradient
              mainImg="/images/chip-gradient.png"
              gradientImg="/images/m2-max.jpeg"
              mainImgAlt="Gradient Background M2 Chip"
            />

            <ul className="flex flex-col gap-3">
              <li>
                <Text as="h3" variant="text-28" className="text-gradient-1">
                  12‑core CPU
                </Text>
              </li>
              <li>
                <Text as="h3" variant="text-28" className="text-gradient-1">
                  Up to 38‑core GPU
                </Text>
              </li>
              <li>
                <Text as="h3" variant="text-28" className="text-gradient-1">
                  Up to 96GB unified memory
                </Text>
              </li>
              <li>
                <Text as="h3" variant="text-28" className="text-gradient-1">
                  400GB/s memory bandwidth
                </Text>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <CardGradient
              mainImg="/images/chip-gradient-large.png"
              gradientImg="/images/m2-ultra.jpeg"
              mainImgAlt="M2 Max Chip"
            />
            <ul className="flex flex-col gap-3">
              <li>
                <Text as="h3" variant="text-28" className="text-gradient-2">
                  24‑core CPU
                </Text>
              </li>
              <li>
                <Text as="h3" variant="text-28" className="text-gradient-2">
                  Up to 76‑core GPU
                </Text>
              </li>
              <li>
                <Text as="h3" variant="text-28" className="text-gradient-2">
                  Up to 192GB unified memory
                </Text>
              </li>
              <li>
                <Text as="h3" variant="text-28" className="text-gradient-2">
                  800GB/s memory bandwidth
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SuperPower
