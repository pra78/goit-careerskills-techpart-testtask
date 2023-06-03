import PropTypes from "prop-types";
import ellipse from "images/Ellipse.png";
import { AvatarStyled, BadgeStyled, FollowButtonStyled, FollowingButtonStyled, TweetCardStyled, TweetTextStyled } from "./TweetsCard.styled";

const TweetsCard = ({ tweetProps, followButtonClick }) => {
    const { id, userName, tweets, avatar, followers, isFollowed } = tweetProps;

    return (<TweetCardStyled key={id}>
        <BadgeStyled src={ellipse} alt="elliptycal badge frame"/>
        <AvatarStyled src={avatar} alt={userName} />
        <TweetTextStyled>{Number(tweets).toLocaleString('en-US')} TWEETS</TweetTextStyled>
        <TweetTextStyled>{followers.toLocaleString('en-US')} FOLLOWERS</TweetTextStyled>
        {isFollowed ? (<FollowingButtonStyled type="button" onClick={() => followButtonClick(id)}>FOLLOWING</FollowingButtonStyled>) : (<FollowButtonStyled type="button" onClick={() => followButtonClick(id)}>FOLLOW</FollowButtonStyled>)}
    </TweetCardStyled>);
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