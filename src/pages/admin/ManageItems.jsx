import React from 'react'
import AdminNev from '../../components/AdminNev'
import { FaEdit, FaPen } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

export default function ManageItems() {
  return (
    <>
      <div className="bg-gray-100 font-family-karla flex sm:flex-row flex-col">
        <AdminNev />

        <div className="w-full overflow-x-hidden border-t flex flex-col h-[100vh]">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Item Manager</h1>

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
                      <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Item</th>
                      <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Catagory</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Restorent 1/2 Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Restorent full Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">swiggy 1/2 Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">swiggy full Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">zomato 1/2 Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">zomato full Prize</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Edit</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4 hover:text-blue-500 hover:underline underline cursor-pointer">  edit</td>
                    </tr>
                    <tr>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4 hover:text-blue-500 hover:underline underline cursor-pointer">  edit</td>
                    </tr>
                    <tr>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4 hover:text-blue-500 hover:underline underline cursor-pointer">  edit</td>
                    </tr>
                    <tr>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4 hover:text-blue-500 hover:underline underline cursor-pointer">  edit</td>
                    </tr>
                    <tr>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4 hover:text-blue-500 hover:underline underline cursor-pointer">  edit</td>
                    </tr>
                    <tr>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4 hover:text-blue-500 hover:underline underline cursor-pointer">  edit</td>
                    </tr>
                    <tr>
                      <td className="w-1/3 text-left py-3 px-4">Idali</td>
                      <td className="w-1/3 text-left py-3 px-4">Sout</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4">55</td>
                      <td className="text-left py-3 px-4">100</td>
                      <td className="text-left py-3 px-4 hover:text-blue-500 hover:underline underline cursor-pointer">  edit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div >
    </>
  )
}
