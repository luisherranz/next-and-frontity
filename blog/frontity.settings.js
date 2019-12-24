const settings = {
  name: "frontity-app",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Blog", "/blog/"],
            ["Nature", "/blog/category/nature/"],
            ["Travel", "/blog/category/travel/"],
            ["Japan", "/blog/tag/japan/"],
            ["About Us", "/blog/about-us/"]
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://test.frontity.io/wp-json",
          subdirectory: "blog"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
