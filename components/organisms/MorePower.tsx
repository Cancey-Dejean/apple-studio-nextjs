import Link from "next/link"
import Container from "../atoms/Container"
import Text from "../atoms/Text"
import classNames from "classnames"
import ReferenceText from "../atoms/ReferenceText"
import ProgressStat from "../molecules/ProgressStat"
import { twMerge } from "tailwind-merge"

const tabs = [
  { label: "3D rendering", url: "/", primary: true },
  { label: "Video processing", url: "/", primary: false },
  { label: "Video editing", url: "/", primary: false },
  { label: "3D interaction", url: "/", primary: false },
  { label: "Video transcoding", url: "/", primary: false },
  { label: "Code compiling", url: "/", primary: false },
  { label: "Color grading", url: "/", primary: false },
  { label: "Photo editing", url: "/", primary: false },
]

const progressList = [
  {
    label: "Mac Studio with M2 Ultra",
    number: "6.1",
    numberOnly: false,
    numberColor: "text-color-powder-blue",
    progressColor: "bg-text-gradient-4",
    progressWidth: "100%",
  },
  {
    label: "Mac Studio with M2 Max",
    number: "3.6",
    numberOnly: false,
    numberColor: "text-color-purple",
    progressColor: "bg-text-gradient-1",
    progressWidth: "59%",
  },
  {
    label: "Mac Studio with M1 Ultra",
    number: "",
    numberOnly: true,
    numberColor: "",
    progressColor: "bg-color-grey",
    progressWidth: "30%",
  },
  {
    label: "Mac Studio with M1 Max",
    number: "",
    numberOnly: true,
    numberColor: "",
    progressColor: "bg-color-grey",
    progressWidth: "23%",
  },
  {
    label:
      "27-inch iMac with 10-core Intel Core i9 and Radeon Pro 5700 XT (baseline)",
    number: "",
    numberOnly: true,
    numberColor: "",
    progressColor: "bg-color-grey",
    progressWidth: "16%",
  },
]

const MorePower = () => {
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
                    <span
                      className={twMerge(
                        tab.primary
                          ? "text-color-purple-2"
                          : "group-hover:text-white group-hover:underline"
                      )}
                    >
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
                  progressWidth={item.progressWidth}
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
