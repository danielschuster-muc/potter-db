import Image from 'next/image'

export default {
  project: 'https://github.com/danielschuster-muc/potter-db', // GitHub link in the navbar
  docsRepositoryBase:
    'https://github.com/danielschuster-muc/potter-db/tree/docs', // base URL for the docs repository
  titleSuffix: ' – Potter DB: Docs',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Potter DB.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <Image src="/images/logo.svg" width={25} height={25} alt="logo" />
      <span>Potter DB: Docs</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Potter DB: Docs - Documentation for Potter DB"
      />
      <meta name="og:title" content="Potter DB: Docs" />
    </>
  ),
  i18n: [{ locale: 'en', text: 'English' }],
}
