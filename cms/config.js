export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'rmulder/nextjs-netlify-cms',
    branch: 'main',
    base_url: 'https://goofy-engelbart-c80d49.netlify.app',
    auth_endpoint: 'api/auth',
  },
  media_folder: 'public/images',
  public_folder: 'images',
  /*
  site_url: 'http://familyhealthservices.org',
  display_url: 'http://familyhealthservices.org',
  logo_url: 'http://familyhealthservices.org/logo.svg',
  slug: {
    encoding: 'ascii,
    clean_accents: true,
  },
  */
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'cms/content/pages/home.md',
          fields: [
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
            {
              label: 'Hero Image',
              name: 'hero_image',
              widget: 'image',
            },
          ],
        },
      ],
    },
  ],
}
