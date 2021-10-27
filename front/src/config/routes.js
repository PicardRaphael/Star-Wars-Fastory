const routes = [
  {
    path: "/",
    exact: true,
    key: "home",
    component: "Home",
  },
  {
    path: "/search",
    key: "search",
    component: "Search",
  },
  {
    path: "/details",
    key: "details",
    component: "Details",
  },
  {
    path: "*",
    key: "not-found",
    component: "NotFound",
  },
];

export default routes;
