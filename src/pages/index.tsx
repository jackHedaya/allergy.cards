import Image from "next/image";
import cx from "classnames";
import { Inter } from "next/font/google";
import { HTMLProps, useRef } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="flex flex-col h-screen">
        <nav className="flex flex-row items-center p-6 gap-10">
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
        <div className="flex flex-row justify-evenly items-center flex-1 pb-5">
          <div>
            <h2 className="text-6xl font-bold leading-snug">
              Dine with
              <br />
              <span className="text-acpink">Peace of Mind</span>
            </h2>
            <p className="text-2xl mt-4 max-w-md">
              A safer and more discreet way to help restaurant staff keep you
              safe
            </p>
          </div>
          <div>
            {/* three circles */}
            <div className="flex items-center justify-center relative w-[400px] h-[400px] rounded-full bg-acpink">
              <div className="flex items-center justify-center w-[350px] h-[350px] rounded-full bg-white opacity-50">
                <div className="w-[300px] h-[300px] rounded-full bg-acpink opacity-50" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full drop-shadow-2xl">
                <Image
                  src={"/card.png"}
                  alt="card"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          {/* <div className="h-[100px] w-screen bg-black"></div> */}
        </div>
      </div>
      <div className="h-[1000px] w-screen bg-black"></div>
    </main>
  );
}

function BuyButton(props: HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      href="#"
      className="text-xl bg-acpink text-white ml-auto px-4 py-2 rounded-lg border-2 hover:border-acpink hover:text-acpink hover:bg-white transition-colors duration-200"
    >
      Buy <BiRightArrowAlt className="inline-block" />
    </a>
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
