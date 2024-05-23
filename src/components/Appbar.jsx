import { useContext } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { orderContext } from "../pages/Home";

export default function Appbar(){
    const {Visible , Orders} = useContext(orderContext);
    const [showSideNav, setShowSideNav] = Visible;
    const [orders,setOrders] = Orders;
    return(
        <div className="bg-blue-600 text-white px-6 md:px-12 lg:px-24 py-4 border-b flex items-center gap-x-2 justify-between">
        <h1 className="text-4xl font-semibold">AFFECTIONARY</h1>
        <MdRestaurantMenu className="text-4xl hover:text-black border-2 border-blue-800 p-1 hover:shadow-md cursor-pointer" onClick={() => setShowSideNav(true)} />
        {orders.length > 0 && (
            <div className="absolute z-20 right-14 md:right-16 lg:right-32 top-3 bg-red-500 text-xs px-1 text-center rounded-full">{orders.length}</div>
        )}
    </div>
    );
}
