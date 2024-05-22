import React from 'react';
import { Link } from 'react-router-dom';
import cousineImage from '../assets/cousines.png';

export default function Root() {
    return (
        <section className="h-screen w-screen">
            <div className="relative h-3/4 w-full">
                <img src={cousineImage} alt="Cousine" className="absolute h-full w-full object-cover" />
                <div className="absolute h-full w-full bg-secondary opacity-75" />
                <h1 className="px-24 text-6xl md:text-8xl text-white font-bold absolute bottom-0 left-0">
                    AFFECTIONARY
                </h1>
            </div>
            <div className="px-4 md:px-24 mt-8">
                <h2 className="text-secondary font-semibold text-2xl mb-2">Continue as</h2>
                <button className="bg-secondary text-white p-4 mr-4 rounded-md hover:shadow-xl transition-shadow ease-in-out duration-300">
                    <Link to={"/home"}>
                    Customer
                    </Link>
                </button>
                <button className="bg-gray-200 p-4 rounded-md hover:shadow-xl transition-shadow ease-in-out duration-300">
                    <Link to={"/employee"}>
                    Employee
                    </Link>
                </button>
            </div>
        </section>
    );
}
