import PropTypes from "prop-types";
import Vehicle from "../../../components/Detail/Vehicle";

const VehicleContainer = (props) => {
  const infosTop = [{ model: "Model" }, { manufacturer: "Manufacturer" }];
  const infosMiddle = [
    { cost_in_credits: "Cost of this starship with galactic credits" },
    { passengers: "Passenger capacity" },
  ];

  return (
    <Vehicle
      infosTop={infosTop}
      infosMiddle={infosMiddle}
      title={props.result.name}
      {...props}
    />
  );
};

VehicleContainer.propTypes = {
  props: PropTypes.shape({
    result: PropTypes.shape({
      title: PropTypes.string.isRequired,
      opening_crawl: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default VehicleContainer;
