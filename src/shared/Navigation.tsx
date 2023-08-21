import Image from "next/image";
import cx from "classnames";
import { BuyButton } from "./BuyButton";
import { HTMLProps } from "react";

export function Navigation() {
  return (
    <nav className="flex md:flex-row items-center p-6 gap-10 flex-col">
      <a href="#" className="flex flex-row items-center gap-x-4">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <h1 className="text-2xl font-bold float-left">allergy.cards</h1>
      </a>
      <div className="flex-grow">
        <div className="flex flex-row justify-start items-center gap-x-10">
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
          <BuyButton />
        </div>
      </div>
    </nav>
  );
}

function NavLink(props: HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      className={cx(
        "text-lg hover:text-acpink transition-colors duration-200",
        props.className
      )}
      {...props}
    />
  );
}
