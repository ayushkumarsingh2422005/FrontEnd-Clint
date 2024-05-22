import React, { useState } from 'react'
import './AdminHome.css'
import { FaBars, FaCross } from 'react-icons/fa';
export default function AdminHome() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="bg-gray-100 font-family-karla flex sm:flex-row flex-col">
                <aside className="relative bg-sidebar h-screen w-64 sm:block shadow-xl hidden">
                    <div className="p-6">
                        <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>

                    </div>
                    <nav className="text-white text-base font-semibold pt-3">
                        <a href="index.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                            <i className="fas fa-tachometer-alt mr-3"></i>
                            Dashboard
                        </a>
                        <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-sticky-note mr-3"></i>
                            Blank Page
                        </a>
                        <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-table mr-3"></i>
                            Tables
                        </a>
                        <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-align-left mr-3"></i>
                            Forms
                        </a>
                        <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Tabbed Content
                        </a>
                        <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-calendar mr-3"></i>
                            Calendar
                        </a>
                    </nav>
                    <div className="p-6">
                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-plus mr-3"></i> Logout
                        </button>
                    </div>
                </aside>


                <header className="w-full bg-sidebar py-5 px-6 sm:hidden block">
                    <div className="flex items-center justify-between">
                        <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                        <button className="text-white text-3xl focus:outline-none" onClick={setIsOpen(!isOpen)}>
                            {/* @click="isOpen = !isOpen" */}
                            {isOpen && <FaBars />}
                            {!isOpen && <FaCross />}
                        </button>
                    </div>

                    <nav className={`flex flex-col pt-4 ${isOpen ? 'flex': 'hidden'}`}>
                        {/* :className="isOpen ? 'flex': 'hidden'" */}
                        <a href="index.html" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                            <i className="fas fa-tachometer-alt mr-3"></i>
                            Dashboard
                        </a>
                        <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-sticky-note mr-3"></i>
                            Blank Page
                        </a>
                        <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-table mr-3"></i>
                            Tables
                        </a>
                        <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-align-left mr-3"></i>
                            Forms
                        </a>
                        <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Tabbed Content
                        </a>
                        <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-calendar mr-3"></i>
                            Calendar
                        </a>
                        <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-cogs mr-3"></i>
                            Support
                        </a>
                        <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-user mr-3"></i>
                            My Account
                        </a>
                        <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-sign-out-alt mr-3"></i>
                            Sign Out
                        </a>
                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
                        </button>
                    </nav>
                    {/* <!-- <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                    </button> --> */}
                </header>

                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <h1 className="text-3xl text-black pb-6">Dashboard</h1>

                        <div className="flex flex-wrap mt-6">
                            <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
                                <p className="text-xl pb-3 flex items-center">
                                    <i className="fas fa-plus mr-3"></i> Monthly Reports
                                </p>
                                <div className="p-6 bg-white">
                                    <canvas id="chartOne" width="400" height="200"></canvas>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
                                <p className="text-xl pb-3 flex items-center">
                                    <i className="fas fa-check mr-3"></i> Resolved Reports
                                </p>
                                <div className="p-6 bg-white">
                                    <canvas id="chartTwo" width="400" height="200"></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-12">
                            <p className="text-xl pb-3 flex items-center">
                                <i className="fas fa-list mr-3"></i> Latest Reports
                            </p>
                            <div className="bg-white overflow-auto">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr>
                                            <td className="w-1/3 text-left py-3 px-4">Lian</td>
                                            <td className="w-1/3 text-left py-3 px-4">Smith</td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                        </tr>
                                        <tr className="bg-gray-200">
                                            <td className="w-1/3 text-left py-3 px-4">Emma</td>
                                            <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                                            <td className="w-1/3 text-left py-3 px-4">Williams</td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                        </tr>
                                        <tr className="bg-gray-200">
                                            <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                                            <td className="w-1/3 text-left py-3 px-4">Brown</td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/3 text-left py-3 px-4">Lian</td>
                                            <td className="w-1/3 text-left py-3 px-4">Smith</td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                        </tr>
                                        <tr className="bg-gray-200">
                                            <td className="w-1/3 text-left py-3 px-4">Emma</td>
                                            <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                        </tr>
                                        <tr>
                                            <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                                            <td className="w-1/3 text-left py-3 px-4">Williams</td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                        </tr>
                                        <tr className="bg-gray-200">
                                            <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                                            <td className="w-1/3 text-left py-3 px-4">Brown</td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                            <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>

                    <footer className="w-full bg-white text-right p-4">
                        Built by <a target="_blank" href="https://davidgrzyb.com" className="underline">David Grzyb</a>.
                    </footer>
                </div>
            </div >
        </>
    )
}
