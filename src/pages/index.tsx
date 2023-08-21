import Image from "next/image";
import Head from "next/head";
import cx from "classnames";
import { Inter, Lalezar } from "next/font/google";
import { BiDownArrowAlt } from "react-icons/bi";
import { BuyButton } from "@/shared/BuyButton";
import { Navigation } from "@/shared/Navigation";

const inter = Inter({ subsets: ["latin"] });
const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main
      className={cx(inter.className, "text-acblue bg-opacity-10 bg-blue-100")}
    >
      <Head>
        <title>Allergy Cards | Dine with Peace of Mind</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A safer and more discreet way to help restaurant staff keep you safe"
        />
        <meta
          name="keywords"
          content="allergy, cards, allergy cards, restaurant, food, allergy cards for restaurants, dietary restriction cards, dietary restriction"
        />
        <meta name="author" content="Jack Hedaya" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#19213D" />
      </Head>
      <div className="flex flex-col md:h-screen min-h-[500px]">
        <Navigation />
        <div className="flex md:flex-row md:justify-evenly items-center flex-1 flex-col md:text-left text-center space-y-10 md:space-y-0 md:pb-5 pb-10">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold leading-snug">
              Dine with
              <br />
              {pink("Peace of Mind")}
            </h2>
            <p className="block text-2xl max-w-md translate-y-[-1rem] md:px-0 px-5">
              A safer and more discreet way to help restaurant staff keep you
              safe
            </p>
            <BuyButton size="md">Get Started</BuyButton>
          </div>
          <div className="flex relative justify-center items-center">
            <div className="flex justify-center items-center w-80 h-80 md:w-96 md:h-96 m-auto rounded-full bg-acpink">
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
      <div className="flex text-white justify-evenly items-center w-screen bg-acblue py-10">
        <div className="flex md:flex-row flex-col items-center md:items-start space-y-16 md:space-y-0 justify-evenly flex-1 px-10">
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
      <div className="px-10 py-10 leading-snug flex md:flex-row flex-col justify-evenly items-center">
        <div className="flex flex-col space-y-10">
          <h2 className="text-5xl font-bold leading-snug md:text-left text-center">
            Traveling?
            <br />
            {pink("We've got you covered")}
          </h2>

          <p className="text-2xl md:max-w-xl md:text-left text-center">
            {
              "Just select the language you need, and we'll take care of the rest. Your translated allergy cards will be delivered right to your doorstep, ready for your next adventure."
            }
          </p>
        </div>
        <div
          className={cx(
            lalezar.className,
            "flex flex-col justify-center items-center gap-5 max-w-[600px] px-0 py-10 md:px-10"
          )}
        >
          <div className="w-full min-h-[200px] relative drop-shadow-lg hover:scale-110 transition-[all]">
            <Image
              className="md:translate-x-[-3rem] "
              src="/card.png"
              alt="card"
              objectFit="contain"
              fill
            />
          </div>

          <BiDownArrowAlt className="text-4xl" />

          <Image
            className="md:translate-x-[3rem] drop-shadow-lg hover:scale-110 transition-[all]"
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

      <footer className="bg-acblue text-white pt-10 space-y-8 pb-5">
        <div className="flex flex-row justify-evenly items-center">
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
        <div className="flex flex-row justify-center items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} allergy.cards. All rights reserved.
          </p>
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
