import { createContext, useEffect, useId, useState } from "react";
import getAlldishes from "../utils/get_dishes";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import UserInfo from "../components/UserInfo";

export const orderContext = createContext();

export default function Home() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', number: '', table: '' });
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [orderItem, setOrderItem] = useState({
    item: {},
    quantity: 1,
    plate: 'half'
  });
  const [dishes, setDishes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getUser();
   
    const fetchDishes = async () => {
      try {
        const data = await getAlldishes();
        setDishes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDishes();
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const getUser = async()=>{
    const data = localStorage.getItem('user');
    if (data != null){
        if(data.name != ''){
            setUserInfo(JSON.parse(data));
        }else{
        setShowInfoModal(true);
        }
    }else{
        setShowInfoModal(true);
    }
    
  }

  const validateUserInfo = () => {
    const errors = {};
    if (!userInfo.name) errors.name = 'Name is required';
    if (!userInfo.number) errors.number = 'Phone number is required';
    if (!userInfo.table) errors.table = 'Table number is required';
    if (userInfo.number && !/^\+?\d{10,15}$/.test(userInfo.number)) errors.number = 'Invalid phone number format';
    return errors;
  };

  const onInfoSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateUserInfo();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowInfoModal(false);
      localStorage.setItem('user',JSON.stringify(userInfo));
    }
  };

  const onOrderSubmit = (e) => {
    e.preventDefault();
    const newOrder = { ...orderItem, item: dishes.find(dish => dish.dishId === orderItem.item) };
    const updatedOrders = [...orders, newOrder];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    setOrderItem({
      item: '',
      quantity: 1,
      plate: 'half'
    });
  };

  return (
    <main className="min-h-screen max-w-screen overflow-hidden">
      <orderContext.Provider value={{ Visible: [showSideNav, setShowSideNav], Orders: [orders, setOrders] , user:[setUserInfo,userInfo,errors,onInfoSubmit] }}>
        <Appbar />
        {showInfoModal ? (
         <UserInfo/>
        ) : (
          <form className="bg-gray-100 w-3/4 mx-auto p-12 mt-4" onSubmit={onOrderSubmit}>
            <div className="mb-2">
              <label htmlFor="table">Table number</label>
              <input className="w-full block border p-2 bg-gray-50 mt-1 outline-none focus:border-secondary rounded-sm transition-all" type="text" name="table" id="table" value={userInfo.table} disabled />
            </div>
            <div className="mb-2">
              <label htmlFor="item-name">Item</label>
              <select className="block w-full outline-none p-2 mt-1 focus:border-secondary" name="item-name" id="item-name" value={orderItem.item} onChange={(e) => setOrderItem((prev) => ({ ...prev, item: e.target.value }))}>
                <option value="" disabled>Select an item</option>
                {dishes.map((item) => (
                  <option value={item.dishId} key={item.dishId}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="w-full block border p-2 mt-1 outline-none focus:border-secondary rounded-sm transition-all"
                type="number"
                name="quantity"
                id="quantity"
                onChange={(e) => setOrderItem((prev) => ({ ...prev, quantity: e.target.value }))}
                value={orderItem.quantity}
                min="1"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="plate">Plate</label>
              <select className="block w-full outline-none p-2 mt-1 focus:border-secondary" name="plate" id="plate" value={orderItem.plate} onChange={(e) => setOrderItem((prev) => ({ ...prev, plate: e.target.value }))}>
                <option value="half">Half Plate</option>
                <option value="full">Full Plate</option>
              </select>
            </div>
            <div className="mb-2">
              <button className="p-2 bg-blue-500 hover:bg-blue-700 w-full text-white" type="submit">Add</button>
            </div>
          </form>
        )}
        <Sidebar />
      </orderContext.Provider>
    </main>
  );
}
