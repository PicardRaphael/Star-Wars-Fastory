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
    path: "/detail",
    options: {
      payload: {
        defaultContentType: "application/json",
      },
    },
    handler: async (request, h) => {
      let result = await callSwapiApi(request.payload.url);
      return h.response(result).code(200);
    },
  },
];

module.exports = {
  routes,
};
