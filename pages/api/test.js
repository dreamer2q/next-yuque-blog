// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  const query = await axios.get(
    "https://www.yuque.com/dreamer2q/blog/flutter-lottie-image-layer-filter-quality-problem"
  );

  if (query.status != 200) {
    console.error(query.data);
  }

  const jsonRegExp =
    /window.appData = JSON.parse\(decodeURIComponent\(\"(.*)\"\)\);/;

  const regExc = jsonRegExp.exec(query.data);
  if (regExc.length === 2) {
    const embedded = regExc[1];
    const appData = JSON.parse(decodeURIComponent(embedded));
    res.status(200);
    return res.json(appData);
  }

  res.status(200).json({ name: "John Doe" });
}
