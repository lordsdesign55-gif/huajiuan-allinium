export const GET_PAGES = `
  query CpPages($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      description
      content
      status
    }
  }
`;

export const GET_PAGE_BY_SLUG = `
  query CpPageDetail($slug: String!, $language: String) {
    cpPageDetail(slug: $slug, language: $language) {
      _id
      name
      slug
      description
      content
      status
    }
  }
`;
