import React from "react"
import Text from "../atoms/Text"
import Container from "../atoms/Container"
import Image from "next/image"
import Link from "next/link"

type Props = {}

const Hero = ({}: Props) => {
  return (
    <section className="pt-[50px]">
      <Container>
        <div className="flex flex-col items-center">
          <Text as="p" variant="text-24">
            Mac Studio
          </Text>

          <Text as="h1" variant="text-80">
            A true powerhouse.
          </Text>

          <Image
            src="/images/studio-front.jpeg"
            width={844}
            height={412}
            alt="Studio Front"
            className="pt-[34px]"
            priority={true}
          />

          <div className="flex items-center pt-[39px] pb-[139px] gap-[28px]">
            <Text as="p" variant="text-19">
              From $166.58/mo. for 12 mo. or $1999<Link href="#">*</Link>
            </Text>

            <span
              className="w-[2px] h-[18px] bg-black"
              aria-hidden="true"
            ></span>

            <Text as="p" className="flex items-center gap-1" variant="text-19">
              <Link href="/" className="hover:underline">
                Watch the event
              </Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </Text>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
