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
        link: "https://danielschuster.me/legal-notice",
      },
      {
        name: "Sitemap",
        link: "/sitemap.xml",
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
        name: "API",
        link: "/",
      },
      {
        name: "Contribute",
        link: "/",
      },
      {
        name: "Docs",
        link: "https://docs.potterdb.com",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer color="transparent" className="mb-2 m-4 rounded-lg">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {footerContent.map((section, index) => (
          <div key={index} className="p-4">
            <h2 className="pb-2 text-xl font-bold border-b-2 border-secondary">{section.title}</h2>
            <ul className="mt-4">
              {section.content.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-gray-300 hover:text-white">
                    {item.name}
                  </a>
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
