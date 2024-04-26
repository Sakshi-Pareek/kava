export default function Commonbtn(props) {
  return (
    <>
      <button className="font-medium text-textsm rounded-radiusxl bg-gradient-to-l to-[#D0006F] from-[#0055B2] border-none md:py-5 py-4 px-10 leading-[125%] text-white hover:animate-pulse">
        {props.btnname}
      </button>
    </>
  );
}
