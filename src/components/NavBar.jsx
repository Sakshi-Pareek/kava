"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { Logo, Updownarrow } from "./Icon";
import Dropdown from "./Dropdown";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [_document, _setdocument] = useState(null);
  useEffect(() => {
    _setdocument(document);
    if (show === false) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  });
  return (
    <>
      <nav className="flex items-center justify-between container mx-auto lg:py-[23px] py-3 px-3 lg:max-w-[1202px]">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div
          className={`${
            show ? "left-[-100%]" : "left-0"
          } flex max-lg:fixed max-lg:top-0 max-lg:bg-slate-400 max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-10 items-center justify-center`}
        >
          <Link
            href={"/"}
            onClick={() => setShow(!show)}
            className="text-textsm font-medium text-black01 leading-[135%] hover:text-textblue duration-300 ease-linear"
          >
            Home
          </Link>
          <Link
            href={"/ourapps"}
            onClick={() => setShow(!show)}
            className="text-textsm font-medium text-black01 leading-[135%] hover:text-textblue duration-300 ease-linear flex items-center gap-2 group relative nav_link"
          >
            Apps <Updownarrow />
            <Dropdown />
          </Link>
          <Link
            onClick={() => setShow(!show)}
            href={"/solution"}
            className="text-textsm font-medium text-black01 leading-[135%] hover:text-textblue duration-300 ease-linear flex items-center gap-2 group relative nav_link"
          >
            Solutions <Updownarrow />
            <Dropdown />
          </Link>
          <Link
            onClick={() => setShow(!show)}
            href={"/ourservice"}
            className="text-textsm font-medium text-black01 leading-[135%] hover:text-textblue duration-300 ease-linear flex items-center gap-2 group relative nav_link"
          >
            Services <Updownarrow />
            <Dropdown />
          </Link>
          <Link
            href={"#contact"}
            onClick={() => setShow(!show)}
            className="text-textsm font-medium text-black01 leading-[135%] hover:text-textblue duration-300 ease-linear"
          >
            Contact Us
          </Link>
        </div>
        <div onClick={() => setShow(!show)} className="lg:hidden z-30">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction="left"
            size={40}
            easing="ease-in"
          />
        </div>
      </nav>
    </>
  );
}
