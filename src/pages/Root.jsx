import React from 'react';
import { Link } from 'react-router-dom';
import cousineImage from '../assets/cousines.png';
import adminProfile from '../assets/Admin-Profile.png';

export default function Root() {
    return (
        <>
            <section className='h-screen max-w-screen'>
                <div className='h-3/4 relative px-6'>
                    <img className='-z-20 h-full w-full absolute inset-0 object-cover' src={cousineImage} alt="Cousine Image" />
                    <div className='-z-10 absolute h-full w-full inset-0 bg-secondary opacity-75' />
                    <h1 className='z-10 absolute bottom-0 font-bold text-white text-5xl'>AFFECTIONARY</h1>
                </div>
                <div className='px-6 py-4 bg-gray-100 h-1/4'>
                    <h2 className='text-secondary font-semibold text-xl mb-2'>Continue as</h2>
                    <Link to={'/home'}>
                        <button className='border p-2 rounded-md hover:shadow-lg transition-shadow ease-linear mr-2 bg-secondary text-white'>Customer</button>
                    </Link>
                    <Link to={'/employee'}>
                        <button className='border border-secondary p-2 rounded-md hover:shadow-lg transition-shadow ease-linear'>Employee</button>
                    </Link>
                </div>
            </section>
            <div className='w-12 fixed right-2 top-2 flex flex-col' onClick={() => console.log("object")}>
                <Link to={'/admin'} className='w-12 fixed right-2 top-2'>
                    <img src={adminProfile} alt="admin profile" className='rounded-full bg-slate-600' />
                </Link>
            </div>
        </>
    );
}
