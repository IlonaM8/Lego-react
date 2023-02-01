import axios from "axios";

function UseAxios(email) {
  const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const URL = "http://localhost:3002/";

  axios
    .post(
      URL,
      {
        email: email,
      },
      {
        headers: header,
      }
    )
    .then((res) => res);
}

export default UseAxios;
 