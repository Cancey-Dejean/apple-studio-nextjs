import React from "react"
import Text from "../atoms/Text"
import Link from "next/link"
import ButtonLink from "../atoms/ButtonLink"

interface TextBlockProps {
  text: string
  btnLabel?: string
  btnUrl?: string
}

const TextBlock = ({
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  btnLabel = "Button",
  btnUrl = "/",
}: TextBlockProps) => {
  return (
    <div className="flex flex-col items-start gap-[33px]">
      <Text as="p" className="text40">
        {text}
      </Text>

      <ButtonLink url={btnUrl} variant="btn-inverted">
        {btnLabel}{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </ButtonLink>
    </div>
  )
}

export default TextBlock
