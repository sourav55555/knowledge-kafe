import React from 'react';


const SideBar = ({timeTotal, bookmarks}) => {
    return (
        <div className=''>
            <div className='md:w-[430px] w-full mt-4 mb-6'>
                <div className='border-cyan-700 border-2 bg-cyan-50 py-[20px] text-center rounded-lg text-cyan-900'>
                    <p className='text-cyan-700 font-semibold text-lg'>Spent time on read :  {timeTotal} min</p>
                </div>
            </div>
            <div className='p-6 md:w-[430px] w-full bg-gray-100 rounded-lg'>
                <p className='font-semibold text-lg mb-4'>Bookmarked Blogs : {bookmarks.length}</p>
                <div className=' mx-auto'>
                {
                    bookmarks.map( data => <p className='my-4 bg-white p-4 rounded-lg'>{data}</p>)
                }
                  
                </div>
            </div>
        </div>
    )
        
};

export default SideBar;