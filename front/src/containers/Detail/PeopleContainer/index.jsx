import PropTypes from "prop-types";
import People from "../../../components/Detail/People";

const PeopleContainer = (props) => {
  const infosTop = [{ gender: "Gender" }, { birth_year: "Birth year" }];
  const infosMiddle = [
    { height: "Height" },
    { eye_color: "Eye Color" },
    { hair_color: "Hair" },
  ];

  return (
    <People
      infosTop={infosTop}
      infosMiddle={infosMiddle}
      title={props.result.name}
      {...props}
    />
  );
};

PeopleContainer.propTypes = {
  props: PropTypes.shape({
    result: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
export default PeopleContainer;
