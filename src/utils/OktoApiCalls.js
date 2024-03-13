import axios from "axios";
const BackendURL = "https://sandbox-api.okto.tech";

const tok =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4YmY1YzM3NzJkZDRlN2E3MjdhMTAxYmY1MjBmNjU3NWNhYzMyNmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTcxMTM4OTE4MzI0MDA5NzQzMzYiLCJlbWFpbCI6ImlzaGl0YXNyaXZhc3RhdmEyODA5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoib0pSRXN3SWRLdzdzNGpjT1ZDR09JQSIsIm5hbWUiOiJJc2hpdGEgU3JpdmFzdGF2YSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJQ0gyRXNrRndXMTBmcUxlUm5pZHdiM0o1RHd1WFp1UjBQZkVpbUNaUHY9czk2LWMiLCJnaXZlbl9uYW1lIjoiSXNoaXRhIiwiZmFtaWx5X25hbWUiOiJTcml2YXN0YXZhIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MTAzMjI0MzksImV4cCI6MTcxMDMyNjAzOX0.Sdb5HkT4ke69bdjqu64or6m4-Yt_vkl1r9a9uUG1d97G6evGuUQZ6T4IyNJ9vWDku27M5gh9xLtKUJ07VATJr5pDvwhSGqKniv0PMGtw-Q9RoPpDYWhVrQPmNnK_rfxbypzxKd1LxjLrZa-IvlTpouTdZAMImpQsyhpBlIfvIAv8UzDGAbGW9NkjYEdmC7zNFGQXOgrjc88viQBC6DGBhltnGKTWb6mk-q4Sh6JVHuDuXhMGJSOoGV4L5SsxRGXaeKDc1P20C4QPq1WPkg5DnmxCAEYHIBCjEPqQg9jX3haa-EmWRsfjz70ety_59vCwrRUtw34_8Kq2XT0jhS7lhg";

const loginAPI = async () => {
  let body = {
    id_token: tok,
  };
  let headers = {
    "x-api-key": "ed73c079-f78b-42ff-ad2d-d3e748c48238",
  };
  try {
    const response = await axios.post(
      `${BackendURL}/api/v1/authenticate`,
      body,
      { headers }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const setPinAPI = async (pin, token) => {
  let body = {
    id_token: tok,
    token: token,
    relogin_pin: pin,
    purpose: "set_pin",
  };

  let headers = {
    "x-api-key": "ed73c079-f78b-42ff-ad2d-d3e748c48238",
  };
  try {
    const response = await axios.post(`${BackendURL}/api/v1/set_pin`, body, {
      headers,
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const createWallet = async () => {
  let body = {
    id_token: tok,
  };
  let headers = {
    Authorization: "Bearer " + localStorage.getItem("oktoAuthToken"),
    "x-api-key": "ed73c079-f78b-42ff-ad2d-d3e748c48238",
  };

  try {
    const response = await axios.post(`${BackendURL}/api/v1/wallet`, body, {
      headers,
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// {
//     "code": "4/0AeaYSHBcoKduHNRRzDmxM7LCsP8PI2ctGr2ZWmFqU_QTVDvgs2Nn0OskGKOsOeyQadKYTg",
//     "scope": "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
//     "authuser": "0",
//     "prompt": "consent"
// }

export { loginAPI, setPinAPI, createWallet };
