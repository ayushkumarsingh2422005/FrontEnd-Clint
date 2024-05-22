import React, { useState } from 'react'
import { FaBars, FaMoneyBill, FaWindowClose } from 'react-icons/fa';
import { FaPlateWheat } from 'react-icons/fa6';
import { MdAdd, MdDashboard, MdLogout } from 'react-icons/md';

export default function AdminNev() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <aside className="relative bg-sidebar h-screen w-64 sm:block shadow-xl hidden">
                <div className="p-6">
                    <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <a href="index.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                        <MdDashboard /> &nbsp; Dashboard
                    </a>
                    <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <MdAdd /> &nbsp; Add itmes
                    </a>
                    <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <FaPlateWheat /> &nbsp; Tables

                    </a>
                    <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <FaMoneyBill /> &nbsp; Bills
                    </a>

                </nav>
                <div className="p-6">
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
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
                    <a href="index.html" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                        <MdDashboard /> &nbsp; Dashboard
                    </a>
                    <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <MdAdd /> &nbsp; Add itmes
                    </a>
                    <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaPlateWheat /> &nbsp; Tables
                    </a>
                    <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaMoneyBill /> &nbsp; Bills
                    </a>
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <MdLogout /> &nbsp; Logout
                    </button>
                </nav>
                {/* <!-- <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                    </button> --> */}
            </header>
        </>
    )
}
