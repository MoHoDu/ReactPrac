import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, coverImg, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to="/movie">{title}</Link>
        {/* <a href="/movie"></a>
        이런 식으로도 페이지 전환을 할 수 있지만... 
        페이지 전체가 다시
        실행된다.. // 이를 피하기 위해서 Link 컴포넌트를 사용 */}
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
