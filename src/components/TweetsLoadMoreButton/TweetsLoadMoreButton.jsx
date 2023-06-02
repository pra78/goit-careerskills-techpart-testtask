import PropTypes from "prop-types";

const TweetsLoadMoreButton = ({ loadMoreButtonClick }) => {
    return (<button type="button" onClick={loadMoreButtonClick}>Load More</button>);
};

export default TweetsLoadMoreButton;

TweetsLoadMoreButton.propTypes = {
    loadMoreButtonClick: PropTypes.func.isRequired,
}