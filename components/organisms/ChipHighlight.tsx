import Container from "../atoms/Container"
import classNames from "classnames"
import TextHeader from "../molecules/TextHeader"
import ItemStats from "../molecules/ItemStats"
import ImageList from "../molecules/ImageList"

const highlightList = [
  {
    text: "Up to 10 streams of 8K ProRes video playback",
    refNumber: 4,
    refLink: "#footnote-1",
  },
  { text: "67 billion transistors", refNumber: "", refLink: "" },
  {
    text: "Up to 15.8 trillion operations per second",
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

const highlightList2 = [
  {
    text: "Up to 22 streams of 8K ProRes video playback",
    refNumber: 5,
    refLink: "#footnote-1",
  },
  { text: "134 billion transistors", refNumber: "", refLink: "" },
  {
    text: "Up to 31.6 trillion operations per second",
    refNumber: "",
    refLink: "",
  },
  { text: "Support for up to 8 displays", refNumber: "", refLink: "" },
  {
    text: "H.264, HEVC, and ProRes encode and decode",
    refNumber: "",
    refLink: "",
  },
]

const itemStats1 = [
  {
    textTop: "Up to",
    textMiddle: "1.8x",
    textBottom: "faster CPU performance",
    refText: "1",
    refTextLink: "#footnote-1",
  },
  {
    textTop: "Up to",
    textMiddle: "3.6x",
    textBottom: "faster GPU performance",
    refText: "2",
    refTextLink: "#footnote-2",
  },
  {
    textTop: "Up to",
    textMiddle: "4.4x",
    textBottom: "faster machine learning",
    refText: "3",
    refTextLink: "#footnote-3",
  },
]

const itemStats2 = [
  {
    textTop: "Up to",
    textMiddle: "3.3x",
    textBottom: "faster CPU performance",
    refText: "1",
    refTextLink: "#footnote-1",
  },
  {
    textTop: "Up to",
    textMiddle: "6.1x",
    textBottom: "faster GPU performance",
    refText: "2",
    refTextLink: "#footnote-2",
  },
  {
    textTop: "Up to",
    textMiddle: "5.9x",
    textBottom: "faster machine learning",
    refText: "3",
    refTextLink: "#footnote-3",
  },
]

const ChipHighlight = () => {
  return (
    <section className="bg-white pb-[100px]">
      <Container className="max-w-[1300px] bg-color-lightgrey mx-auto w-full !px-0 rounded-[30px] overflow-hidden">
        <div className="pb-[60px] px-[108px]">
          <div className="max-w-820 mx-auto">
            <TextHeader
              sectionClass=" w-full pt-[163px]"
              titleStyles="[background-position:inherit;]"
              title="M2 Max"
              desc="M2 Max brings power to tackle challenges of almost any size. From recording your own beats or mixing professional-quality music to editing your first video or adding effects to a feature-length film, the lightning-fast M2 Max has your back."
            />
            <div className="flex items-start gap-[85px] mt-[45px] mb-[140px]">
              {itemStats1.map((item, index) => (
                <ItemStats
                  className="max-w-[113px] w-full"
                  key={index}
                  textTop={item.textTop}
                  textMiddle={item.textMiddle}
                  textBottom={item.textBottom}
                  refText={item.refText}
                  refTextLink={item.refTextLink}
                />
              ))}
            </div>
          </div>
        </div>

        <ImageList menuItems={highlightList as any} bgImg="bg-chip-thumb" />

        <div className="bg-[#111] text-[#86868b] px-[108px] pb-10">
          <div className="max-w-820 mx-auto">
            <TextHeader
              sectionClass="max-w-820 mx-auto w-full pt-[163px]"
              title="M2 Max"
              titleStyles="bg-text-gradient-4 text-gradient-clip [background-position:inherit;]"
              desc="Built from two M2 Max chips, M2 Ultra lets you power through workflows on an unprecedented scale. So you can quickly transcode and export videos, run complex particle simulations, or work with massive 3D environments that were previously impossible to render. And with twice the Media Engine resources, M2 Ultra can support up to 22 streams of 8K ProRes 422 video playback — something no other personal computer can do."
            />

            <div className="flex items-start gap-[85px] mt-[45px] mb-[140px]">
              {itemStats2.map((item, index) => (
                <ItemStats
                  className={classNames(
                    "max-w-[113px] w-full",
                    "[&_h4]:text-white"
                  )}
                  key={index}
                  textTop={item.textTop}
                  textMiddle={item.textMiddle}
                  textBottom={item.textBottom}
                  refText={item.refText}
                  refTextLink={item.refTextLink}
                />
              ))}
            </div>
          </div>
        </div>

        <ImageList menuItems={highlightList2 as any} bgImg="bg-chip-thumb-2" />
      </Container>
    </section>
  )
}

export default ChipHighlight
