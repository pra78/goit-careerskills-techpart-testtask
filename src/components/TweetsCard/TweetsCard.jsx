import PropTypes from "prop-types";

const TweetsCard = ({ tweetProps, followButtonClick }) => {
    const { id, userName, tweets, avatar, followers, isFollowed } = tweetProps;

    return (<li key={id}>
        <img src={avatar} alt={userName} />
        <p>{Number(tweets).toLocaleString('en-US')} TWEETS</p>
        <p>{followers.toLocaleString('en-US')} FOLLOWERS</p>
        {isFollowed ? (<button type="button" onClick={() => followButtonClick(id)}>FOLLOWING</button>) : (<button type="button" onClick={() => followButtonClick(id)}>FOLLOW</button>)}
    </li>);
};

export default TweetsCard;

TweetsCard.propTypes = {
    tweetProps: PropTypes.shape({
        id: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        tweets: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        isFollowed: PropTypes.bool.isRequired
    }),
    followButtonClick: PropTypes.func.isRequired
}