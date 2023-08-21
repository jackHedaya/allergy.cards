import Image from "next/image";
import cx from "classnames";
import { Inter, Lalezar } from "next/font/google";
import { HTMLProps, useRef } from "react";
import { BiRightArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });
const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main
      className={cx(inter.className, "text-acblue bg-opacity-10 bg-blue-100")}
    >
      <div className="flex flex-col md:h-screen min-h-[500px]">
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
        <div className="flex md:flex-row md:justify-evenly items-center flex-1 flex-col md:text-left text-center space-y-10 md:space-y-0 md:pb-5 pb-10">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold leading-snug">
              Dine with
              <br />
              {pink("Peace of Mind")}
            </h2>
            <p className="block text-2xl max-w-md translate-y-[-1rem]">
              A safer and more discreet way to help restaurant staff keep you
              safe
            </p>
            <BuyButton size="md">Get Started</BuyButton>
          </div>
          <div className="flex relative justify-center items-center">
            <div className="flex justify-center items-center w-96 h-96 m-auto rounded-full bg-acpink">
              <div className="flex justify-center items-center w-5/6 h-5/6 m-auto rounded-full bg-white opacity-50">
                <div className="w-5/6 h-5/6 m-auto rounded-full bg-acpink opacity-50" />
              </div>
            </div>

            <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-[all] drop-shadow-2xl">
              <Image
                className=""
                src={"/card.png"}
                alt="card"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-white justify-evenly items-center w-screen bg-acblue py-16">
        <div className="flex md:flex-row flex-col items-center space-y-16 md:space-y-0 justify-evenly flex-1">
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
      <div className="px-10 py-10 leading-snug flex flex-row justify-evenly items-center">
        <div className="flex flex-col space-y-10">
          <h2 className="text-5xl font-bold leading-snug">
            Traveling?
            <br />
            {pink("We've got you covered")}
          </h2>

          <p className="text-2xl max-w-xl">
            {
              "Just select the language you need, and we'll take care of the rest. Your translated allergy cards will be delivered right to your doorstep, ready for your next adventure."
            }
          </p>
        </div>
        <div
          className={cx(
            lalezar.className,
            "flex flex-col justify-center items-center gap-5 flex-[0.75] p-10 min-w-[400px] max-w-[600px]"
          )}
        >
          <Image
            className="translate-x-[-3rem] shadow-lg"
            src="/card.png"
            alt="card"
            width={400}
            height={400}
          />

          <BiDownArrowAlt className="text-4xl" />

          <Image
            className="translate-x-[3rem] shadow-lg"
            src="/french-card.png"
            alt="card"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex justify-center align-center pb-24">
        <BuyButton className="m-auto" size="lg">
          Get Started
        </BuyButton>
      </div>
      <footer className="bg-acblue text-white">
        <div className="flex flex-row justify-evenly items-center py-10">
          <div className="flex flex-col space-y-5">
            <h3 className="text-2xl font-bold">allergy.cards</h3>
            <p className="text-xl">Made with ❤️ in NYC</p>
          </div>
          <div className="flex flex-col space-y-5">
            <h3 className="text-2xl font-bold">Contact</h3>
            <p className="text-xl">
              <a
                href="mailto:jack@allergy.cards"
                className="hover:text-acpink transition-colors duration-200"
              >
                Support
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function pink(str: string) {
  return <span className="text-acpink">{str}</span>;
}

function QualityCard(props: { title: string; children: string }) {
  return (
    <div className="max-w-[400px] md:max-w-[250px] space-y-5 text-xl">
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
        "inline-block bg-acpink text-white ml-auto rounded-lg border-2 hover:border-acpink hover:text-acpink hover:bg-white transition-colors duration-200 min-w-[100px]",
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
