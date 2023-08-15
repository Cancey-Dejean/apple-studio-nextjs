import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps {
  className?: string
  children: ReactNode
}

const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div
      className={twMerge("max-w-[1024px] w-full mx-auto px-[22px]", className)}
    >
      {children}
    </div>
  )
}

export default Container
