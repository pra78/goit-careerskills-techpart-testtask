import { NavLink } from "react-router-dom";

const Home = () => {
    return (<>
        <h1>HOME</h1>
        <NavLink to="/tweets" >Tweets</NavLink>
    </>);
};

export default Home;