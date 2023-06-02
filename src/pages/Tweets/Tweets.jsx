import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { followTweet, getTweets } from "service/api";

const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    const [page, setPage] = useState(1);

    

    useEffect(() => {
        const fetchTweets = async (page) => {
            try {
                const data = await getTweets(page);
                setTweets(prev => ([...prev, ...data]));
            } catch (error) {
                console.log(error);
            }
        }
        fetchTweets(page);
    }, [page]);

    const handleFollowButtonClick = async (id) => {
        if (tweets.isFollowed === true) {
            setTweets(prev => ({ ...prev, followers: prev.followers - 1, isFollowed: false }));
        } else {
            setTweets(prev => ({ ...prev, followers: prev.followers + 1, isFollowed: true }));
        }
        try {
            const data = await followTweet(id, tweets.isFollowed);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleLoadMoreButtonClick = () => {
        setPage(prev => prev + 1);
    }

    return (
        <>
            <h1>Tweets</h1>
            <NavLink to="/">Back</NavLink>
            <ul>
                {tweets.map(({ id, userName, tweets, avatar, follwers }) => (<li key={id}>
                    <img src={avatar} alt={userName} />
                    <p>{tweets} TWEETS</p>
                    <p>{follwers} FOLLOWERS</p>
                    <button type="button" onClick={id => handleFollowButtonClick(id)}>FOLLOW</button>
                </li>))}
            </ul>
            <button type="button" onClick={handleLoadMoreButtonClick}>Load More</button>
        </>);
};

export default Tweets;