import React from "react"
import Text from "../atoms/Text"
import Container from "../atoms/Container"
import Image from "next/image"

interface HeroBottomProps {}

const HeroBottom = ({}: HeroBottomProps) => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center gap-[56px]">
          <Text as="h2" variant="text-80">
            Stunningly compact.
          </Text>

          <Text as="h3" variant="text-80">
            Extensive connectivity.
          </Text>

          <Text as="h4" variant="text-80">
            Supercharged by
          </Text>

          <Text as="h5" variant="text-80">
            M2 Max and M2 Ultra.
          </Text>

          <Image
            src="/images/studio-back.jpeg"
            width={844}
            height={412}
            alt="Studio Front"
            className="px-0 pt-[72px] pb-[252px]"
            priority={true}
          />
        </div>
      </Container>
    </section>
  )
}

export default HeroBottom
