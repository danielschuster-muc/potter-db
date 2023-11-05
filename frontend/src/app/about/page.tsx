import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-6xl">About</h1>
      <p className="mt-4 text-lg">
        Potter DB is an expansive API dedicated to housing a comprehensive collection of data from
        the beloved Harry Potter Universe. From intricate character profiles to detailed information
        about spells, potions, books, and movies, Potter DB serves as a centralized hub for all
        things related to J.K. Rowling&apos;s magical world.
      </p>

      <div className="my-8">
        <h2 className="text-4xl">Our Journey</h2>
        <p className="mt-4 text-lg">
          The story of Potter DB is a project of passion and love for the Harry Potter Universe. It
          all started in mid of June 2022, when I, known as{" "}
          <Link
            className="text-gray-300 hover:text-white underline"
            href="https://github.com/danielschuster-muc">
            @danielschuster-muc
          </Link>
          , a dedicated Harry Potter fan, realized that something was missing in the magical digital
          world. As someone who had always been captivated by the wonders of the Wizarding World, I
          felt that there was something missing for fellow Potterheads and developers like myself.
          So I decided to create Potter DB, an API and website that would serve as a centralized hub
          for all things related to magical world of Harry Potter. <br /> <br />
          Potter DB is an open-source project, and I am always looking for contributors, new ideas
          or ways to improve Potter DB. If you are interested in contributing, please check out the{" "}
          <Link
            className="text-gray-300 hover:text-white underline"
            href="https://github.com/danielschuster-muc/potter-db">
            GitHub repository
          </Link>
          .
        </p>
      </div>
      <div className="my-8">
        <h2 className="text-4xl">Copyright Information</h2>
        <p className="mt-4 text-lg">
          Potter DB is an unofficial Harry Potter Database, and is not endorsed by or affiliated
          with J.K. Rowling, Warner Bros., or any of the individuals or companies associated with
          producing and publishing Harry Potter books and films. All content on this website is for
          informational purposes only. Potter DB does not claim any ownership over the data
          displayed on this website. All data has been obtained from open sources such as the{" "}
          <Link
            className="text-gray-300 hover:text-white underline"
            href="https://harrypotter.fandom.com">
            Harry Potter Wiki
          </Link>
          , ensuring a comprehensive yet respectful approach to data collection. Potter DB operates
          under the{" "}
          <Link
            className="text-gray-300 hover:text-white underline"
            href="https://github.com/danielschuster-muc/potter-db/tree/master/LICENSE">
            MIT License
          </Link>
          , emphasizing our commitment to transparency and open collaboration.
        </p>
      </div>
    </div>
  );
}