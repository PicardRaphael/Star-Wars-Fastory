import PropTypes from "prop-types";
import Species from "../../../components/Detail/Species";

const SpeciesContainer = (props) => {
  const infosTop = [
    { language: "Language" },
    { designation: "Designation" },
    { classification: "Classification" },
  ];
  const infosMiddle = [
    { average_height: "Average height" },
    { average_lifespan: "Average lifespan" },
  ];

  const infosBottom = [
    { eye_colors: "Eye colors" },
    { hair_colors: "Hair colors" },
  ];

  return (
    <Species
      infosTop={infosTop}
      infosMiddle={infosMiddle}
      infosBottom={infosBottom}
      title={props.result.name}
      {...props}
    />
  );
};

SpeciesContainer.propTypes = {
  props: PropTypes.shape({
    result: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default SpeciesContainer;
