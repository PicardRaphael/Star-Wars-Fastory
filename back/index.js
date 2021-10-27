require("dotenv").config();
const Hapi = require("@hapi/hapi");
const { routes } = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: process.env.STAR_WARS_API_PORT,
    host: process.env.STAR_WARS_API_HOST,
  });
  server.route(routes);
  try {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
