import Link from "next/link";
import ListLink from "./ListLink";

const List = () => {
  return (
    <div className="text-neutral-900 dark:text-neutral-200">
      <div className="mt-10 text-2xl font-light lg:mr-0 mr-5">
        <h3>viditkhandelwal.com</h3>
        <p className="text-base">
          my primary domain, used for the most important things.
        </p>
      </div>
      <div className="flex flex-col space-y-2 mt-5">
        <ListLink href="https://snapshot.viditkhandelwal.com">
          <p className="font-base text-lg">snapshot</p>
          <p className="font-light">
            a daily briefing app. currently under development and invite only.
          </p>
        </ListLink>
        <ListLink href="https://nyt.viditkhandelwal.com">
          <p className="font-base text-lg">nyt</p>
          <p className="font-light">
            a simple no nonsense app that gets you the top stores from the New
            York Times Wire.
          </p>
        </ListLink>
        <ListLink href="https://bio.viditkhandelwal.com">
          <p className="font-base text-lg">bio</p>
          <p className="font-light">
            a made-from-scratch linktree-style single-page website
          </p>
        </ListLink>
        <ListLink href="https://acad.viditkhandelwal.com">
          <p className="font-base text-lg">acad</p>
          <p className="font-light">
            academic subdomain pertaining to academic papers and essays in
            Economics, Political Science, Philosophy, and Sociology.
          </p>
        </ListLink>
        <ListLink href="https://coronavirus.viditkhandelwal.com">
          <p className="font-base text-lg">coronavirus</p>
          <p className="font-light">
            subdomain forward for Johns Hopkins Coronavirus Resource Center.
          </p>
        </ListLink>
        <ListLink href="https://journal.viditkhandelwal.com">
          <div className="flex flex-row items-center space-x-4">
            <p className="font-base text-lg">journal</p>
            <p className="text-amber-500 text-xs font-light">inactive</p>
          </div>

          <p className="font-light">
            subdomain forward for all Journal series poems.
          </p>
        </ListLink>
      </div>
      <div className="mt-10 text-2xl font-light mr-5">
        <h3>vidit.page</h3>
        <p className="text-base">
          used sometimes, for experimental stuff. usually nothing too important.
        </p>
      </div>
      <div className="flex flex-col space-y-2 mt-5">
        <ListLink href="https://jsplayground.vidit.page">
          <p className="font-base text-lg">jsplayground</p>
          <p className="font-light">
            subdomain forward for Johns Hopkins Coronavirus Resource Center.
          </p>
        </ListLink>
        <ListLink href="https://snapshot.vidit.page">
          <p className="font-base text-lg">keithharing</p>
          <p className="font-light">
            educational history project on Keith Haring for my Queer
            Theory/Queer Lives course.
          </p>
        </ListLink>
        <ListLink href="https://uc.err.vidit.page">
          <p className="font-base text-lg">uc.err</p>
          <p className="font-light">
            error utility page which under construction pages/websites redirect
            to
          </p>
        </ListLink>
        <ListLink href="https://404.err.vidit.page">
          <p className="font-base text-lg">uc.err</p>
          <p className="font-light">
            another error utility page which under construction pages/websites
            redirect to
          </p>
        </ListLink>
      </div>
      <div className="mt-10 text-2xl font-light mr-5">
        <h3>v-k.pw</h3>
        <p className="text-base">
        a domain exclusively for Vidit Khandelwal’s branded URL shortener service for making links to be shared on social media.
        </p>
      </div>
      <div className="flex flex-col space-y-2 mt-5">
      <ListLink href="https://error.v-k.pw">
          <p className="font-base text-lg">error</p>
          <p className="font-light">
          error utility page which the user sees if they enter a short URL that either does not exist or is not used anymore
          </p>
        </ListLink>
      </div>
    </div>
  );
};

export default List;
