import Link from "next/link";

const ListLink = (props: {href: string, children: any}) => {
  return (
    <Link
      href={props.href}
      rel="noreferrer noopener"
      className="flex flex-col lg:flex-row lg:space-x-4 justify-between items-start lg:items-center p-2 rounded-xl hover:bg-neutral-500 dark:hover:bg-neutral-100 hover:bg-opacity-10 dark:hover:bg-opacity-10 w-11/12 lg:w-3/4"
    >
      {props.children}
    </Link>
  );
};

export default ListLink