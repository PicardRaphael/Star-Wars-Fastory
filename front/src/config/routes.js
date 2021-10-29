const routes = [
  {
    path: "/",
    exact: true,
    key: "search",
    component: "Search",
  },
  {
    path: "/detail",
    key: "detail",
    component: "Detail",
  },
  {
    path: "*",
    key: "not-found",
    component: "NotFound",
  },
];

export default routes;
