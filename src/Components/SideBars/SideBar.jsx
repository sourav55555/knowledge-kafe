import React from 'react';


const SideBar = (props) => {
    return (
        <div className='w-[400px] mt-4'>
            <div className='border-cyan-700 border-2 bg-cyan-50 py-[20px] text-center rounded-lg text-cyan-900'>
                <p className='text-cyan-700 font-semibold text-lg'>Spent time on read :  {props.timeTotal} min</p>
            </div>
        </div>
    );
};

export default SideBar;