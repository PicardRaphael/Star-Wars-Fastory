import PropTypes from "prop-types";
import Starship from "../../../components/Detail/Starship";

const StarshipContainer = (props) => {
  const infosTop = [
    { model: "Model" },
    { starship_class: "Starship class" },
    { manufacturer: "Manufacturer" },
  ];
  const infosMiddle = [
    { cost_in_credits: "Cost of this starship with galactic credits" },
    { passengers: "Passenger capacity" },
  ];

  return (
    <Starship
      infosTop={infosTop}
      infosMiddle={infosMiddle}
      title={props.result.name}
      {...props}
    />
  );
};

StarshipContainer.propTypes = {
  props: PropTypes.shape({
    result: PropTypes.shape({
      title: PropTypes.string.isRequired,
      opening_crawl: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default StarshipContainer;
