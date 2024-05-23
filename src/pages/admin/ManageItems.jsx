import React from 'react'
import AdminNev from '../../components/AdminNev'
import { FaEdit, FaPen } from 'react-icons/fa'
import { MdAdd, MdDelete, MdEdit } from 'react-icons/md'
import { FaXmark } from 'react-icons/fa6'

export default function ManageItems() {
  return (
    <>
      <div className="bg-gray-100 font-family-karla flex sm:flex-row flex-col">
        <AdminNev />

        <div className="w-full overflow-x-hidden border-t flex flex-col h-[100vh]">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Item Manager</h1>
            <div className='flex w-full items-center justify-center bg-green-400 p-3 rounded text-2xl text-green-950 cursor-pointer hover:bg-green-500'>
              <MdAdd /> &nbsp; Add item
            </div>
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
                <i className="fas fa-list mr-3"></i> Added Item
              </p>
              <div className="bg-white overflow-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">S No</th>
                      <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Item</th>
                      <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Catagory</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Restorent 1/2 Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Restorent full Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">swiggy 1/2 Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">swiggy full Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">zomato 1/2 Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">zomato full Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Edit / Del</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="text-left py-3 px-4">1</td>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4 ">
                        <span className='hover:text-blue-500 hover:underline cursor-pointer text-blue-400'>edit</span> &nbsp;
                        <span className='hover:text-red-500 hover:underline cursor-pointer text-red-400'>del</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="text-left py-3 px-4">1</td>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">
                        <span className='hover:text-blue-500 hover:underline cursor-pointer text-blue-400'>edit</span> &nbsp;
                        <span className='hover:text-red-500 hover:underline cursor-pointer text-red-400'>del</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4">1</td>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">
                        <span className='hover:text-blue-500 hover:underline cursor-pointer text-blue-400'>edit</span> &nbsp;
                        <span className='hover:text-red-500 hover:underline cursor-pointer text-red-400'>del</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="text-left py-3 px-4">1</td>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">
                        <span className='hover:text-blue-500 hover:underline cursor-pointer text-blue-400'>edit</span> &nbsp;
                        <span className='hover:text-red-500 hover:underline cursor-pointer text-red-400'>del</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4">1</td>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">

                        <span className='hover:text-blue-500 hover:underline cursor-pointer text-blue-400'>edit</span> &nbsp;
                        <span className='hover:text-red-500 hover:underline cursor-pointer text-red-400'>del</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="text-left py-3 px-4">1</td>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">
                        <span className='hover:text-blue-500 hover:underline cursor-pointer text-blue-400'>edit</span> &nbsp;
                        <span className='hover:text-red-500 hover:underline cursor-pointer text-red-400'>del</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4">1</td>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">
                        <span className='hover:text-blue-500 hover:underline cursor-pointer text-blue-400'>edit</span> &nbsp;
                        <span className='hover:text-red-500 hover:underline cursor-pointer text-red-400'>del</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>


        <div className='w-full h-[100vh] fixed bg-slate-50 '>
          <div className=' p-4 text-right text-2xl'>
            <FaXmark/>
          </div>

          <div className='bg-red-200 h-screen flex justify-center'>
            <form className="max-w-md mx-auto rounded border p-2 h-auto">
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Catagory</label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Restorent 1/2 Prize</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Restorent full Prize</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Swiggy 1/2 Prize</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Swiggy full Prize</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zomato 1/2 Prize</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zomato Full Prize</label>
                </div>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>

        </div>
      </div >
    </>
  )
}
