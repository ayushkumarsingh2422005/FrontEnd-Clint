import { useContext, useEffect, useState } from "react";
import { orderContext } from "../pages/Home";
import { FaXmark } from "react-icons/fa6";
import OrderListItem from "./OrderListItem";

export default function Sidebar() {
    const { Visible, Orders } = useContext(orderContext);
    const [showSideNav, setShowSideNav] = Visible;
    const [orders, setOrders] = Orders;
    const [totalPrice,setTotalPrice] = useState(0);

    
  // Function to delete an order
  const deleteOrder = (dishId) => {
    const updatedOrders = orders.filter(order => order.item.dishId !== dishId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

    // Function to update order quantity
    const updateQuantity = (dishId, newQuantity) => {
        if (newQuantity < 1) {
          deleteOrder(dishId);
        } else {
          const updatedOrders = orders.map(order => 
            order.item.dishId === dishId ? { ...order, quantity: newQuantity } : order
          );
          setOrders(updatedOrders);
          localStorage.setItem('orders', JSON.stringify(updatedOrders));
        }
      };

      useEffect(() => {
        const price = getTotalPrice();
        setTotalPrice(price);
      }, [orders]);
      
      const getTotalPrice = () => {
        const ord = JSON.parse( localStorage.getItem('orders'));
        return ord.reduce((total, order) => {
          const price = order.plate === 'half' ? order.item.restaurant_half_price : order.item.restaurant_full_price;
          console.log('total'+total);
          console.log('price'+price);
          return total + (order.quantity * price);
        }, 0);
      };
      
    return (

        <section className={`absolute right-0 top-0 z-50 border-r bg-white w-full h-full ${showSideNav ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex bg-blue-600 text-white justify-between items-center px-6 py-4">
                <h1 className="text-3xl">Orders</h1>
                <FaXmark className="text-xl cursor-pointer hover:text-2xl transition-all ease-in-out" onClick={() => setShowSideNav(false)} />
            </div>
            {orders.length > 0 ? (
                <ul className="text-md px-6">
                    {orders.map((order, idx) => (
                        <OrderListItem key={idx} order={order} deleteOrder={deleteOrder} updateQuantity={updateQuantity} />
                    ))}
                    <div className="border-t grid grid-cols-2 px-6 text-secondary">
                        <h1 className="text-xl font-bold">Total </h1>
                        <h1 className="text-xl font-bold text-end">₹{totalPrice} </h1>
                    </div>
                </ul>
            ) : (
                <p className="p-12">No orders found</p>
            )}
        </section>
    );
}