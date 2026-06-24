export const GET_MENUS = `
  query CpMenus($language: String, $kind: String) {
    cpMenus(language: $language, kind: $kind) {
      _id
      label
      url
      order
      kind
    }
  }
`;
