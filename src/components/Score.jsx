
import '../index.css';
function Score(props) {
  const {score,index} = props
  return (
    <div className="score">
        <h2>score n°{index+1}</h2>
        <h1 className='color-blue'>{score}</h1>
    </div>
  );
}

export default Score;
