const HOME = process.env.NEXT_PUBLIC_BASE_URL;
const firstname = "Dennis";
const username = "dnnsmnstrr";
const title = "Dennis' Zettelkasten";
const config = {
  title,
  description: "A digital garden for my notes and thoughts.",
  author: ' ' + firstname,
  domain: HOME,
  navBarTitle: {
    text: title,
    // logo: "/images/logo.svg",
  },
  showEditLink: false,
  editLinkRoot: `https://github.com/${username}/zettelkasten/edit/main/notes`,
  content: ".",
  showLinkPreviews: false,
  navLinks: [
    { name: "Homepage", href: HOME },
  ],
  search: {
    provider: "kbar",
    kbarConfig: {
      defaultActions: [
        {
          id: "blog",
          name: "Blog",
          keywords: "content",
          perform: () => (window.location = process.env.NEXT_PUBLIC_BASE_URL + "/blog"),
        },
      ],
    },
  },
  comments: {
    provider: "giscus",
    config: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    },
  },
};
export default config;