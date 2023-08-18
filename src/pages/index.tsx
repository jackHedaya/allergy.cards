import Image from "next/image";
import cx from "classnames";
import { Inter } from "next/font/google";
import { HTMLProps, useRef } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cx(inter.className, "text-acblue")}>
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
          <div className="space-y-5">
            <h2 className="text-6xl font-bold leading-snug">
              Dine with
              <br />
              <span className="text-acpink">Peace of Mind</span>
            </h2>
            <p className="block text-2xl mt-4 max-w-md">
              A safer and more discreet way to help restaurant staff keep you
              safe
            </p>
            <BuyButton size="md">Get Started</BuyButton>
          </div>
          <div>
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
        </div>
      </div>
      <div className="flex text-white flex-row justify-evenly items-center w-screen bg-acblue py-16">
        <div className="flex flex-row justify-evenly flex-1">
          <QualityCard title="Easy to Use">
            {
              "Just fill in your allergies, and we'll send you a pack of customized and disposable sticky cards that fit right in your pocket."
            }
          </QualityCard>
          <QualityCard title="Adhesive Strip">
            {
              "Allergy Cards attach to order slips with an adhesive strip, ensuring clear allergy communication. Simply use and discard."
            }
          </QualityCard>
          <QualityCard title="Direct Shipping">
            {
              "We handle the printing and shipping, sending your cards directly to your doorstep."
            }
          </QualityCard>
        </div>
      </div>
    </main>
  );
}

function QualityCard(props: { title: string; children: string }) {
  return (
    <div className="max-w-xs space-y-5 text-2xl">
      <h3 className="text-acpink font-bold">{props.title}</h3>
      <p>{props.children}</p>
    </div>
  );
}

interface BuyButtonProps extends Omit<HTMLProps<HTMLAnchorElement>, "size"> {
  size?: "sm" | "md" | "lg";
}

function BuyButton(props: BuyButtonProps) {
  const { className, children, size = "sm", ...otherProps } = props;

  const sizeToClasses = {
    sm: "text-xl px-4 py-2",
    md: "text-2xl px-6 py-3",
    lg: "text-3xl px-8 py-4",
  };

  return (
    <a
      href="#"
      className={cx(
        "inline-block bg-acpink text-white ml-auto rounded-lg border-2 hover:border-acpink hover:text-acpink hover:bg-white transition-colors duration-200",
        sizeToClasses[size],
        className
      )}
      {...otherProps}
    >
      {props.children ?? "Buy"} <BiRightArrowAlt className="inline-block" />
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
