export default function HeroHeading(props) {
  return (
    <>
      <div className="container lg:max-w-[1202px] mx-auto px-3 lg:my-40 md:my-24 sm:my-20 my-12 xl:pt-5">
        <h1 className="lg:text-textxxl md:text-textxl text-textlg text-center text-black02 font-semibold leading-[125%]">
          {props.heading}
        </h1>
      </div>
    </>
  );
}
