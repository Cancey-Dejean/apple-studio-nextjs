import classNames from "classnames"
import Text from "../atoms/Text"
import Link from "next/link"
import ReferenceText from "../atoms/ReferenceText"

type ListItem = {
  text?: string
  refNumber?: string
  refLink?: string
}

type ImageListProps = {
  menuItems: ListItem[]
  bgImg?: string
}

const ImageList = ({ menuItems, bgImg = "" }: ImageListProps) => {
  return (
    <div
      className={classNames(
        "relative flex flex-col justify-center items-center text-white min-h-[980px]",
        bgImg,
        "bg-no-repeat bg-cover bg-color-lightgrey",
        "after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[rgba(0,0,0,.3)]"
      )}
    >
      <ul className="max-w-820 w-full mx-auto relative z-10 flex flex-col gap-10">
        {menuItems.map((item, index) => (
          <li
            className={classNames(
              "max-w-[364px] relative flex gap-5",
              "before:content-['] before:relative before:inline-block before:h-[20px] before:w-[5px] before:bg-white before:shrink-0 before:top-[6px]"
            )}
            key={index}
          >
            <Text as="p" className="text28 font-semibold flex items-start">
              <span>
                {item.text}

                {item.refNumber !== "" && (
                  <ReferenceText>
                    <Link
                      href={item.refLink as string}
                      className="reference-text text28"
                    >
                      {item.refNumber}
                    </Link>
                  </ReferenceText>
                )}
              </span>
            </Text>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageList
