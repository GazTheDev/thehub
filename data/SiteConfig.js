module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Gareth Davies Website", // Site title.
  siteTitleAlt: "Gareth Davies Website", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://b2bwebmasters.co.uk", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "B2B Webmasters UK is a web development company based in Braintree, Essex.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https://b2b-webmasters.disqus.com", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Gareth Davies", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Braintree, Essex", // User location to display in the author segment.
  userAvatar: "https://preview.ibb.co/hRAHxx/icon.jpg", // User avatar to display in the author segment.
  userDescription:
    " Website nerd from braintree, essex. Builiding websites since 2014", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "About",
      url: "/about",
      iconClassName: "fa fa-id-card"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Gareth_BTFC",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "B2B Braintree",
      url: "https://www.b2bbraintree.co.uk",
      iconClassName: "fa fa-at"
    },
    {
      label: "Email",
      url: "mailto:info@b2bbraintree.co.uk",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Hand Crafted in Braintree, Essex. B2B Webmasters " // Copyright string for the footer of the website and RSS feed.
};
