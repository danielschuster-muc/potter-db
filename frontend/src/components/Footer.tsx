import Link from "next/link";

type FooterSection = {
  title: string;
  content: {
    name: string;
    link: string;
  }[];
};

const footerContent: FooterSection[] = [
  {
    title: "General",
    content: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Imprint",
        link: "https://danischu.com/legal-notice",
      },
    ],
  },
  {
    title: "Database Search",
    content: [
      {
        name: "Books",
        link: "/books",
      },
      {
        name: "Characters",
        link: "/characters",
      },
      {
        name: "Movies",
        link: "/movies",
      },
      {
        name: "Potions",
        link: "/potions",
      },
      {
        name: "Spells",
        link: "/spells",
      },
    ],
  },
  {
    title: "Information",
    content: [
      {
        name: "API Docs",
        link: "https://docs.potterdb.com",
      },
      {
        name: "Source",
        link: "https://github.com/danielschuster-muc/potter-db",
      },
      {
        name: "Scrabby",
        link: "https://github.com/danielschuster-muc/scrabby",
      },
      {
        name: "Sitemap",
        link: "/sitemap.xml",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer color="transparent" className="my-2 rounded-lg">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {footerContent.map((section, index) => (
          <div key={index}>
            <h2 className="pb-2 text-xl font-bold border-b-2 border-secondary">{section.title}</h2>
            <ul className="mt-4">
              {section.content.map((item, index) => (
                <li key={index} className="pb-1">
                  <Link href={item.link} className="text-lg text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-4 text-gray-300">
        <p>Copyright &copy; Potter DB {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
