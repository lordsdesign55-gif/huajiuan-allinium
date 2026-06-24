export const GET_POSTS = `
  query CpPosts($language: String, $status: String) {
    cpPosts(language: $language, status: $status) {
      _id
      title
      slug
      excerpt
      content
      status
      createdAt
      categories {
        _id
        name
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query CpPostDetail($slug: String!, $language: String) {
    cpPostDetail(slug: $slug, language: $language) {
      _id
      title
      slug
      excerpt
      content
      status
      createdAt
      categories {
        _id
        name
      }
    }
  }
`;
