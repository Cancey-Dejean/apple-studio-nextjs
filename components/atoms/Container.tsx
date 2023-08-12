import classNames from "classnames"
import { ReactNode } from "react"

interface ContainerProps {
  className?: string
  children: ReactNode
}

const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div
      className={classNames(
        "max-w-[1024px] w-full mx-auto px-[22px]",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
