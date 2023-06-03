import PropTypes from "prop-types";
import { ButtonStyled } from "./TweetsLoadMoreButton.styled";

const TweetsLoadMoreButton = ({ loadMoreButtonClick }) => {
    return (<ButtonStyled type="button" variant="text" onClick={loadMoreButtonClick} >Load More</ButtonStyled>);
};

export default TweetsLoadMoreButton;

TweetsLoadMoreButton.propTypes = {
    loadMoreButtonClick: PropTypes.func.isRequired,
}