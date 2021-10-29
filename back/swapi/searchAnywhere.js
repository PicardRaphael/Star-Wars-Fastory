const { callSwapiApi } = require("./callSwapiApi");

const searchAnywhere = async (search) => {
  return callSwapiApi(process.env.SWAPI_API_URL).then((response) => {
    const promises = [];
    // Loop on all urls API SWAPI
    for (let [type, url] of Object.entries(response)) {
      const promise = new Promise((resolve, reject) => {
        callSwapiApi(url + "?search=" + search)
          .then((response) => {
            if (response.results.length > 0) {
              response.results.map((result) =>
                resolve({
                  type: type,
                  name: result.name || result.title,
                  url: result.url,
                })
              );
            } else {
              resolve(null);
            }
          })
          .catch((err) => {
            console.log("Erreur :" + err);
            reject(err);
          });
      });

      promises.push(promise);
    }

    return Promise.all(promises)
      .then((data) => data.filter((value) => value != null))
      .catch((err) => {
        console.log("Erreur :" + err);
      });
  });
};

module.exports = {
  searchAnywhere,
};
