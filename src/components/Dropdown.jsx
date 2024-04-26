export default function Dropdown() {
  const list = [
    { text: "Type here" },
    { text: "Android Apps" },
    { text: "Our process" },
    { text: "How we can help" },
  ];
  return (
    <>
      <ul className="bg-white border-[1.5px] border-solid border-pink h-0 group-hover:h-auto rounded-radiusxs group-hover:pt-6 pt-0 group-hover:pb-11 pb-0 xl:w-[220px] w-[180px] absolute top-7 right-1/2 translate-x-1/2 lg:block hidden shadow-[0px_15px_30px_0px_#0000001a] drop_down transition-all duration-300 ease-linear">
        {list.map((a, index) => (
          <li
            className="group-hover:text-black06 text-transparent text-textsm font-normal leading-[106%] text-center border-l-4 border-l-solid border-l-transparent hover:border-l-pink bg-transparent hover:bg-bgpink transition-all duration-300 ease-linear py-2.5"
            key={index}
          >
            {a.text}
          </li>
        ))}
      </ul>
    </>
  );
}
