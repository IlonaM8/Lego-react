import axios from "axios";

function UseAxios(name, email, password, birt_date) {
  const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const URL = "http://localhost:3002/";

  axios
    .post(
      URL,
      {
        name: name,
        email: email,
        password: password,
        birt_date: birt_date,
      },
      {
        headers: header,
      }
    )
    .then((res) => res);
}

export default UseAxios;
