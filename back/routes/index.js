const Boom = require("@hapi/boom");
const { callSwapiApi } = require("../swapi/callSwapiApi");
const { searchAnywhere } = require("../swapi/searchAnywhere");

const routes = [
  {
    method: "GET",
    path: "/search",
    handler: async (request, h) => {
      if (!request.query.search) {
        throw Boom.badRequest("Search query can't be empty");
      }
      let result = await searchAnywhere(request.query.search);
      return h.response(result).code(200);
    },
  },
  {
    method: "POST",
    path: "/detail/{type}/{name}",
    handler: async (request, h) => {
      const url =
        process.env.SWAPI_API_URL +
        request.params.type +
        "?search=" +
        request.params.name;
      let { results } = await callSwapiApi(url);
      return h.response(results).code(200);
    },
  },
];

module.exports = {
  routes,
};
