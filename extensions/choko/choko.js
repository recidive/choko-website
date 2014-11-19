var choko = module.exports;

/**
 * The navigation() hook.
 */
choko.navigation = function(navigations, callback) {

  // Add main navigation items for the choko pages.
  navigations['main'].items.push({
    title: 'Features',
    url: '/features'
  });

  navigations['main'].items.push({
    title: 'Demo',
    url: 'http://demo.choko.org'
  });

  navigations['main'].items.push({
    title: 'Documentation',
    url: '/documentation'
  });

  navigations['main'].items.push({
    title: 'Contribute',
    url: '/contribute'
  });

  navigations['main'].items.push({
    title: 'About',
    url: '/about'
  });

  callback();
};

/**
 * The page() hook.
 */
choko.page = function(pages, callback) {
  // Override homepage.
  pages['home'] = {
    path: '/home'
  };

  callback();
}

/**
 * The context() hook.
 */
choko.context = function(contexts, callback) {
  // Change default theme to journal.
  //contexts['global'].reactions.theme = 'journal';

  callback();
};
