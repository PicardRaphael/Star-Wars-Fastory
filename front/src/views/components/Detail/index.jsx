import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";
import CssCircularProgress from "../../../components/CssCircularProgress";
import styles from "./Detail.module.css";

const People = React.lazy(() =>
  import("../../../containers/Detail/PeopleContainer")
);
const Film = React.lazy(() =>
  import("../../../containers/Detail/FilmContainer")
);
const Planet = React.lazy(() =>
  import("../../../containers/Detail/PlanetContainer")
);
const Species = React.lazy(() =>
  import("../../../containers/Detail/SpeciesContainer")
);
const Starship = React.lazy(() =>
  import("../../../containers/Detail/StarshipContainer")
);
const Vehicle = React.lazy(() =>
  import("../../../containers/Detail/VehicleContainer")
);
const Detail = ({ loading, result, type }) => {
  const types = {
    people: People,
    films: Film,
    planets: Planet,
    species: Species,
    starships: Starship,
    vehicles: Vehicle,
  };
  const Component = types[type];
  return (
    <Box>
      {(loading || !result) && <CssCircularProgress />}
      {!loading && result && (
        <Grid
          container
          justifyContent="center"
          className={styles.gridContainer}
        >
          {result.map((item) => (
            <React.Suspense key={uuidv4()} fallback={<CssCircularProgress />}>
              <Grid xl={6} xs={12} item className={styles.gridItem}>
                <Component result={item} />
              </Grid>
            </React.Suspense>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Detail;
