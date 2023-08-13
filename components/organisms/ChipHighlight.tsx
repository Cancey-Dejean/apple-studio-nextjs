import Container from "../atoms/Container"
import Text from "../atoms/Text"
import classNames from "classnames"
import Link from "next/link"
import TextHeader from "../molecules/TextHeader"

const highlightList = [
  {
    text: "Up to 10 streams of 8K ProRes video playback",
    refNumber: 4,
    refLink: "#footnote-1",
  },
  { text: "67 billion transistors", refNumber: "", refLink: "" },
  {
    text: "1Up to 15.8 trillion operations per second",
    refNumber: "",
    refLink: "",
  },
  { text: "Support for up to 5 displays", refNumber: "", refLink: "" },
  {
    text: "H.264, HEVC, and ProRes encode and decode",
    refNumber: "",
    refLink: "",
  },
]

interface ChipHighlightProps {}

const ChipHighlight = ({}: ChipHighlightProps) => {
  return (
    <section className="bg-white">
      <Container className="max-w-[1300px] bg-[#fafafa] mx-auto w-full !px-0 rounded-[30px] overflow-hidden">
        <div className="pb-[60px] px-[108px]">
          <TextHeader
            sectionClass="max-w-820 mx-auto w-full pt-[163px]"
            title="M2 Max"
            desc="M2 Max brings power to tackle challenges of almost any size. From recording your own beats or mixing professional-quality music to editing your first video or adding effects to a feature-length film, the lightning-fast M2 Max has your back."
          />
        </div>

        <div
          className={classNames(
            "relative flex flex-col justify-center items-center text-white min-h-[980px]",
            "bg-chip-thumb bg-no-repeat bg-cover bg-[#fafafa]",
            "after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[rgba(0,0,0,.3)]"
          )}
        >
          <ul className="max-w-820 w-full mx-auto relative z-10 flex flex-col gap-5">
            {highlightList.map((item, index) => (
              <li
                className={classNames(
                  "max-w-[364px] relative flex gap-5",
                  "before:content-['] before:relative before:inline-block before:h-[20px] before:w-[5px] before:bg-white before:shrink-0 before:top-[6px]"
                )}
                key={index}
              >
                <Text as="p" className="text-28 font-semibold flex items-start">
                  <span>
                    {item.text}

                    {item.refNumber !== "" && (
                      <sup className="relative top-auto font-feature align-[initial]">
                        <Link
                          href={item.refLink}
                          className="align-[initial] text-28"
                        >
                          {item.refNumber}
                        </Link>
                      </sup>
                    )}
                  </span>
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#111] text-[#86868b] px-[108px] pb-10">
          <TextHeader
            sectionClass="max-w-820 mx-auto w-full pt-[163px]"
            title="M2 Max"
            titleStyles="text-gradient-4"
            desc="Built from two M2 Max chips, M2 Ultra lets you power through workflows on an unprecedented scale. So you can quickly transcode and export videos, run complex particle simulations, or work with massive 3D environments that were previously impossible to render. And with twice the Media Engine resources, M2 Ultra can support up to 22 streams of 8K ProRes 422 video playback — something no other personal computer can do."
          />
        </div>
      </Container>
    </section>
  )
}

export default ChipHighlight
