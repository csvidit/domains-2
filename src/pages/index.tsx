import Head from "next/head";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import { motion } from "framer-motion";
import Link from "next/link";
import List from "@/components/List";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vidit Khandelwal&apos;s Domains</title>
        <meta
          name="description"
          content="A list of all the currently active domains and subdomains of Vidit Khandelwal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vidit Khandelwal" />
        <meta
          name="keywords"
          content="Vidit Khandelwal, DePauw University, DePauw, CS, computer science, author, writer, Journal, series, TGHC, scifi, science fiction, Pondering Upon, snapshot, turbobiz, bio, github, coder, developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />

        <meta property="og:title" content="Vidit Khandelwal's Domains" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:url" content="https://domains.viditkhandelwal.com" />
        <meta property="og:site_name" content="Vidit Khandelwal" />
        <meta
          property="description"
          content="A list of all the currently active domains and subdomains of Vidit Khandelwal"
        />
      </Head>
      <MainContainer>
        <Header />
        <MainContent>
          {/* <div className="flex flex-row space-x-1">
            <div className="text-cyan-500">This list is</div>
            <div className="text-cyan-700">(probably)</div>
            <div className="text-cyan-500">not exhaustive.</div>
          </div> */}
          <List />
        </MainContent>
        <Footer />
      </MainContainer>
    </>
  );
}

{
  /* <div className="backdrop-blur-xl bg-black bg-opacity-20 mt-10 mr-10 p-5 rounded-xl text-white w-72">
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div> */
}
