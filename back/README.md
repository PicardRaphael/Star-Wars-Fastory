# Star-Wars-Fastory Backend

_This api allows to get data from the empire._

## Quick start

1. Copy .env.dist with `cp .env.dist .env`
2. Fill in the file .env
3. Installing dependencies `npm install`
4. Launch the API `npm start`
5. Access `http://STAR_WARS_API_HOST:STAR_WARS_API_PORT`

## Endpoints

All endpoints start with `http://STAR_WARS_API_HOST:STAR_WARS_API_PORT`

| Url | Parameter/Query | Type | Required |Description |
| :-----| :--- | :--- | :--- |:---- |
| `/search`| `?search=` | `string` | true | Allows you to search anywhere on the empire's database |
|  `/detail/{type}/{name}`| `type` `name` | `string` `string` | true | Allows you to retrieve detailed information from a [type](#type) and a name |


## Type

* films
* people
* planets
* species
* starships
* vehicles

## Status Codes

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

## Environement variables

- STAR_WARS_API_PORT
- STAR_WARS_API_HOST
- SWAPI_API_URL

## Dependencies

* [Node v17.0+](https://nodejs.org/en/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Hapi](https://hapi.dev/)
* [Axios](https://www.npmjs.com/package/axios)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Swapi](https://swapi.dev/documentation)