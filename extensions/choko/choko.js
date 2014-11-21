var choko = module.exports;

/**
 * The navigation() hook.
 */
choko.navigation = function(navigations, callback) {

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
 * The type() hook.
 */
choko.type = function(types, callback) {
  // Add content field to pages for adding a link to a markdown page.
  types['page'].fields.contentURL = {
    type: 'text'
  };
  callback();
};

/**
 * The page() hook.
 */
choko.page = function(pages, callback) {
  // Override homepage.
  pages['home'] = {
    path: '/home',
    contentURL: '/content/home.html',
    template: '/templates/html-page.html'
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
