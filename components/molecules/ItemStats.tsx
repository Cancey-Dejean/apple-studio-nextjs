import Link from "next/link"
import Text from "../atoms/Text"
import classNames from "classnames"

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
    <div className={classNames("flex flex-col gap-1 items-start", className)}>
      <Text
        as="p"
        className="!text-[17px] leading-[21px] font-body text-[#86868b]"
      >
        {textTop}
      </Text>

      <Text as="h4" className="text-64 text-[#1d1d1f]">
        {textMiddle}
      </Text>

      <Text
        as="p"
        className="!text-[17px] leading-[21px] font-body text-[#86868b]"
      >
        {textBottom}

        {textBottom !== "" && (
          <sup className="relative top-auto font-feature align-[initial]">
            <Link
              href={refTextLink}
              className="align-[initial] !text-[17px] hover:text-[#06c]"
            >
              {refText}
            </Link>
          </sup>
        )}
      </Text>
    </div>
  )
}

export default ItemStats
