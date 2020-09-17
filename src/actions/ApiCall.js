import axios from "axios";

const url = "https://api.dev.pastorsline.com/api/contacts.json";

const authToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk";

const companyId = 171;
//const usId = 226;

export const callApi = async () => {
  const ApiData = await axios.get(url, {
    headers: { Authorization: `Bearer ${authToken}` },
    params: { companyId },
  });
  return { ...ApiData.data };
};

// export const callApi = () => {
//   let ApiData;
//   axios
//     .get(url, {
//       headers: { Authorization: `Bearer ${authToken}` },
//       params: { companyId },
//     })
//     .then((res) => {
//       ApiData = res.data;
//       console.log("callApi -> ApiData inside", ApiData);
//     })
//     .catch((err) => console.log(err));

//   console.log("callApi -> ApiData outside", ApiData);
//   return ApiData;
// };
