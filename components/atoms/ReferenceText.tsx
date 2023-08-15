import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ReferenceTextProps {
  className?: string
  children?: ReactNode
}

const ReferenceText = ({ className = "", children }: ReferenceTextProps) => {
  return (
    <sup
      className={twMerge(
        "reference-text relative top-auto font-feature align-[initial]",
        className
      )}
    >
      {children}
    </sup>
  )
}

export default ReferenceText
