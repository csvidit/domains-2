import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
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
    <motion.div className="flex flex-row space-x-2 w-screen h-max text-2xl uppercase fixed pl-5 pr-5 lg:pl-10 top-0 lg:pt-10 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30">
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
      <h1 className="text-neutral-900 dark:text-neutral-100 font-medium">
        Domains
      </h1>
    </motion.div>
  );
};

export default Header;