import { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import data from "../data/items.json"
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Home() {
    const [showSideNav, setShowSideNav] = useState(false);
    return (
        <main className="min-h-screen max-w-screen overflow-hidden">
            <div className="bg-blue-600 text-white px-6 md:px-12 lg:px-24 py-4 border-b flex items-center gap-x-2 justify-between">
                <h1 className="text-4xl font-semibold">AFFECTIONARY</h1>
                <MdRestaurantMenu className="text-4xl hover:text-black border p-1 hover:shadow-md cursor-pointer" onClick={() => setShowSideNav(true)} />

            </div>

            <form className="bg-gray-100 w-3/4 mx-auto p-12 mt-4">
                <div className="mb-2">
                    <label htmlFor="table">Name</label>
                    <input className="w-full block border p-2 mt-1 outline-none focus:border-secondary rounded-sm transition-all" type="text" name="table" id="table" />
                </div>
                <div className="mb-2">
                    <label htmlFor="item-name">Phone Number</label>
                    <input className="w-full block border p-2 mt-1 outline-none focus:border-secondary rounded-sm transition-all" type="number" name="item-name" id="item-name" />
                </div>
                <div className="mb-2">
                    <label htmlFor="quantity">Table Number</label>
                    <input className="w-full block border p-2 mt-1 outline-none focus:border-secondary rounded-sm transition-all" type="number" name="quantity" id="quantity" value={1} />
                </div>
                <div className="mb-2">
                    <button className="p-2 bg-green-500 w-full text-white">Proceed</button>
                </div>

            </form>

            {/* Order Menu */}
            
            <section className={`absolute right-0 top-0 z-10 border-r bg-white w-full h-full ${showSideNav ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
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
        </main>
    );
}