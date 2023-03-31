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
      <div className='my-10 md:mx-8 mx-3'>
        <div className='mb-4 border-2 rounded-lg p-4'>
          <p className='my-3 border-b-2 pb-3 font-semibold'>What is the difference between props and state?</p>
          <p>
            We can change state values, but props values can not be changed. <br />
             Wc can set different components values or data on stat, with props we can pass data from one component to another. 
          </p>
        </div>
        <div className='mb-4 border-2 rounded-lg p-4'>
          <p className='my-3 border-b-2 pb-3 font-semibold'>How does useState work?</p>
          <p>
            useStat is a react hook. It has two functional components. First, we need to pass any default value and   it returns a variable with this current value. And using another component we can set or update the   current variable value. Then we can get the latest updated value.
          </p>
        </div>
        <div className='mb-4 border-2 rounded-lg p-4'>
          <p className='my-3 border-b-2 pb-3 font-semibold'>Purpose of useEffect other than fetching data.</p>
          <p>useEffect is a react hook. We can set dependencies on useEffect. Using dependencies it will run at the beginning, it will run if the dependencies value is changed. So that we can get live update on any dynamic data.</p>
        </div>
        <div className='mb-4 border-2 rounded-lg p-4'>
          <p className='my-3 border-b-2 pb-3 font-semibold'>How Does React work?</p>
          <p>
          React is a UI-based JavaScript library. React works with virtual DOM which is a DOM tree representation in javascript. The virtual DOM and the browser DOM are the same. When we read and change the DOM in react it uses a virtual representation of it. And, after changing the virtual DOM it will update the browser DOM according to the virtual DOM.
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
        }
export default App;
