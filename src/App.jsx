import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import SideBar from './Components/SideBars/SideBar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [blogs, setBlogs] = useState([]);
  const [timeTotal, setTimeTotal] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  const spentTime = (time) => {
    let updateTime = timeTotal + parseInt(time);
    setTimeTotal(updateTime);
  }

  const bookmark = (title) =>{
    let exists = bookmarks.find(data => data == title);

    if(exists){
      toast("Can't add, already bookmarked!")
    }
    else{
      let updateBookmark = [...bookmarks, title];
      setBookmarks(updateBookmark);
    }
  }

  useEffect( ()=>{
    fetch("data.json")
    .then(res=> res.json())
    .then(data => setBlogs(data))
  }, [])

  return (
    <div className='md:px-10 px-4 container mx-auto'>
      <nav className='flex justify-between items-center py-8 border-b-2'>
        <h2 className='text-2xl font-bold w-1/2'>Know Programming</h2>
        <img className='w-16 h-16 rounded-full' src="https://randomuser.me/api/portraits/men/64.jpg" alt="" />
      </nav>
      <div className='flex flex-col md:flex-row my-6 justify-around '>
        <div className=''>
          {
            blogs.map((blog) => <Blogs key={blog.id} blog={blog} bookmark={bookmark} spentTime={spentTime}></Blogs>) 
          }
        </div>
        <SideBar timeTotal={timeTotal} bookmarks={bookmarks}></SideBar>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default App
