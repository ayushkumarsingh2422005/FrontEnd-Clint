import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdAdd, MdRestaurantMenu } from "react-icons/md";
import data from "../data/items.json"
import { FaMinus, FaPlus } from "react-icons/fa";
import TopMenu from "../components/TopMenu";

export default function Home() {
    const [showSideNav, setShowSideNav] = useState(true);
    return (
        <main className="min-h-screen max-w-screen overflow-hidden">
            <div className="px-6 md:px-12 lg:px-24 py-4 border-b flex items-center gap-x-2 justify-between">

                <h1 className="text-4xl font-semibold text-secondary">AFFECTIONARY</h1>
                <MdRestaurantMenu className="text-4xl text-secondary hover:text-black border p-1 hover:shadow-md cursor-pointer" onClick={() => setShowSideNav((prev)=>!prev)} />

            </div>
            <TopMenu/>
            <section className="relative px-6 md:px-12 lg:px-24 pt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-1">

                    {
                        data.map((item, index) => {
                            return (
                                <div className="border p-3 flex justify-between items-center" key={index}>
                                    <h1 className={`font-semibold text-4xl text-secondary ${index + 1 < 10 ? 'before:content-["0"]' : null}`}> {index + 1}</h1>
                                    {item.name}
                                    <MdAdd className="text-2xl border text-green-400 hover:shadow-lg cursor-pointer hover:bg-green-400 hover:text-white transition-all duration-200 ease-in-out" />
                                </div>
                            );
                        })
                    }
                </div>
            <section className={`absolute right-0 top-0 z-10 border-r bg-white shadow-2xl h-full ${ showSideNav? 'translate-x-0':'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <h1 className="bg-blue-600 px-12 py-2 text-3xl text-white">Orders</h1>
                <ul className="text-md">
                        <li className="border-b py-4 px-12">
                            {data[0].name}
                            <div className="flex items-center justify-between w-full mt-3">
                                <FaMinus />
                                 <input className="w-1/2 border text-center" type="text" name="quantity" id="quantity" disabled value={1} />
                                <FaPlus />
                            </div>
                        </li>
                    </ul>
            </section>
            </section>
        </main>
    );
}