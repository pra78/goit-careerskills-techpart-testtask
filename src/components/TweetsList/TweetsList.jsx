import PropTypes from "prop-types";

import TweetsCard from "components/TweetsCard/TweetsCard";

const TweetsList = ({ tweets, followButtonClick, isLoading }) => {
    
    return (
        <ul>
            {tweets.map((tweetProps) => (
                <TweetsCard key={tweetProps.id} tweetProps={tweetProps} followButtonClick={followButtonClick} isLoading={isLoading} />
            ))}
        </ul>
    );
};

export default TweetsList;

TweetsList.propTypes = {
    tweets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    ),
    followButtonClick: PropTypes.func.isRequired,
    isLoading: PropTypes.string,
}
