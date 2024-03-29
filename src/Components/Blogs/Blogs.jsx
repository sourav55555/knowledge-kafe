import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blogs = (props) => {
    const { name, published, image, title, profileImg, duration} = props.blog;
    return (
        <div className='border-b-2 md:py-10 py-6 md:my-0 my-4'>
            <img className='md:w-[885px] md:h-[450px] w-full h-56 rounded-lg mb-6' src={image} alt="" />
            
                <div className='flex flex-col md:flex-row md:justify-between justify-start md:items-center mb-6'>
                    <div className='flex items-center'>
                        <img className='w-16 h-16 rounded-full me-4' src={profileImg} alt="" />
                        <div>
                            <p>{name}</p>
                            <p>{published}</p>
                        </div>
                    </div>
                    <div className='flex text-xl md:items-center justify-end'>
                        <p className='me-3'>{duration} min read</p>
                        <button onClick={() => props.bookmark(title)}><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
                
            <h2 className='text-3xl font-bold md:w-3/4 w-11/12 mb-3'>
                {title}
            </h2>
            <div className='flex gap-4 mb-3'>
                <p>#beginners</p>
                <p>#programming</p>
            </div>
            <button onClick={()=> props.spentTime(duration)} className='underline font-semibold text-lime-700'>Mark as read</button>
        </div>
    );
};

export default Blogs;