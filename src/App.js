import { useEffect, useState } from 'react';
import Popup from './components/popup';
import { staticData } from './data';
import './index.css'
import { generateData, getShops } from './services/shopService';
function App() {

  const [data, setData] = useState([]);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    let static_data = staticData
    setData(static_data)
    // getShops().then(data=>{
    //   setData(data)
    // })
  }, [load]);

  function generate(){
    // generateData().then(data=>{
    //   setLoad(!load)
    // })
}

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);


  function handleOpenPopup(shop) {
    setSelectedShop(shop)
    setIsPopupVisible(true);
  }

  function handleClosePopup() {
    setIsPopupVisible(false);
  }
  

  return (

    <div className='p-5'>
      <h1>Liste : </h1>
      <button onClick={generate}>Generate dummy data</button>
      <div className="flex wrap">
          {
            data.map((shop,index)=>(
              <div key={`${shop.shop_id}-${index}`} className='card with-content p-5 pointer' onClick={()=>handleOpenPopup(shop)}>
                <h1 >{shop.shop_name}</h1>
              </div> 
            ))
          }
          {isPopupVisible && (
            <Popup
                shop={selectedShop}
                handleClosePopup={handleClosePopup}
            />
        )}
          
      </div>
    </div>
  );
}

export default App;
