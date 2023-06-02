import PropTypes from "prop-types";

const TweetsSelect = ({ follow, selectTweets }) => {
  

  return (
    <select
      name="follow"
      onChange={(e) => selectTweets(e)}
      value={follow}
    >
      <option value="showAll">Show All</option>
      <option value="false">Follow</option>
      <option value="true">Followings</option>
    </select>
  );
};

export default TweetsSelect;

TweetsSelect.propTypes = {
  follow: PropTypes.string.isRequired,
  selectTweets: PropTypes.func.isRequired
}