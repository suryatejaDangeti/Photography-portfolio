

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ApiFetch.css'

export default function ApiFetch() {

    const [dataArray, setData] = useState([]);

    // useEffect(() => {
    //     //https://jsonplaceholder.typicode.com/posts
    //     (
    //         async () => {
    //             const fetchingData = await fetch('https://jsonplaceholder.typicode.com/posts');
    //             const response = await fetchingData.json();
    //             setData([...dataArray, response])
    //         }
    //     )();
    // }, [data])

    useEffect(() => {
            ( async() => {
                const requestData = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const { data } = requestData;
                setData([...dataArray, data])
            })()
    }, [])

    console.log(dataArray[0])

  return (
    <div>
      {
        dataArray[0]?.map((each) => (
                <div className='api-container'>
                    <p>userId: {each.userId}</p>
                    <p>title: {each.title}</p>
                    <p>body: {each.body}</p>
                </div>
            )
        )
      }
    </div>
  )
}
