import Head from "next/head";
import Image from "next/image";
import Tilt from "react-tilt";

import { motion } from "framer-motion";
import pokecoinSVG from "../public/pokecoin.svg";
import TextLoop from "react-text-loop";

import megaPokemons from "../pokemonsDB/mega.json";

import Header from "../components/UI/Header";
import Hero from "../components/UI/Hero";
import Featured from "../components/UI/Featured";
import Footer from "../components/UI/Footer";
import Layout from "../components/UI/Layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  const easing = [1, 1.16, 1, -0.39];

  const text = {
    initial: {
      clipPath: "circle(3.7% at 50% 50%)",
    },
    animate: {
      clipPath: "circle(70.7% at 50% 50%)",
      transition: { duration: 5, ease: easing },
    },
  };

  return (
    <>
      {isLoading ? (
        <motion.div className="loading-screen">
          <Head>
            <title>Home | PókeBuy.</title>
            <meta
              name="description"
              content="Get your favorite pókemon cards with ease."
            />
            <link rel="icon" href="./pokecoin.svg" />
          </Head>
          <motion.section
            className="title-container"
            variants={text}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <section>
              <h1>Póke</h1>
            </section>

            <TextLoop>
              <h1>mons. Buy.</h1>
              <h1>Buy.</h1>
            </TextLoop>
          </motion.section>
        </motion.div>
      ) : (
        <Layout title="Home">
          <Header />
          <Hero />
          <Featured />
          <Footer />
        </Layout>
      )}
      )
    </>
  );
}