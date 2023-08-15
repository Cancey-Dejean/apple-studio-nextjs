import Link from "next/link"
import Container from "../atoms/Container"
import Text from "../atoms/Text"
import classNames from "classnames"
import ReferenceText from "../atoms/ReferenceText"
import ProgressStat from "../molecules/ProgressStat"

const tabs = [
  { label: "3D rendering", url: "/" },
  { label: "Video processing", url: "/" },
  { label: "Video editing", url: "/" },
  { label: "3D interaction", url: "/" },
  { label: "Video transcoding", url: "/" },
  { label: "Code compiling", url: "/" },
  { label: "Color grading", url: "/" },
  { label: "Photo editing", url: "/" },
]

const progressList = [
  {
    label: "Mac Studio with M2 Ultra",
    number: "6.1",
    numberOnly: false,
    numberColor: "text-[#c7f8ff]",
    progressColor: "bg-white",
  },
  {
    label: "Mac Studio with M2 Max",
    number: "6.1",
    numberOnly: false,
    numberColor: "color-powder-blue",
    progressColor: "#fff",
  },
  {
    label: "Mac Studio with M1 Ultra",
    number: "6.1",
    numberOnly: true,
    numberColor: "#c7f8ff",
    progressColor: "#fff",
  },
  {
    label: "Mac Studio with M1 Max",
    number: "6.1",
    numberOnly: true,
    numberColor: "#c7f8ff",
    progressColor: "#fff",
  },
]

interface MorePowerProps {}

const MorePower = ({}: MorePowerProps) => {
  return (
    <section className="pb-[100px] bg-white">
      <Container className="max-w-[1100px] rounded-[30px] overflow-hidden bg-color-lightgrey !px-0">
        <div className="py-[105px]">
          <Text as="h3" className="text96 max-w-820 mx-auto !font-bold">
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
                "[&_li:last-of-type:a_span]:hidden",
                "[&_li:last-child_.slash]:hidden"
              )}
            >
              {tabs.map((tab, index) => (
                <li key={index} className="whitespace-nowrap">
                  <Link
                    href="/"
                    className={classNames(
                      "group flex items-center text-[32px] text-[#86868b] leading-[36px] font-display font-semibold pb-[5px]"
                    )}
                  >
                    <span className="group-hover:text-white group-hover:underline">
                      {tab.label}
                    </span>
                    <span className="text-[#86868b] mx-[8px] slash">/</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Text as="p" className="text28 mt-[78px]">
              Faster render performance in OTOY Octane X
              <ReferenceText>
                <Link
                  href="/"
                  className="reference-text text28 hover:text-[#06c]"
                >
                  2
                </Link>
              </ReferenceText>
            </Text>

            <div className="pt-[60px] flex flex-col gap-[60px]">
              {progressList.map((item, index) => (
                <ProgressStat
                  text={item.label}
                  progressColor={item.progressColor}
                  number={item.number}
                  numberColor={item.numberColor}
                  numberOnly={item.numberOnly}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MorePower
