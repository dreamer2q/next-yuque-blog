import { getDocList } from "../../../lib/api";

export default async function handler(req, res) {
  const { limit = 20, offset = 0 } = req.query;
  const query = await getDocList({ limit, offset });

  return res.json(query.data);
}
