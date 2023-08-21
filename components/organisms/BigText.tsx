import TextBlock from "../molecules/TextBlock"

const BigText = () => {
  return (
    <section className="py-[200px] bg-white">
      <div className="max-w-[816px] mx-auto w-full">
        <TextBlock
          text="Embraced by creative pros everywhere, Mac Studio now delivers
        next-generation power in the form of the lightning-fast M2 Max and the
        boundary-breaking M2 Ultra. It packs outrageous performance and
        extensive connectivity in an unbelievably compact form, putting
        everything you need within easy reach and transforming any space into a
        studio."
          btnLabel="Go inside M2 Max and M2 Ultra"
        />
      </div>
    </section>
  )
}

export default BigText
