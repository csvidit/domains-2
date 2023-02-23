import Head from "next/head";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import { motion } from "framer-motion";
import Link from "next/link";
import List from "@/components/List";
import Footer from "@/components/Footer";

export default function Home() {
  const variants1 = {
    hover: {},
  };

  const variants2 = {
    hover: {
      width: "100%",
      height: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <MainContent>
          <motion.div className="flex flex-row space-x-2 text-2xl uppercase">
            <motion.div
              whileHover="hover"
              variants={variants1}
              className="flex flex-col space-y-1"
            >
              <Link href="https://viditkhandelwal.com">
                <motion.h1 className="text-neutral-900 dark:text-neutral-100 font-light z-10">
                  Vidit Khandelwal
                </motion.h1>
              </Link>

              <motion.div
                variants={variants2}
                className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 z-0 h-1/2 bg-neutral-900 dark:bg-neutral-100"
              ></motion.div>
            </motion.div>
            <h1 className="text-neutral-900 dark:text-neutral-100 font-medium">Domains</h1>
          </motion.div>
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
