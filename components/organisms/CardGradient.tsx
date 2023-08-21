import Image from "next/image"

type CardGradientProps = {
  mainImg: string
  mainImgAlt: string
  gradientImg?: string
  gradientImgAlt?: string
}

const CardGradient = ({
  mainImg = "",
  gradientImg = "",
  mainImgAlt = "",
  gradientImgAlt = "Gradient Background",
}: CardGradientProps) => {
  return (
    <div className="relative mt-[80px] mx-auto mb-[67px]">
      <Image
        src={mainImg}
        alt={mainImgAlt}
        width={316}
        height={316}
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full"
      />

      <div>
        <Image
          src={gradientImg}
          alt={gradientImgAlt}
          width={316}
          height={316}
          className="mx-auto relative"
        />
      </div>
    </div>
  )
}

export default CardGradient
