import Link from "next/link";
import ListLink from "./ListLink";
import ListItemLabel from "./ListItemLabel";
import ListItemDescription from "./ListItemDescription";

const List = () => {
  return (
    <div className="text-neutral-900 dark:text-neutral-200">
      <div className="mt-10 text-2xl font-light lg:mr-0 mr-5">
        <h3>viditkhandelwal.com</h3>
        <p className="text-base">
          my primary domain, used for the most important things
        </p>
      </div>
      <div className="flex flex-col space-y-2 mt-5">
      <ListLink href="https://xz.viditkhandelwal.com">
          <ListItemLabel>xzayvian gpt</ListItemLabel>
          <ListItemDescription>
            an ai chatbot based on openai&apos;s gpt-3.5-turbo model
          </ListItemDescription>
        </ListLink>
        <ListLink href="https://snapshot.viditkhandelwal.com">
          <ListItemLabel>snapshot</ListItemLabel>
          <ListItemDescription>
            a daily briefing app. currently under development and invite only
          </ListItemDescription>
        </ListLink>
        <ListLink href="https://nyt.viditkhandelwal.com">
          <ListItemLabel>nyt</ListItemLabel>
          <ListItemDescription>
            a simple no nonsense app that gets you the top stores from the New
            York Times Wire.
          </ListItemDescription>
        </ListLink>
        <ListLink href="https://bio.viditkhandelwal.com">
          <ListItemLabel>bio</ListItemLabel>
          <ListItemDescription>
            a made-from-scratch linktree-style single-page website
          </ListItemDescription>
        </ListLink>
        <ListLink href="https://acad.viditkhandelwal.com">
          <ListItemLabel>acad</ListItemLabel>
          <ListItemDescription>
            academic subdomain pertaining to academic papers and essays in
            Economics, Political Science, Philosophy, and Sociology
          </ListItemDescription>
        </ListLink>
        <ListLink href="https://domains.viditkhandelwal.com">
          <ListItemLabel>domains</ListItemLabel>
          <ListItemDescription>
            this website, to list all currently active and important domains and
            subdomains
          </ListItemDescription>
        </ListLink>
        <ListLink href="https://v2.viditkhandelwal.com">
          <ListItemLabel>v2</ListItemLabel>
          <ListItemDescription>
            my upcoming comprehensive portfolio made in next.js
          </ListItemDescription>
        </ListLink>
        <ListLink href="https://coronavirus.viditkhandelwal.com">
          <ListItemLabel>coronavirus</ListItemLabel>
          <ListItemDescription>
            subdomain forward for Johns Hopkins Coronavirus Resource Center
          </ListItemDescription>
        </ListLink>

        {/* <ListLink href="https://journal.viditkhandelwal.com">
          <div className="flex flex-row items-center space-x-4">
            <p className="font-base text-lg">journal</p>
            <p className="text-amber-500 text-xs font-light">inactive</p>
          </div>

          <p className="font-light">
            subdomain forward for all Journal series poems.
          </p>
        </ListLink> */}
      </div>
      <div className="mt-10 text-2xl font-light mr-5">
        <h3>vidit.page</h3>
        <p className="text-base">
          used sometimes, for experimental stuff. usually nothing too important
        </p>
      </div>
      <div className="flex flex-col space-y-2 mt-5">
        <ListLink href="https://jsplayground.vidit.page">
          <ListItemLabel>jsplayground</ListItemLabel>
          <ListItemDescription>
            academic subdomain used for testing JavaScript/JQuery code while
            learning during an independent study
          </ListItemDescription>
        </ListLink>
        <ListLink href="https://snapshot.vidit.page">
          <ListItemLabel>keithharing</ListItemLabel>
          <ListItemDescription>
            educational history project on Keith Haring for my Queer
            Theory/Queer Lives course.
          </ListItemDescription>
        </ListLink>
        {/* <ListLink href="https://uc.err.vidit.page">
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
        </ListLink> */}
      </div>
      <div className="mt-10 text-2xl font-light mr-5">
        <h3>v-k.pw</h3>
        <p className="text-base">
          a domain exclusively for Vidit Khandelwal’s branded URL shortener
          service for making links to be shared on social media.
        </p>
      </div>
      <div className="flex flex-col space-y-2 mt-5">
        {/* <ListLink href="https://error.v-k.pw">
          <p className="font-base text-lg">error</p>
          <p className="font-light">
          error utility page which the user sees if they enter a short URL that either does not exist or is not used anymore
          </p>
        </ListLink> */}
      </div>
    </div>
  );
};

export default List;
