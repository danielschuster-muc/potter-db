import HoverLink from "@/components/ui/HoverLink";

export default function AboutPage() {
  return (
    <div className="w-full md:w-5/6 mx-auto">
      <h1 className="text-6xl">About</h1>
      <p className="mt-4 text-lg">
        Potter DB is an expansive API dedicated to housing a comprehensive collection of data from
        the Harry Potter Universe. From intricate character profiles to detailed information about
        spells, potions, books, and movies, Potter DB serves as a centralized hub for all things
        related to J.K. Rowling&apos;s magical world.
      </p>

      <div className="my-8">
        <h2 className="text-4xl">Our Journey</h2>
        <p className="mt-4 text-lg">
          The story of Potter DB is a project of passion and love for the Harry Potter Universe. It
          all started in mid of June 2022, when I, known as{" "}
          <HoverLink title="@danielschuster-muc" href="https://github.com/danielschuster-muc" />
          , a dedicated Harry Potter fan, realized that something was missing in the magical digital
          world for fellow Potterheads and developers like myself. So I decided to create Potter DB,
          an API and website that would serve as a place for all things related to the magical world
          of Harry Potter. <br /> <br />
          Potter DB is an open-source project, and I am always looking for contributors, new ideas
          or ways to improve Potter DB. If you are interested in contributing, feel free to check
          out the{" "}
          <HoverLink
            title="GitHub repository"
            href="https://github.com/danielschuster-muc/potter-db"
          />
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
          <HoverLink title="Harry Potter Wiki" href="https://harrypotter.fandom.com" />, ensuring a
          comprehensive yet respectful approach to data collection. Potter DB operates under the{" "}
          <HoverLink
            title="MIT License"
            href="https://github.com/danielschuster-muc/potter-db/tree/master/LICENSE"
          />
          , emphasizing our commitment to transparency and open collaboration.
        </p>
      </div>
    </div>
  );
}
