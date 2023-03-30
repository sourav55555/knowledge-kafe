import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blogs = (props) => {
    console.log(props)
    const {id, name, published, image, title, profileImg, duration} = props.blog;
    return (
        <div className='border-b-2'>
            <img className='w-[885px] h-[450px]' src={image} alt="" />
            <div>
                <div>
                    <div>
                        <img src={profileImg} alt="" />
                        <div>
                            <p>{name}</p>
                            <p>{published}</p>
                        </div>
                    </div>
                    <div>
                        <p>{duration} min read</p>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                </div>
            </div>
            <h3>
                {title}
            </h3>
            <div>
                <p>#beginners</p>
                <p>#programming</p>
            </div>
            <button>Mark as read</button>
        </div>
    );
};

export default Blogs;