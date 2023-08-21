import React from "react"
import Text from "../atoms/Text"
import { twMerge } from "tailwind-merge"

type TextHeaderProps = {
  sectionClass?: string
  title?: string
  titleStyles?: string
  desc?: string
  descStyles?: string
}

const TextHeader = ({
  sectionClass = "",
  title = "Title",
  titleStyles = "",
  desc = "Place content here",
  descStyles = "",
}: TextHeaderProps) => {
  return (
    <div className={twMerge(sectionClass)}>
      <Text
        as="h3"
        className={twMerge(
          "text96 mb-[20px] bg-text-gradient-3 text-gradient-clip font-bold",
          titleStyles
        )}
      >
        {title}
      </Text>

      <Text as="p" className={twMerge("text28 font-semibold", descStyles)}>
        {desc}
      </Text>
    </div>
  )
}

export default TextHeader
