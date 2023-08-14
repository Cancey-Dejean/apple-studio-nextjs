import Link from "next/link"
import Container from "../atoms/Container"
import Text from "../atoms/Text"
import classNames from "classnames"

const tabs = [
  { label: "3D rendering" },
  { label: "Video processing" },
  { label: "Video editing" },
  { label: "3D interaction" },
  { label: "Video transcoding" },
  { label: "Code compiling" },
  { label: "Color grading" },
  { label: "Photo editing" },
]

interface MorePowerProps {}

const MorePower = ({}: MorePowerProps) => {
  return (
    <section className="pb-[100px] bg-white">
      <Container className="max-w-[1100px] rounded-[30px] overflow-hidden bg-color-lightgrey !px-0">
        <div className="py-[105px]">
          <Text as="h3" className="text-96 max-w-820 mx-auto !font-bold">
            More power
            <br />
            behind every
            <br />
            program.
          </Text>
        </div>

        <div className="bg-[#111] pt-[141px] pb-[100px] text-white">
          <div className="max-w-820 mx-auto overflow-visible h-auto">
            <ul
              className={classNames(
                "flex-wrap flex overflow-visible",
                "[&_li:first-of-type_a]:text-[#9091ff]",
                "[&_li:last-of-type_span]:hidden",
                "[&_li_span]:mx-[8px]"
              )}
            >
              {tabs.map((tab, index) => (
                <li key={index} className="whitespace-nowrap">
                  <Link
                    href="/"
                    className="flex items-center text-[32px] text-[#86868b] leading-[36px] font-display font-semibold"
                  >
                    {tab.label}
                    <span>/</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MorePower
