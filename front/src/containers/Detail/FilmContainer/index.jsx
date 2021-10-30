import PropTypes from "prop-types";
import Film from "../../../components/Detail/Film";

const FilmContainer = (props) => {
  const infosTop = [{ producer: "Producer" }, { director: "Director" }];
  const infosMiddle = [{ release_date: "Release date" }];
  return (
    <Film
      infosTop={infosTop}
      infosMiddle={infosMiddle}
      description={props.result.opening_crawl}
      title={props.result.title}
      {...props}
    />
  );
};

FilmContainer.propTypes = {
  props: PropTypes.shape({
    result: PropTypes.shape({
      title: PropTypes.string.isRequired,
      opening_crawl: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default FilmContainer;
