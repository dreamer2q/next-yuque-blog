import http from "./http";

const bookId = 2030975;

/**
 * https://www.yuque.com/api/books/2030975/docs?include_catalog_node_uuid=true&include_contributors=true&include_hits=true&limit=20&offset=0
 */
export async function getDocList({ limit = 20, offset = 0 }) {
  return http.get(`/books/${bookId}/docs`, {
    params: {
      include_catalog_node_uuid: true,
      include_contributors: true,
      include_hits: true,
      limit,
      offset,
    },
  });
}

/**
 * https://www.yuque.com/api/docs/flutter-context-async-usage?book_id=2030975&include_contributors=true&include_hits=true&include_like=true&include_pager=true&merge_dynamic_data=false
 */
export async function getDocBySlug(slug) {
  return http.get(`/docs/${slug}`, {
    params: {
      include_contributors: true,
      include_hits: true,
      include_like: true,
      include_pager: true,
      merge_dynamic_data: true,
      book_id: bookId,
    },
  });
}

/**
 * https://www.yuque.com/api/comments/floor?commentable_id=84864637&commentable_type=Doc&include_reactions=true&include_section=true&include_to_user=true
 */

/**
 * https://www.yuque.com/api/actions/users?action_type=like&limit=13&offset=0&target_id=84864637&target_type=Doc
 */

/**
 * https://www.yuque.com/api/catalog_nodes?book_id=2030975
 */
export async function getTocList() {
  return http.get(`/catalog_nodes`, {
    params: {
      book_id: bookId,
    },
  });
}
