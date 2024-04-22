export default function Dropdown() {
  const list = [
    { text: "Type here" },
    { text: "Android Apps" },
    { text: "Our process" },
    { text: "How we can help" },
  ];
  return (
    <>
      <ul className="bg-white border-[1.5px] border-solid border-pink group-hover:visible invisible group-hover: rounded-radiusxs pt-6 pb-11 w-[220px] absolute top-8 right-1/2 translate-x-1/2 lg:block hidden">
        {list.map((a, index) => (
          <li className="group-hover:text-black06 text-transparent text-textsm font-normal leading-[106%] text-center border-l-4 border-l-solid border-l-transparent hover:border-l-pink bg-transparent hover:bg-bgpink transition-all duration-300 ease-linear py-2.5" key={index}>
            {a.text}
          </li>
        ))}
      </ul>
    </>
  );
}
