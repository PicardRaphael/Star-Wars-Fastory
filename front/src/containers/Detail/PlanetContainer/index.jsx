import PropTypes from "prop-types";
import Planet from "../../../components/Detail/Planet";

const PlanetContainer = (props) => {
  const infosTop = [{ population: "Population" }, { terrain: "Terrain" }];
  const infosMiddle = [
    { diameter: "Diameter" },
    { gravity: "Gravity" },
    { rotation_period: "Rotation period" },
  ];

  return (
    <Planet
      infosTop={infosTop}
      infosMiddle={infosMiddle}
      title={props.result.name}
      {...props}
    />
  );
};

PlanetContainer.propTypes = {
  props: PropTypes.shape({
    result: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default PlanetContainer;
