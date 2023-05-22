import { clearLogin } from "../../store/actions/login";
import { GetAccessToken } from "../authentication";
import axios from "axios";
const postData = async (fields, ulr, dispatch, navigate) => {
  const data = new Promise(async (resolve, reject) => {
    try {
      let token = GetAccessToken();
      const formData = new FormData();
      let isUplaoding = false;
      Object.entries(fields).forEach(([key, value]) => {
        if (typeof value === "object") {
          isUplaoding = true;
          formData.append(key, value[0]);
        } else {
          formData.append(key, value);
        }
      });
      const response = await axios.post(`${process.env.REACT_APP_API}${ulr}`, formData, {
        headers: {
          "Content-Type": isUplaoding ? "multipart/form-data" : "application/json",
          "x-access-token": token,
        },
      });
      if (response.status === 401) {
        try {
          dispatch(clearLogin());
          navigate("/");
          navigate(0);
        } catch (error) {
          console.log(error);
        }
      }
      resolve({ status: response.status, data: response.data });
    } catch (error) {
      console.log("error", error);
      resolve({
        status: error.response.status,
        data: error.response?.data?.message,
      });
    }
  });

  return data;
};
const putData = async (fields, ulr, dispatch, navigate) => {
  const data = new Promise(async (resolve, reject) => {
    try {
      let token = GetAccessToken();
      const formData = new FormData();
      let isUplaoding = false;
      Object.entries(fields).forEach(([key, value]) => {
        if (typeof value === "object") {
          isUplaoding = true;
          formData.append(key, value[0]);
        } else {
          formData.append(key, value);
        }
      });
      const response = await axios.put(`${process.env.REACT_APP_API}${ulr}`, formData, {
        headers: {
          "Content-Type": isUplaoding ? "multipart/form-data" : "application/json",
          "x-access-token": token,
        },
      });
      if (response.status === 401) {
        try {
          dispatch(clearLogin());
          navigate("/");
          navigate(0);
        } catch (error) {
          console.log(error);
        }
      }
      resolve({ status: response.status, data: response.data });
    } catch (error) {
      resolve({
        status: error.response.status,
        data: error.response?.data?.message,
      });
    }
  });

  return data;
};
const getData = async (fields, ulr, dispatch, navigate) => {
  const data = new Promise(async (resolve, reject) => {
    try {
      let queryString = Object.keys(fields)
        .map((key) => key + "=" + fields[key])
        .join("&");
      let token = GetAccessToken();
      const response = await axios.get(`${process.env.REACT_APP_API}${ulr}?${queryString}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });
      if (response.status === 401) {
        try {
          localStorage.removeItem("user");
          navigate("/");
          navigate(0);
        } catch (error) {
          console.log(error);
        }
      }
      resolve({ status: response.status, data: response.data });
    } catch (error) {
      if (error.response.status) {
        if (error.response.status === 401) {
          try {
            localStorage.removeItem("user");
            navigate("/");
            navigate(0);
          } catch (error) {
            console.log(error);
          }
        }
      }
      resolve({
        status: error.response.status,
        data: error.response?.data?.message,
      });
    }
  });
  return data;
};
const deleteData = async (fields, ulr, dispatch, navigate) => {
  const data = new Promise(async (resolve, reject) => {
    try {
      let token = GetAccessToken();
      let queryString = Object.keys(fields)
      .map((key) => key + "=" + fields[key])
      .join("&");
      const response = await axios.delete(`${process.env.REACT_APP_API}${ulr}?${queryString}`, {
        headers: { "x-access-token": token },
      });
      if (response.status === 401) {
        try {
          localStorage.removeItem("user");
          navigate("/");
          navigate(0);
        } catch (error) {
          console.log(error);
        }
      }
      resolve({ status: response.status, data: response.data });
    } catch (error) {
      console.log("API Eror", error.message);
      resolve({
        status: error.response.status,
        data: error.response?.data?.message,
      });
    }
  });

  return data;
};
export { getData, postData, putData, deleteData };
