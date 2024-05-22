import { createContext, useEffect, useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import data from "../data/items.json"
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import getAlldishes from "../utils/get_dishes";
import Appbar from "../components/Appbar";

export const orderContext = createContext();

export default function Home() {
    const [showSideNav, setShowSideNav] = useState(false);
    const [orderItem, setOrderItem] = useState({
        'itemId': null,
        'quantity': 1,
        'plate': 'half'
    });
    const [dishes, setDishes] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchedData = async () => {
            try {
                const data = await getAlldishes();
                setDishes(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchedData();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        setOrders((prev) => [...prev, orderItem]);
    }

    return (
        <main className="min-h-screen max-w-screen overflow-hidden">
            <orderContext.Provider value={{ Visible: [showSideNav, setShowSideNav], Orders: [orders, setOrders] }}>
               <Appbar />

                <form className="bg-gray-100 w-3/4 mx-auto p-12 mt-4" onSubmit={onSubmit} >
                    <div className="mb-2">
                        <label htmlFor="table">Table number</label>
                        <input className="w-full block border p-2 bg-gray-50 mt-1 outline-none focus:border-secondary rounded-sm transition-all" type="text" name="table" id="table" readOnly value={1} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="item-name">Item</label>
                        <select className="block w-full outline-none p-2 mt-1 focus:border-secondary" name="item-name" id="item-name" value={orderItem.item} onChange={(e) => setOrderItem((prev) => ({ ...prev, itemId: e.target.value }))}>
                            {dishes.map((item) => {
                                return (
                                    <option value={item.dishId} key={item.dishId} >{item.name}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            className="w-full block border p-2 mt-1 outline-none focus:border-secondary rounded-sm transition-all"
                            type="text"
                            name="quantity"
                            id="quantity"
                            onChange={(e) => setOrderItem((prev) => ({ ...prev, quantity: e.target.value }))}
                            value={orderItem.quantity}
                        />

                    </div>
                    <div className="mb-8">
                        <label htmlFor="plate">Plate</label>
                        <select className="block w-full outline-none p-2 mt-1 focus:border-secondary" name="plate" id="plate" value={orderItem.plate} onChange={(e) => setOrderItem((prev) => ({ ...prev, plate: e.target.value }))} >
                            <option value="half">Half Plate</option>
                            <option value="full">Full Plate</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <button className="p-2 bg-green-500 w-full text-white" type="submit">Add</button>
                    </div>

                </form>

                {/* Order Menu */}

                <section className={`absolute right-0 top-0 z-50 border-r bg-white w-full h-full ${showSideNav ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
                    <div className="flex bg-blue-600 text-white justify-between items-center px-6 py-4">
                        <h1 className="text-3xl">Orders</h1>
                        <FaXmark className="text-xl cursor-pointer hover:text-2xl transition-all ease-in-out" onClick={() => setShowSideNav(false)} />
                    </div>
                    <ul className="text-md px-6">
                        <li className="py-2 border-b">
                            {data[0].name}
                            <div className="flex items-center justify-between w-full mt-3">
                                <FaMinus />
                                <input className="w-1/2 border text-center" type="text" name="quantity" id="quantity" disabled value={1} />
                                <FaPlus />
                            </div>
                        </li>
                    </ul>
                </section>
            </orderContext.Provider>
        </main>
    );
}