// import { List } from "./DataProducts";
import {productsList} from "../Checkbox2/data"

const service = {
  getData: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = productsList.slice(from, to);
      resolve({
        count: productsList.length,
        data: data,
      });
    });
  },
};

export default service;
