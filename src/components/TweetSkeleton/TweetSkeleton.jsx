import PropTypes from "prop-types";
import { TweetSkeletonStyled } from "./TweetSkeleton.styled";

const TweetSkeleton = ({isLoading}) => {
    return (
        isLoading && <TweetSkeletonStyled variant="rectangular" width={380} height={460} />
    );
};

export default TweetSkeleton;

TweetSkeleton.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}