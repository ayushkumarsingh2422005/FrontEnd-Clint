import React, { useEffect, useState } from 'react'
import AdminNev from '../../components/AdminNev'
import { FaEdit, FaPen } from 'react-icons/fa'
import { MdAdd, MdDelete, MdEdit } from 'react-icons/md'
import { FaXmark } from 'react-icons/fa6'
import OrderStatusTooltip from '../../components/OrderStatusTooltip'
import { PieChart } from '@mui/x-charts/PieChart';

export default function ManageOrders() {
  const [addItemState, setAddItemState] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemCategory, setitemCategory] = useState("");
  const [restaurantHalfPrice, setRestaurantHalfPrice] = useState("");
  const [restaurantFullPrice, setRestaurantFullPrice] = useState("");
  const [swiggyHalfPrice, setSwiggyHalfPrice] = useState("");
  const [zomatoFullPrice, setZomatoFullPrice] = useState("");
  const [swiggyFullPrice, setSwiggyFullPrice] = useState("");
  const [zomatoHalfPrice, setZomatoHalfPrice] = useState("");
  const [editElementId, setEditElementId] = useState();
  const [allOrderData, setAllOrderData] = useState();
  const [orderType, setOrderType] = useState('all');

  const updateItemFromStore = async () => {
    const item_data = {
      name: itemName,
      category: itemCategory, // Fixed typo: was itemCategory
      restaurant_half_price: restaurantHalfPrice,
      restaurant_full_price: restaurantFullPrice,
      swiggy_half_price: swiggyHalfPrice,
      swiggy_full_price: swiggyFullPrice,
      zomato_half_price: zomatoHalfPrice,
      zomato_full_price: zomatoFullPrice
    };

    // try {
    //   const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/dishes/update/${editElementId}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(item_data)
    //   });

    //   console.log('Response status:', response.status); // Log the response status
    //   const data = await response.json();
    //   console.log('Response data:', data); // Log the response data

    //   if (!response.ok) {
    //     throw new Error(`Error: ${response.statusText}`);
    //   }

    //   alert('Item updated successfully');
    //   // Optionally, update the list of items
    //   getOrderFromStore();
    // } catch (error) {
    //   console.error('There was a problem with the fetch operation:', error);
    //   alert('There was a problem updating the item: ' + error.message);
    // }
    const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/dishes/update/${editElementId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item_data)
    });

    console.log('Response status:', response.status); // Log the response status
    const data = await response.json();
    console.log('Response data:', data); // Log the response data

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    alert('Item updated successfully');
    // Optionally, update the list of items
    getOrderFromStore(orderType);
  };


  const updateItemTriger = (e) => {
    setEditElementId(e.target.parentElement.parentElement.id)
    let ele = e.target.parentElement.previousSibling;
    setZomatoFullPrice(ele.innerText);
    ele = ele.previousSibling;
    setZomatoHalfPrice(ele.innerText);
    ele = ele.previousSibling;
    setSwiggyFullPrice(ele.innerText);
    ele = ele.previousSibling;
    setSwiggyHalfPrice(ele.innerText);
    ele = ele.previousSibling;
    setRestaurantFullPrice(ele.innerText);
    ele = ele.previousSibling;
    setRestaurantHalfPrice(ele.innerText);
    ele = ele.previousSibling;
    setitemCategory(ele.innerText);
    ele = ele.previousSibling;
    setItemName(ele.innerText);

    setAddItemState(!addItemState);
    console.log(ele);
  }

  const getOrderFromStore = async (type) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/orders/getall/${type}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setAllOrderData(data);
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
      console.log(data);
      console.log(id);

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
    <>
      <div className="bg-gray-100 font-family-karla flex sm:flex-row flex-col">
        <AdminNev />

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
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm whitespace-nowrap w-auto">Edit / Del</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {allOrderData && allOrderData.map((order, index) => (
                      <tr key={order.orderId} id={order.orderId} className={index % 2 != 0 ? "bg-gray-200" : ""}>
                        <td className="text-left py-3 px-4">{order.orderId}</td>
                        <td className="w-2/3 text-left py-3 px-4">
                          <table className="border border-gray-300 m-0 table-auto bg-white rounded-lg shadow-md font-light">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wider p-1 px-2">Name</th>
                                <th className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wider p-1 px-2">Quantity</th>
                                <th className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wider p-1 px-2">Size</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {order.items_desc.map((ele, idx) => {
                                return <tr className={`${idx % 2 != 0 ? "bg-gray-50" : ""}`} key={idx}>
                                  <td className="text-sm font-medium text-gray-900 px-2">{ele.item_name}</td>
                                  <td className="text-sm text-gray-500 px-2">{ele.item_quantity}</td>
                                  <td className="text-sm text-gray-500 px-2">{ele.item_plate}</td>
                                </tr>
                              })}
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
                          <span className='hover:text-blue-500 hover:underline cursor-pointer text-blue-400' onClick={updateItemTriger}>edit</span> &nbsp;
                          <span className='hover:text-red-500 hover:underline cursor-pointer text-red-400' onClick={delOrder}>del</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>


        <div className={`w-full h-[100vh] fixed transition-all duration-500 bg-gray-200 ${addItemState ? "" : "top-[100vh]"}`}>
          <div className=' p-4 text-2xl absolute text-right w-full'>
            <FaXmark onClick={() => {
              setZomatoFullPrice("");
              setZomatoHalfPrice("");
              setSwiggyFullPrice("");
              setSwiggyHalfPrice("");
              setRestaurantFullPrice("");
              setRestaurantHalfPrice("");
              setitemCategory("");
              setItemName("");
              setAddItemState(!addItemState)
            }} className='cursor-pointer float-right' />
          </div>

          <div className='p-4 h-full flex justify-center items-center flex-col'>
            <div className='p-2 text-2xl'>Update item</div>
            <form className="max-w-md mx-auto rounded border border-black p-5 container overflow-x-scroll">
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={itemName} onChange={(e) => setItemName(e.target.value)} />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={itemCategory} required onChange={(e) => setitemCategory(e.target.value)} />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Catagory</label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="number" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={restaurantHalfPrice} onChange={(e) => setRestaurantHalfPrice(e.target.value)} />
                  <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Restorent 1/2 Prize</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="number" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={restaurantFullPrice} onChange={(e) => setRestaurantFullPrice(e.target.value)} />
                  <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Restorent full Prize</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="number" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={swiggyHalfPrice} onChange={(e) => setSwiggyHalfPrice(e.target.value)} />
                  <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Swiggy 1/2 Prize</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="number" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={swiggyFullPrice} onChange={(e) => setSwiggyFullPrice(e.target.value)} />
                  <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Swiggy full Prize</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={zomatoHalfPrice} onChange={(e) => setZomatoHalfPrice(e.target.value)} />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zomato 1/2 Prize</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="number" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={zomatoFullPrice} onChange={(e) => setZomatoFullPrice(e.target.value)} />
                  <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zomato Full Prize</label>
                </div>
              </div>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={updateItemFromStore}>Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
