import { getDocBySlug } from "../../../lib/api";

export default async function handler(req, res) {
  const { slug } = req.query;
  const query = await getDocBySlug(slug);

  return res.json(query.data);
}
