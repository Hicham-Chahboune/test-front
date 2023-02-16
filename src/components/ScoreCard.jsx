
import '../index.css';
import Divider from './divider';
import Score from './Score';
import PrecisionRoll from './PrecisionRoll';

function ScoreCard(props) {
    const {data,index,R} = props
  return (
    <div className="flex card justify-around align-items-center w-40 bg-gris">
    <Score score={data.mean_shop} index={index}></Score>
    <Divider />
    <PrecisionRoll R={data.R*100} title="R"></PrecisionRoll>
  </div>
);
}

export default ScoreCard;
