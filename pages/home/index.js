import React from "react";
import Featured from "../../components/UI/Featured";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";
import Hero from "../../components/UI/Hero";
import Layout from "../../components/UI/Layout";

import { useSelector } from "react-redux";

export default function Home() {
  const counter = useSelector((state) => state.counter);
  console.log(counter)

  return (
    <>
      <Layout title="Home">
        <Header />
        <Hero />
        <Featured />
        <Footer />
      </Layout>
    </>
  );
}
