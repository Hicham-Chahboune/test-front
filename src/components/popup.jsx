
import '../index.css';
import Header from './Header';
import ScoreCard from './ScoreCard';
function Popup(props) {
    const {shop,handleClosePopup}=props
  return (
    <div className='overlay'>
        <button className='close' onClick={handleClosePopup}>X</button>
        <div className="popup">
            <Header shop={shop}></Header>
            <div className='flex wrap'>
            {
                shop.data.map((e,index)=>(
                    <ScoreCard key={index}  data={e} index={index} ></ScoreCard>
                ))
            }
        </div>
    </div>

    </div>
  );
}

export default Popup;
