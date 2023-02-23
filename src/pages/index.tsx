import Head from "next/head";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <motion.div className="flex flex-row space-x-4 mt-10 ml-10 text-2xl uppercase">
            <motion.div
              whileHover="hover"
              variants={variants1}
              className="flex flex-col space-y-1"
            >
              <Link href="https://viditkhandelwal.com">
                <motion.h1 className="text-white font-light z-10">
                  Vidit Khandelwal
                </motion.h1>
              </Link>

              <motion.div
                variants={variants2}
                className="border-t border-t-white w-0 z-0 h-1/2 bg-white"
              ></motion.div>
            </motion.div>
            <h1 className="text-white font-medium">Domains</h1>
          </motion.div>
        </MainContent>
      </MainContainer>
    </>
  );
}
