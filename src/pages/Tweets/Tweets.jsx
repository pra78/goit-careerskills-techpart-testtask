import TweetsList from "components/TweetsList/TweetsList";
import TweetsLoadMoreButton from "components/TweetsLoadMoreButton/TweetsLoadMoreButton";
import TweetsSelect from "components/TweetsSelect/TweetsSelect";
import Toast from "components/ToastContainer/ToastContainer";
import TweetSkeleton from "components/TweetSkeleton/TweetSkeleton";
import { useEffect, useMemo, useState } from "react";
import { followTweet, getTweets } from "service/api";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { HeaderTextStyled, NavBarStyled, NavLinkStyled, TweetsPageStyled } from "./Tweets.styled";
import { SelectChangeEvent } from "@mui/material";

const Tweets = () => {
    const [tweets, setTweets] = useState([]);
    const [page, setPage] = useState(1);
    const [follow, setFollow] = useState('showAll');
    const [isLoadingTweets, setIsLoadingTweets] = useState(false);
    const [isLoadingStatus, setIsLoadingStatus] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        const fetchTweets = async (page) => {
            setError(null);
            setIsLoadingTweets(true);
            try {
                const { data } = await getTweets(page);
                if (!ignore) {
                    setTweets(prev => ([...prev, ...data]));
                }
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoadingTweets(false)
            }
        }
        fetchTweets(page);
        return () => {
            ignore = true;
        }
    }, [page]);

    const handleFollowButtonClick = async (id) => {
        setError(null);
        setIsLoadingStatus(id);
        const index = tweets.findIndex(el => (el.id === id));
        try {
            if (tweets[index].isFollowed === true) {
                await followTweet(id, { isFollowed: false, followers: tweets[index].followers - 1 })
            } else {
                await followTweet(id, { isFollowed: true, followers: tweets[index].followers + 1 })
            }
            setTweets(prev => prev.map(el => el.id === id ? {
            ...el,
            isFollowed: !el.isFollowed,
            followers: el.isFollowed ? el.followers - 1 : el.followers + 1,
            }
            : el));
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoadingStatus(null);
        }
    }

    const handleLoadMoreButtonClick = (event) => {
        event.preventDefault();
        setPage(prev => prev + 1);
    }
    
    const changeFilter = (event: SelectChangeEvent) => {
        setFollow(event.target.value);
    }

    const filteredTweets = useMemo(() => {
        if (follow === "showAll") return tweets;
        const filtered = tweets.filter((el) => el.isFollowed === /^true$/i.test(follow));
        return filtered;
    }, [tweets, follow]);

    return (
        <TweetsPageStyled>
            <NavBarStyled>
                <NavLinkStyled to="/"><ArrowBackIosIcon fontSize="small" sx={{fontSize: "0.9rem"}}/>Back</NavLinkStyled>
                <HeaderTextStyled>Tweets</HeaderTextStyled>
                <TweetsSelect follow={follow} selectTweets={changeFilter} />
            </NavBarStyled>
            <Toast error={error} />
            <TweetsList tweets={filteredTweets} followButtonClick={handleFollowButtonClick} isLoading={isLoadingStatus} />
            <TweetSkeleton isLoading={isLoadingTweets} />
            <TweetsLoadMoreButton loadMoreButtonClick={handleLoadMoreButtonClick} />
        </TweetsPageStyled>);
};

export default Tweets;