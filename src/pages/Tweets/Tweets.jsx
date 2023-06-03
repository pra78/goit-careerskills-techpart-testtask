import TweetsList from "components/TweetsList/TweetsList";
import TweetsLoadMoreButton from "components/TweetsLoadMoreButton/TweetsLoadMoreButton";
import TweetsSelect from "components/TweetsSelect/TweetsSelect";
import { useEffect, useMemo, useState } from "react";
import { followTweet, getTweets } from "service/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBarStyled, NavLinkStyled, TweetsPageStyled } from "./Tweets.styled";

const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    const [page, setPage] = useState(1);
    const [follow, setFollow] = useState('showAll');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    useEffect(() => {
        let ignore = false;
        const fetchTweets = async (page) => {
            setError(null);
            setIsLoading(true);
            try {
                const { data } = await getTweets(page);
                if (!ignore) {
                    setTweets(prev => ([...prev, ...data]));
                }
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchTweets(page);
        return () => {
            ignore = true;
        }
    }, [page]);

    const followUnfollowTweet = async (id) => {
        setError(null);
        setIsLoading(true);
        const index = tweets.findIndex(el => (el.id === id));
        try {
            if (tweets[index].isFollowed === true) {
                await followTweet(id, { isFollowed: false, followers: tweets[index].followers - 1 })
            } else {
                await followTweet(id, { isFollowed: true, followers: tweets[index].followers + 1 })
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleFollowButtonClick = (id) => {
        followUnfollowTweet(id);
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
        if (follow === "showAll") return tweets;
        const filtered = tweets.filter((el) => el.isFollowed === /^true$/i.test(follow));
        return filtered;
    }, [tweets, follow]);

    return (
        <TweetsPageStyled>
            <NavBarStyled>
                <NavLinkStyled to="/">Back</NavLinkStyled>
                <h1>Tweets</h1>
                <TweetsSelect follow={follow} selectTweets={changeFilter} />
            </NavBarStyled>
            {error && <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />}
            <TweetsList tweets={filteredTweets} followButtonClick={handleFollowButtonClick} />
            {isLoading && <h2>Loading...</h2>}
            <TweetsLoadMoreButton loadMoreButtonClick={handleLoadMoreButtonClick} />
        </TweetsPageStyled>);
};

export default Tweets;