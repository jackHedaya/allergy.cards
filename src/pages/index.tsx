import Image from "next/image";
import cx from "classnames";
import { Inter, Lalezar } from "next/font/google";
import { HTMLProps, useRef } from "react";
import { BiRightArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });
const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={cx(inter.className, "text-acblue bg-opacity-10 bg-blue-100")}>
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
          <div>
            <div className="flex items-center justify-center relative w-[400px] h-[400px] rounded-full bg-acpink">
              <div className="flex items-center justify-center w-[350px] h-[350px] rounded-full bg-white opacity-50">
                <div className="w-[300px] h-[300px] rounded-full bg-acpink opacity-50" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full hover:scale-110 transition-[all] drop-shadow-2xl">
                <Image
                  className=""
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
      <div className="flex text-white flex-row justify-evenly items-center w-screen bg-acblue py-20">
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
            "flex flex-col justify-center items-center gap-5 flex-[0.75] p-10"
          )}
        >
          <Image
            className="translate-x-[-3rem] shadow-lg"
            src="/card.png"
            alt="card"
            layout="fixed"
            width={400}
            height={400}
          />

          <BiDownArrowAlt className="text-4xl" />

          <Image
            className="translate-x-[3rem] shadow-lg"
            src="/french-card.png"
            alt="card"
            layout="fixed"
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
