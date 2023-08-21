import classNames from "classnames"
import Text from "../atoms/Text"

interface ProgressStatProps {
  progressColor?: string
  progressWidth?: string
  text?: string
  numberColor?: string
  number?: string
  numberOnly?: boolean
}

const ProgressStat = ({
  progressWidth = "100%",
  progressColor = "white",
  text = "Text goes here",
  number = "",
  numberColor = "#d2d2d7",
  numberOnly = false,
}: ProgressStatProps) => {
  return (
    <div className="flex items-start justify-between gap-[30px]">
      <div className="max-w-[695px] w-full">
        <div
          className="bar-mask"
          style={{
            width: progressWidth,
          }}
        >
          <hr
            className={classNames(
              "h-[10px] rounded-[5px] border-none",
              progressColor
            )}
          />
        </div>

        <Text as="h4" className="pt-3 text24 font-normal text-color-grey">
          {text}
        </Text>
      </div>

      {number !== "" && (
        <Text
          as="p"
          className={classNames(
            " relative top-[-2px] text-[48px] leading-[.8] tracking-[-0.003em] flex items-center",
            numberColor
          )}
        >
          {number}
          {!numberOnly && <span>x</span>}
        </Text>
      )}
    </div>
  )
}

export default ProgressStat
