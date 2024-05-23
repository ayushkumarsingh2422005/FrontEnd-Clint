import { useContext } from "react";
import { orderContext } from "../pages/Home";
import { FaXmark } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Sidebar() {
    const { Visible, Orders } = useContext(orderContext);
    const [showSideNav, setShowSideNav] = Visible;
    const [orders, setOrders] = Orders;

    return (

        <section className={`absolute right-0 top-0 z-50 border-r bg-white w-full h-full ${showSideNav ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex bg-blue-600 text-white justify-between items-center px-6 py-4">
                <h1 className="text-3xl">Orders</h1>
                <FaXmark className="text-xl cursor-pointer hover:text-2xl transition-all ease-in-out" onClick={() => setShowSideNav(false)} />
            </div>
            {orders.length > 0 ? (
                <ul className="text-md px-6">
                    {orders.map((item, idx) => (

                        <li className="py-2 px-6 border-b">
                            {item.itemId}
                            <div className="flex items-center justify-between w-full mt-3">
                                <FaMinus />
                                <input className="w-1/2 border text-center" type="text" name="quantity" id="quantity" disabled value={1} />
                                <FaPlus />
                            </div>
                        </li>
                    ))}

                </ul>
            ) : (
                <p className="p-12">No orders found</p>
            )}
        </section>
    );
}