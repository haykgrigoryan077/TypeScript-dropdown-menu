import DataShowElement from "../components/DataShowElement/DataShowElement";
import HomePage from "../components/HomePage/HomePage";
import PageHeader from "../components/MainPage/MainPage";
import OneProduct from "../components/ShowOneProduct/ShowOneProduct";
import PageNotFound from "../PageNotFound";

export const routes = [
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: "/home/clothes/men",
    element: <DataShowElement category="men's clothing" />,
  },
  {
    path: "/home/clothes/women",
    element: <DataShowElement category="women's clothing" />,
  },
  {
    path: "/home/electronics",
    element: <DataShowElement category="electronics" />,
  },
  {
    path: "/home/jewelery",
    element: <DataShowElement category="jewelery" />,
  },
  {
    path: "/home/clothes/men/:id",
    element: <OneProduct />,
  },
  {
    path: "/home/clothes/women/:id",
    element: <OneProduct />,
  },
  {
    path: "/home/jewelery/:id",
    element: <OneProduct />,
  },
  {
    path: "/home/electronics/:id",
    element: <OneProduct />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
