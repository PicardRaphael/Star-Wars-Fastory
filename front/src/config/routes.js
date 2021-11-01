const routes = [
  {
    path: "/",
    exact: true,
    key: "search",
    component: "Search",
  },
  {
    path: "/detail/:type/:name",
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
