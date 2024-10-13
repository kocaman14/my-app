import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { randomUsers } from '../features/usersSlice'

export const Userpage  = () => {
  const { persons } = useSelector((store) => store.users)
  const dispatch = useDispatch()



  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * Object.keys(persons).length);
    const randomUser = Object.keys(persons)[randomNumber];
    console.log(randomUser)
    const timer = setTimeout(() => {
      dispatch(randomUsers({ name: randomUser, status: false }));
    }, 2000);
    setTimeout(() => {
      dispatch(randomUsers({ name: randomUser, status: true }));
    }, 1000)

    return () => clearTimeout(timer);
  }, [persons,dispatch]);
  console.log(persons)
  return (
   <>
  <ul>

{Object.entries(persons).map(([key, value])=>(
<li key={key}>{key}:{value?"🟢":"🔴"}</li>
))}

   
   
   
  </ul>
   </>
  )
}
