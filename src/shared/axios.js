import axios from "axios";
import { equal } from "../util/javascript";

const Axios = (method, urlEndPoint, data) =>
  new Promise((myResolve) => {
    let headers = {};

    headers = {
      "Content-Type": "application/json",
    };

    axios({
      method,
      url: process.env.REACT_APP_API_URL + urlEndPoint,
      data,
      headers,
    })
      .then((response) => {
        return myResolve({
          data: response.data,
          statusCode: equal(response.status, 200),
        });
      })
      .catch((err) => {
        return myResolve({
          statusCode: equal(err.response.status, 200),
        });
      });
  });

export default Axios;
