import Home from "pages/Home/Home";
import Tweets from "pages/Tweets/Tweets";
import { Navigate, Route, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" element={<Home/>} />
      <Route index element={<Home />} />
      <Route path="tweets" element={<Tweets />} />
      <Route path="*" element={<Navigate to="/" />} />
    </HashRouter>
  );
};

export default App;
