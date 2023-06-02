import TweetsList from "components/TweetsList/TweetsList";
import TweetsLoadMoreButton from "components/TweetsLoadMoreButton/TweetsLoadMoreButton";
import TweetsSelect from "components/TweetsSelect/TweetsSelect";
import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { followTweet, getTweets } from "service/api";

const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    const [page, setPage] = useState(1);
    const [follow, setFollow] = useState('showAll');

    useEffect(() => {
        const fetchTweets = async (page) => {
            const {data} = await getTweets(page);
            setTweets(prev => ([...prev, ...data]));
        }    
        fetchTweets(page);
    }, [page]);

    const handleFollowButtonClick = (id) => {
        const idx = tweets.findIndex(el => (el.id === id));
        tweets[idx].isFollowed === true ? followTweet(id, { isFollowed: false, followers: tweets[idx].followers - 1 }) : followTweet(id, { isFollowed: true, followers: tweets[idx].followers + 1 });
        setTweets(prev => prev.map(el => el.id === id ? {
            ...el,
            isFollowed: !el.isFollowed,
            followers: el.isFollowed ? el.followers - 1 : el.followers + 1,
            }
            : el));
    }

    const handleLoadMoreButtonClick = (event) => {
        event.preventDefault();
        setPage(prev => prev + 1);
    }
    
    const changeFilter = (e) => {
        setFollow(e.currentTarget.value);
    }

    const filteredTweets = useMemo(() => {
        console.log(follow);
        if (follow === "showAll") return tweets;
        const filtered = tweets.filter((el) => el.isFollowed === /^true$/i.test(follow));
        console.log(filtered);
        return filtered;
    }, [tweets, follow]);

    return (
        <>
            <h1>Tweets</h1>
            <NavLink to="/">Back</NavLink>
            <TweetsSelect follow={follow} selectTweets={ changeFilter } />
            <TweetsList tweets={filteredTweets} followButtonClick={handleFollowButtonClick} />
            <TweetsLoadMoreButton loadMoreButtonClick={handleLoadMoreButtonClick} />
        </>);
};

export default Tweets;