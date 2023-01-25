import { List } from "./DataProducts";

const service = {
  getData: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = List.slice(from, to);
      resolve({
        count: List.length,
        data: data,
      });
    });
  },
};

export default service;
