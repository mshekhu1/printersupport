/**
 * Blog publish vs modified dates from CMS (`date_posted` / `date_modified`).
 */
export function getBlogDates(blog = {}) {
  const published = blog.date_posted || null;
  const modified = blog.date_modified || published || null;
  return { published, modified };
}
