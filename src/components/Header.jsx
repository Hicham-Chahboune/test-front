
import '../index.css';
import Information from './Information';
import PrecisionRoll from './PrecisionRoll';
function Header(props) {
    const {shop} = props
  return (
    <div className="header flex justify-around">
        <div className='image grow-2'>
           <img src={shop.shop_picture} alt="" />
        </div>
        <div className=" card grow-1">
            <PrecisionRoll R={shop.total_shop_score} title={"Score Total"}/>
        </div>
        <div className="flex-column justify-center grow-1">
            <Information shopName={shop.shop_name} adresse={shop.shop_adress} managerSurname={shop.shop_manager_surname} managerName={shop.shop_manager_name}></Information>
        </div>
    </div>
  );
}

export default Header;
