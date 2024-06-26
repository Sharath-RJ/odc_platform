import React, { useEffect, useState } from 'react'
import { API_URL } from '../../constants'
import axios from 'axios'
import { Table, Card } from 'flowbite-react'

const Profile = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  useEffect(() => {
    async function loadData() {
      try {
        const res = await axios.get(API_URL + 'user/profile',{
          headers:{
            "Authorization":`Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log(res);
        setData(res.data.user)
      } catch ({ response }) {
        setError(response.data.message)
      }
    }
    loadData()
  }, [])
  return (
    <div>

      <div className='bg-blue-400 h-screen pt-2'>
        <h1 className='md:text-4xl text-2xl font-semibold  text-white mb-3 md:w-[60%] sm:w-[80%] w-[90%] mx-auto'>Profile</h1>
        <div className='bg-white md:w-[60%] sm:w-[80%] w-[90%] mx-auto md:p-5 p-4 rounded-md mb-6'>
          <h1 className='md:text-4xl text-2xl font-semibold mb-2' >Jayaram s kumar</h1>
          <p className='text-[15px] md:text-[18px] text-gray-500'>Email - <span className='font-semibold'>jayaram@gmail.com</span></p>
          <p className='text-[15px] md:text-[18px] text-gray-500'>phone - <span className='font-semibold'>7907144673</span></p>
          <p className='text-[15px] md:text-[18px] text-gray-500'>DOB - <span className='font-semibold'>13/06/2003</span></p>
          <p className='text-[15px] md:text-[18px] text-gray-500'>State - <span className='font-semibold'>Kerala</span></p>
          <p className='text-[15px] md:text-[18px] text-gray-500'>District - <span className='font-semibold'>Ernakulam</span></p>
          <p className='text-[15px] md:text-[18px] text-gray-500'>Address - <span className='font-semibold'>House no:001 vytilla , ernakulam</span></p>
        </div>

        <h1 className='md:text-3xl text-xl font-semibold  text-green-600 mb-3 md:w-[60%] sm:w-[80%] w-[90%] mx-auto'>Completed Jobs</h1>
        <div className="overflow-x-auto md:w-[60%] sm:w-[80%] w-[90%] mx-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Job</Table.HeadCell>
              <Table.HeadCell>Hotel</Table.HeadCell>
              <Table.HeadCell>Completed by</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>Catering</Table.Cell>
                <Table.Cell>Royal Plaza</Table.Cell>
                <Table.Cell>27/06/2024</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>Catering</Table.Cell>
                <Table.Cell>Royal Plaza</Table.Cell>
                <Table.Cell>27/06/2024</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>Catering</Table.Cell>
                <Table.Cell>Royal Plaza</Table.Cell>
                <Table.Cell>27/06/2024</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
      <div className='mb-10'>
        <h1 className='md:text-3xl text-xl font-semibold  text-[#07c611]  mx-auto text-center my-6'>Jobs booked</h1>
        <div className='flex md:w-[80%] items-center justify-around mx-auto flex-wrap gap-6'>
          <div className='sm:max-w-[80%] sm:mx-5'>
            <Card href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Catering
              </h5>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hotel plaza
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam.
              </p>
            </Card>
          </div>
          <div>
            <Card href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Catering
              </h5>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hotel plaza
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam.
              </p>
            </Card>
          </div>
          <div>
            <Card href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Catering
              </h5>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hotel plaza
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam.
              </p>
            </Card>
          </div>
          <div>
            <Card href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Catering
              </h5>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hotel plaza
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, magnam.
              </p>
            </Card>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Profile