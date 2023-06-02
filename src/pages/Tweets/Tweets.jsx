import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { followTweet, getTweets } from "service/api";

const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    const [page, setPage] = useState(1);

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

    return (
        <>
            <h1>Tweets</h1>
            <NavLink to="/">Back</NavLink>
            <ul>
                {tweets.map(({ id, userName, tweets, avatar, followers, isFollowed }) => (<li key={id}>
                    <img src={avatar} alt={userName} />
                    <p>{tweets} TWEETS</p>
                    <p>{followers.toLocaleString('en-US')} FOLLOWERS</p>
                    {isFollowed ? (<button type="button" onClick={() => handleFollowButtonClick(id)}>FOLLOWING</button>) : (<button type="button" onClick={() => handleFollowButtonClick(id)}>FOLLOW</button>)}
                </li>))}
            </ul>
            <button type="button" onClick={handleLoadMoreButtonClick}>Load More</button>
        </>);
};

export default Tweets;