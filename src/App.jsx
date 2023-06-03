import Home from "pages/Home/Home";
import Tweets from "pages/Tweets/Tweets";
import { Navigate, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route index element={<Home />} />
      <Route path="tweets" element={<Tweets />} />
      <Route path="*" element={<Navigate to="/#/" />} />
    </Routes>
  );
};

export default App;
