import  { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'
import BooksTable from '../components/home/BooksTable'
import BooksCard from '../components/home/BooksCard'

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5555/')
      .then((response) => {
        setBooks(response?.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  },[])
  
  return (
    <div className='p-2'>
      
     
      <div className='flex items-center justify-between shadow-md'>
        <h1 className='my-4 text-3xl '>Books</h1>
        <div className='flex' >
          
          
        <button
          className='text-blue-700 hover:text-white border
          border-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
          dark:border-blue-500 dark:text-blue-500
          dark:hover:text-white dark:hover:bg-blue-500
          dark:focus:ring-blue-800'
          onClick={() => setShowType('table')}
          >
          Table
        </button>
        <button
          className='text-blue-700 hover:text-white border
          border-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
          dark:border-blue-500 dark:text-blue-500
          dark:hover:text-white dark:hover:bg-blue-500
          dark:focus:ring-blue-800'
          onClick={() => setShowType('card')}
          >
          Card
        </button>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-4xl text-sky-800' />
        </Link>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books}/>
      ) : (
        <BooksCard books={books} />
      )}
    </div>
    
      
    
  )
}

export default Home