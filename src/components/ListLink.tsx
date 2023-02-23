import Link from "next/link";

const ListLink = (props: {href: string, children: any}) => {
  return (
    <Link
      href="https://snapshot.viditkhandelwal.com"
      rel="noreferrer noopener"
      className="flex flex-row space-x-4 justify-between items-center p-2 rounded-xl hover:bg-neutral-500 dark:hover:bg-neutral-100 hover:bg-opacity-10 dark:hover:bg-opacity-10 w-11/12 lg:w-3/4"
    >
      {props.children}
    </Link>
  );
};

export default ListLink