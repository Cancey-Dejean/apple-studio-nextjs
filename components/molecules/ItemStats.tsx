import Link from "next/link"
import Text from "../atoms/Text"
import ReferenceText from "../atoms/ReferenceText"
import { twMerge } from "tailwind-merge"

interface ItemStatsProps {
  className?: string
  textTop?: string
  textMiddle?: string
  textBottom?: string
  refText?: string
  refTextLink?: string
}

const ItemStats = ({
  className = "",
  textTop = "Top Text",
  textMiddle = "1",
  textBottom = "Bottom Text",
  refText = "",
  refTextLink = "/",
}: ItemStatsProps) => {
  return (
    <div className={twMerge("flex flex-col gap-1 items-start", className)}>
      <Text
        as="p"
        className="!text-[17px] leading-[21px] font-body text-[#86868b]"
      >
        {textTop}
      </Text>

      <Text as="h4" className="text64 text-[#1d1d1f]">
        {textMiddle}
      </Text>

      <Text
        as="p"
        className="!text-[17px] leading-[21px] font-body text-[#86868b]"
      >
        {textBottom}

        {textBottom !== "" && (
          <ReferenceText>
            <Link href={refTextLink} className="reference-text !text-[17px]">
              {refText}
            </Link>
          </ReferenceText>
        )}
      </Text>
    </div>
  )
}

export default ItemStats
