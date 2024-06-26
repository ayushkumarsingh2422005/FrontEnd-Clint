import React, { useEffect, useState } from 'react'
import AdminNev from '../../components/AdminNev'
import { FaXmark } from 'react-icons/fa6';
import { MdAdd, MdDelete, MdEdit, MdUpdate } from 'react-icons/md';

export default function Sales() {
    const [sales, setSales] = useState([]);
    const [r, setR] = useState(0);
    const [s, setS] = useState(0);
    const [z, setZ] = useState(0);
    const [updateState, setUpdateState] = useState(false);
    const [eleId, setEleId] = useState(null);

    const fetchSales = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/sales/getall`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setSales(data);
            // setLoading(false);
        } catch (err) {
            // setError(err);
            // setLoading(false);
        }
    }

    const deleteRemark = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/sales/del/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            // Remove the deleted remark from the state
            setSales(sales.filter(remark => remark.remarkId !== id));
        } catch (err) {
            console.error('Failed to delete remark:', err);
        }
    };

    const updateSales = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/sales/update/${eleId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ z, r, s })
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
        } catch (err) {
            console.error('Failed to update remark:', err);
        }
    };

    const addSales = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/sales/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ s, r, z })
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const addedRemark = await response.json();
            fetchSales();
            // setNewRemark('');
        } catch (err) {
            console.error('Failed to add remark:', err);
        }
    };


    useEffect(() => {
        fetchSales();
    }, [])
    return (
        <div className="bg-gray-100 font-family-karla flex sm:flex-row flex-col">
            <AdminNev />
            <div className="w-full overflow-x-hidden border-t flex flex-col h-[100vh]">

                <main className="w-full flex-grow p-6">
                    <h1 className="text-3xl text-black pb-4">Sales</h1>

                    <div className="w-full mt-12 overflow-y-scroll">

                        <div className='flex w-full items-center justify-center bg-green-400 p-3 rounded text-2xl text-green-950 cursor-pointer hover:bg-green-500' onClick={() => {
                            setUpdateState(!updateState);
                            setEleId(null);
                            // setEditMode(false);
                        }}>
                            <MdAdd /> &nbsp; Add Sales
                        </div>
                        {sales && sales.map((data, index) => {
                            return <div className="bg-white overflow-auto my-4 p-3 rounded-md shadow-sm border border-l-lime-600 border-x-4" id={data.salesId} key={index}>
                                <h4 className='font-bold text-3xl'>{new Date(data.date).toDateString()}. </h4>
                                <div>Restorent : {data.r}</div>
                                <div>Swiggy : {data.s}</div>
                                <div>Zomato : {data.z}</div>
                                <div>Toatal : {data.r + data.s + data.z}</div><br />
                                <h4 className='font-bold text-sm text-right m-0 p-0 flex items-center'>
                                    <MdDelete className='text-2xl text-red-600 hover:text-red-700 cursor-pointer' onClick={() => {
                                        // setEleId(data.remarkId);
                                        deleteRemark(data.salesId);
                                    }} /> &nbsp;
                                    <MdEdit className='text-2xl text-blue-600 hover:text-blue-700 cursor-pointer' onClick={() => {
                                        setEleId(data.salesId)
                                        setR(data.r);
                                        setZ(data.z);
                                        setS(data.s);
                                        setUpdateState(!updateState)
                                    }} /> &nbsp; &nbsp;
                                    {/* <span className='text-gray-500 font-light'>{}</span> */}
                                </h4>
                            </div>
                        })}

                    </div>
                </main>
            </div>

            {/* <div className={`w-full h-[100vh] fixed transition duration-500 bg-gray-200 ${updateState ? "" : "top-[100vh]"}`}>
                <div className=' p-4 text-2xl absolute text-right w-full'>
                    <FaXmark onClick={() => {
                        setUpdateState(!updateState)
                    }} className='cursor-pointer float-right' />
                </div>

                <div className='p-4 h-full flex justify-center items-center flex-col'>
                    <div className='p-2 text-2xl'>{eleId==null ? "Add": "Update"} Remark</div>
                    <form className="max-w-md mx-auto rounded border border-black p-5 container overflow-x-scroll">

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-both"
                                    placeholder=" "
                                    required
                                    value={currentRemark}
                                    onChange={(e) => setCurrentRemark(e.target.value)}
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Edit
                                </label>

                            </div>
                        </div>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                            // updateRemark();
                            eleId==null ? addRemark(): updateRemark();
                            setUpdateState(!updateState)
                        }}>{eleId==null ? "Add": "Update"}</button>
                    </form>
                </div>
            </div> */}
            <div className={`w-full h-[100vh] fixed transition-all duration-500 bg-gray-200 ${updateState ? "" : "top-[100vh]"}`}>
                <div className=' p-4 text-2xl absolute text-right w-full'>
                    <FaXmark onClick={() => {
                        setR("");
                        setS("");
                        setZ("");
                        setUpdateState(!updateState)
                    }} className='cursor-pointer float-right' />
                </div>

                <div className='p-4 h-full flex justify-center items-center flex-col'>
                    <div className='p-2 text-2xl'>{eleId == null ? "Add" : "Update"} Amounts</div>
                    <form className="max-w-md mx-auto rounded border border-black p-5 container overflow-x-scroll">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" id="floating_paid" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={r || ""} onChange={(e) => setR(e.target.value)} />
                            <label htmlFor="floating_paid" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Restorent</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" id='floating_pending' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={z || ""} required onChange={(e) => setZ(e.target.value)} />
                            <label htmlFor="floating_pending" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zomato</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" id='floating_adv' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={s || ""} required onChange={(e) => setS(e.target.value)} />
                            <label htmlFor="floating_adv" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Swiggy</label>
                        </div>

                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                            // updateRemark();
                            eleId == null ? addSales() : updateSales();
                            setUpdateState(!updateState)
                        }}>{eleId == null ? "Add" : "Update"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
