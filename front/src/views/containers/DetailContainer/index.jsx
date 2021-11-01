import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDetailQuery } from "../../../api/apiSlice";

import Detail from "../../components/Detail";
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

const DetailContainer = () => {
  const { type, name } = useParams();
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);
  const { data, isFetching, isSuccess } = useDetailQuery({
    type: type,
    name: name,
  });

  const types = {
    people: People,
    films: Film,
    planets: Planet,
    species: Species,
    starships: Starship,
    vehicles: Vehicle,
  };

  useEffect(() => {
    if (isFetching) {
      setLoading(true);
    } else if (isSuccess) {
      setLoading(false);
      setResult(data);
    }
  }, [data, isFetching, isSuccess]);

  return <Detail result={result} loading={loading} type={type} types={types} />;
};

export default DetailContainer;
