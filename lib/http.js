import axios from "axios";

const http = axios.create({
  baseURL: "https://www.yuque.com/api",
  timeout: 10 * 1000 /* 10s */,
  headers: {
    Referrer: "https://www.yuque.com/dashboard",
    [`User-Agent`]:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
  },
});

export default http;
