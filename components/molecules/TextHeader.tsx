import classNames from "classnames"
import React from "react"
import Text from "../atoms/Text"

interface TextHeaderProps {
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
    <div className={classNames(sectionClass)}>
      <Text
        as="h3"
        className={classNames(
          "text96 mb-[20px] text-gradient-3 font-bold",
          titleStyles
        )}
      >
        {title}
      </Text>

      <Text as="p" className={classNames("text28 font-semibold", descStyles)}>
        {desc}
      </Text>
    </div>
  )
}

export default TextHeader
