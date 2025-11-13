import axios from "axios";
const instance = axios.create({
  baseURL: "https://clean-community-bd.vercel.app",
});

import React from "react";

const useAxios = () => {
  return instance;
};

export default useAxios;
