import axios from "axios";
import React from "react";
import { baseUrl } from "../api/api";

const getData = (url: string) => (
  fetch(url)
  .then((res) => res.json())
);

export default getData;
