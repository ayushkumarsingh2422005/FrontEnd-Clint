import React, { useState } from 'react'
import { FaBars, FaMoneyBill, FaWindowClose } from 'react-icons/fa';
import { FaPlateWheat } from 'react-icons/fa6';
import { MdAdd, MdDashboard, MdLogout } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import admin_logined from '../utils/admin_logined';

export default function AdminNev() {
    admin_logined();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    let location = useLocation();
    return (
        <>
            <aside className="relative bg-sidebar h-screen w-64 sm:block shadow-xl hidden">
                <div className="p-6">
                    <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin </a>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <Link to="/admin" className={location.pathname == '/admin' ? `flex items-center active-nav-link text-white py-4 pl-6 nav-item` : `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item`}>
                        <MdDashboard /> &nbsp; Dashboard
                    </Link>
                    <Link to="/admin/manage-items" className={location.pathname == '/admin/manage-items' ? `flex items-center active-nav-link text-white py-4 pl-6 nav-item` : `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item`}>
                        <MdAdd /> &nbsp; Item manager
                    </Link>
                    <Link to="tables.html" className={location.pathname == '/table' ? `flex items-center active-nav-link text-white py-4 pl-6 nav-item` : `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item`}>
                        <FaPlateWheat /> &nbsp; Tables

                    </Link>
                    <Link to="forms.html" className={location.pathname == '/bills' ? `flex items-center active-nav-link text-white py-4 pl-6 nav-item` : `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item`}>
                        <FaMoneyBill /> &nbsp; Bills
                    </Link>

                </nav>
                <div className="p-6">
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center" onClick={()=>{localStorage.clear(); navigate('/admin/login')}}>
                        <MdLogout /> &nbsp; Logout
                    </button>
                </div>
            </aside>


            <header className="w-full bg-sidebar py-5 px-6 sm:hidden block">
                <div className="flex items-center justify-between">
                    <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                    <button className="text-white text-3xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        {/* @click="isOpen = !isOpen" */}
                        {!isOpen && <FaBars />}
                        {isOpen && <FaWindowClose />}
                    </button>
                </div>

                <nav className={`flex flex-col pt-4 ${isOpen ? 'flex' : 'hidden'}`}>
                    {/* :className="isOpen ? 'flex': 'hidden'" */}
                    <Link to="/admin" className={location.pathname == '/admin' ? `flex items-center active-nav-link text-white py-4 pl-6 nav-item` : `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item`}>
                        <MdDashboard /> &nbsp; Dashboard
                    </Link>
                    <Link to="/admin/manage-items" className={location.pathname == '/admin/manage-items' ? `flex items-center active-nav-link text-white py-4 pl-6 nav-item` : `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item`}>
                        <MdAdd /> &nbsp; Item manager
                    </Link>
                    <Link to="tables.html" className={location.pathname == '/table' ? `flex items-center active-nav-link text-white py-4 pl-6 nav-item` : `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item`}>
                        <FaPlateWheat /> &nbsp; Tables

                    </Link>
                    <Link to="forms.html" className={location.pathname == '/bills' ? `flex items-center active-nav-link text-white py-4 pl-6 nav-item` : `flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item`}>
                        <FaMoneyBill /> &nbsp; Bills
                    </Link>
                </nav>
                <div className="p-6">
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center" onClick={()=>{localStorage.clear(); navigate('/admin/login')}}>
                        <MdLogout /> &nbsp; Logout
                    </button>
                </div>
            </header>
        </>
    )
}
