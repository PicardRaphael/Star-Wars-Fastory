const Boom = require("@hapi/boom");
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
      return h.response({ msg: "Fetch success", data: result }).code(200);
    },
  },
];

module.exports = {
  routes,
};
