import { useEffect, useRef } from "react";
import Head from "next/head";

import { RiArrowDropDownLine } from "react-icons/ri";

function ButtonNavbarCenter({ text }) {
  return (
    <span className="flex items-center mx-2">
      {text} <RiArrowDropDownLine />
    </span>
  );
}

function ButtonNavbarRight({ text, primary = false }) {
  return (
    <button
      className={`${
        primary
          ? "bg-black px-3 py-1 rounded-md text-white font-normal"
          : "text-gray-700"
      } text-sm mx-2 font-light`}
    >
      {text}
    </button>
  );
}

// Add `text-transparent` class to activate the gradient
function GradientText({ text, from, to, style = {} }) {
  return (
    <span
      className={`relative bg-clip-text bg-gradient-to-r from-${from} to-${to}`}
      style={style}
    >
      {text}
    </span>
  );
}

export default function Home() {
  const dspRef = useRef();

  useEffect(() => {
    const dspContainer = dspRef.current;

    const tween = {
      css: {
        color: "transparent",
      },
      repeat: 1,
      yoyo: true,
    };

    // Use dynamic import for gsap to make sure that it's loaded in client side
    (async () => {
      const { TimelineMax } = await import("gsap");

      const tl = new TimelineMax({ repeat: -1 });
      for (let i = 0; i < dspContainer.children.length; i++) {
        tl.to(dspContainer.children[i], 1.2, tween);
      }
    })();
  }, []);

  return (
    <div className="antialiased">
      <Head>
        <title>Vercel x Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Navbar small (logo only) */}
        <div className="md:hidden flex justify-center items-center pt-5">
          <img className="h-5" src="/vercel.svg" />
        </div>

        {/* Navbar */}
        <nav className="hidden md:flex justify-between items-center my-3 max-w-4xl mx-auto px-5">
          {/* Left navbar */}
          <div className="w-1/3 flex justify-start items-center">
            <img className="h-5" src="/vercel.svg" />
          </div>

          {/* Center navbar */}
          <div className="w-1/3 flex justify-center items-center text-gray-700 font-light">
            <ButtonNavbarCenter text="Solutions" />
            <ButtonNavbarCenter text="Resources" />
            <ButtonNavbarCenter text="Pricing" />
          </div>

          {/* Right navbar */}
          <div className="w-1/3 flex justify-end items-center">
            <ButtonNavbarRight text="Contact" />
            <ButtonNavbarRight text="Login" />
            <ButtonNavbarRight text="Sign Up" primary />
          </div>
        </nav>

        {/* Content */}
        <div className="pt-10 pb-10">
          <div
            ref={dspRef}
            className="mb-12 flex flex-col items-center justify-center font-extrabold tracking-tighter text-6xl md:text-7xl"
            style={{ lineHeight: 1.1 }}
          >
            <GradientText
              text="Develop."
              from="blue-600"
              to="teal-400"
              style={{ bottom: "-0.15em" }}
            />
            <GradientText text="Preview." from="purple-600" to="pink-600" />
            <GradientText
              text="Ship."
              from="red-600"
              to="yellow-500"
              style={{ top: "-0.15em" }}
            />
          </div>

          <div className="mb-16 max-w-4xl mx-auto flex justify-center items-center">
            <button className="mx-2 w-40 rounded-md py-2 px-3 bg-black text-white">
              Start Deploying
            </button>
            <button className="mx-2 w-40 rounded-md py-2 px-3 border border-gray-400 text-gray-700">
              Get a Demo
            </button>
          </div>

          <div className="mb-12 max-w-3xl mx-auto px-5 text-center">
            <p className="text-lg text-gray-700">
              Vercel combines the best developer experience with an obsessive
              focus on end-user performance. Our platform enables frontend teams
              to do their best work.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
