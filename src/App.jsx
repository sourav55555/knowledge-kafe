import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import SideBar from './Components/SideBar/SideBar'

function App() {
  const [blogs, setBlogs] = useState([]);

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
      <div className='flex'>
        <div className=''>
          {
            blogs.map((blog) => <Blogs key={blog.id} blog={blog}></Blogs>) 
          }
        </div>
        <SideBar></SideBar>
      </div>
    </div>
  )
}

export default App
