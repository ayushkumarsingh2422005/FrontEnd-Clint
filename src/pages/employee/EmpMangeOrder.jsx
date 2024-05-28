import React, { useEffect, useState } from 'react'
import EmployeeNev from '../../components/EmployeeNev';
import { FaXmark } from 'react-icons/fa6'
// import OrderStatusTooltip from '../../components/OrderStatusTooltip'
import { PieChart } from '@mui/x-charts/PieChart';
// import ManageOrderItemEdit from '../../components/ManageOrderItemEdit'
import { Link } from 'react-router-dom'
import OrderStatusTooltip from '../../components/OrderStatusTooltip';
import showToastMessage from '../../utils/toast_message';

export default function EmpMangeOrder() {
    const [allOrderData, setAllOrderData] = useState();
    const [orderType, setOrderType] = useState('all');

    const getOrderFromStore = async (type) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/orders/getall/${type}`);

            if (!response.ok) {
                showToastMessage("error", response.statusText);
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setAllOrderData(data);
            showToastMessage('success', 'Updated')
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('There was a problem retrieving the items: ' + error.message);
        }
    };

    const delOrder = async (e) => {
        const id = e.target.parentElement.parentElement.id;

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/orders/del/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();

            getOrderFromStore(orderType);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('There was a problem deleting the item: ' + error.message);
        }
    };
    useEffect(() => {
        getOrderFromStore(orderType);
    }, []);
    return (
        <div>
            <div className="bg-gray-100 font-family-karla flex sm:flex-row flex-col">
                <EmployeeNev />

                <div className="w-full overflow-x-hidden border-t flex flex-col h-[100vh]">
                    <main className="w-full flex-grow p-6">
                        <h1 className="text-3xl text-black pb-6">Order Manager</h1>

                        <div className="flex flex-wrap mt-6">
                            <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
                                <p className="text-xl pb-3 flex items-center">
                                    <i className="fas fa-plus mr-3"></i> Order Reports
                                </p>
                                <div className="p-6 bg-white">
                                    <b>Total Orders</b> : {allOrderData && allOrderData.length} <br />
                                    <span className='text-red-700'><b>Pending Orders</b> : {allOrderData && allOrderData.filter((order) => order.status === 'pending').length}</span> <br />
                                    <span className='text-blue-700'><b>Completed Orders</b> : {allOrderData && allOrderData.filter((order) => order.status === 'completed').length}</span> <br />
                                    <span className='text-green-700'><b>Paid Orders</b> : {allOrderData && allOrderData.filter((order) => order.status === 'paid').length}</span>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
                                <p className="text-xl pb-3 flex items-center">
                                    <i className="fas fa-check mr-3"></i> Data Reports
                                </p>
                                <div className="p-6 bg-white">
                                    <PieChart
                                        series={[
                                            {
                                                data: [
                                                    { id: 0, value: allOrderData && allOrderData.filter((order) => order.status === 'pending').length, label: 'Pending', color: '#FF5733' },
                                                    { id: 1, value: allOrderData && allOrderData.filter((order) => order.status === 'completed').length, label: 'Completed', color: '#0096FF' },
                                                    { id: 2, value: allOrderData && allOrderData.filter((order) => order.status === 'paid').length, label: 'Paid', color: '#50C878' },
                                                ],
                                            },
                                        ]}
                                        width={400}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-12">
                            <p className="text-xl pb-3 flex items-center">
                                <i className="fas fa-list mr-3"></i> Added Item
                            </p>
                            <div className="bg-white overflow-auto">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Order id</th>
                                            <th className="w-2/3 text-left py-3 px-4 uppercase font-semibold text-sm">Items</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm whitespace-nowrap w-auto">Name/Phone</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Total Prize</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm whitespace-nowrap w-auto">Time</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Table Number</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm cursor-pointer" onClick={() => {
                                                if (orderType == 'all') {
                                                    setOrderType('pending')
                                                    getOrderFromStore('pending');
                                                } else if (orderType == 'pending') {
                                                    setOrderType('completed')
                                                    getOrderFromStore('completed');
                                                } else if (orderType == 'completed') {
                                                    setOrderType('paid')
                                                    getOrderFromStore('paid');
                                                } else {
                                                    setOrderType('all')
                                                    getOrderFromStore('all');
                                                }

                                            }}>Status <span className='bg-white text-black rounded-md px-1'>{orderType.substring(0, 3)}</span> </th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm whitespace-nowrap w-auto">Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        {allOrderData && allOrderData.map((order, index) => (
                                            <tr key={order.orderId} id={order.orderId} className={index % 2 != 0 ? "bg-gray-200" : ""}>
                                                <td className="text-left py-3 px-4">{order.orderId}</td>
                                                <td className="w-2/3 text-left py-3 px-4">
                                                    <table
                                                        className="border border-gray-300 m-0 table-auto bg-white rounded-lg shadow-md font-light"
                                                    >
                                                        <thead className="bg-gray-100">
                                                            <tr>

                                                                <th className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wider p-1 px-2">Name</th>
                                                                <th className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wider p-1 px-2">Quantity</th>
                                                                <th className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wider p-1 px-2">Size</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200">
                                                            {order.items_desc.map((ele, idx) => (
                                                                <tr className={`${idx % 2 !== 0 ? "bg-gray-50" : ""}`} key={idx}>

                                                                    <td className="text-sm font-medium text-gray-900 px-2">{ele.item_name}</td>
                                                                    <td className="text-sm text-gray-500 px-2">{ele.item_quantity}</td>
                                                                    <td className="text-sm text-gray-500 px-2">{ele.item_plate}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td className="text-left py-3 px-4 whitespace-nowrap w-auto">{order.name}<br /> {order.phone_number}</td>
                                                <td className="text-left py-3 px-4">{order.total_bill}</td>
                                                <td className="text-left py-3 px-4 whitespace-nowrap w-auto">{order.date.split("T")[0]} <br /> {order.date.split("T")[1].substr(0, 5)}</td>
                                                <td className="text-left py-3 px-4">{order.table_number}</td>
                                                <td className="text-left py-3 px-4 relative group" type="button">
                                                    <OrderStatusTooltip status={order.status} id={order.orderId} fun={getOrderFromStore} />
                                                </td>

                                                <td className="text-left py-3 px-4 ">
                                                    <Link to={`/admin/invoice/${order.orderId}`} >
                                                        <span className='hover:text-blue-500 hover:underline cursor-pointer text-blue-400'>invoice</span>
                                                    </Link> &nbsp;
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
