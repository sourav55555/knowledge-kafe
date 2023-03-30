import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import SideBar from './Components/SideBars/SideBar'

function App() {
  const [blogs, setBlogs] = useState([]);
  const [timeTotal, setTimeTotal] = useState(0);

  const spentTime = (time) => {
    let updateTime = timeTotal + parseInt(time);
    setTimeTotal(updateTime);
  }

  useEffect( ()=>{
    fetch("data.json")
    .then(res=> res.json())
    .then(data => setBlogs(data))
  }, [])

  return (
    <div className='px-10 container mx-auto'>
      <nav className='flex justify-between items-center py-8 border-b-2'>
        <h2 className='text-2xl font-bold'>Know Programming</h2>
        <img className='w-16 h-16 rounded-full' src="https://randomuser.me/api/portraits/men/64.jpg" alt="" />
      </nav>
      <div className='flex my-6 justify-around '>
        <div className=''>
          {
            blogs.map((blog) => <Blogs key={blog.id} blog={blog} spentTime={spentTime}></Blogs>) 
          }
        </div>
        <SideBar timeTotal={timeTotal}></SideBar>
      </div>
    </div>
  )
}

export default App
