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
    const mood=Object.values(persons)[randomNumber];
    console.log(mood)
    const timer = setTimeout(() => {
      if(mood)dispatch(randomUsers({ name: randomUser, status: false }));
      if(!mood)dispatch(randomUsers({ name: randomUser, status: true }))
      
    }, 2000);
    
    
    return () => clearTimeout(timer);
  }, [persons,dispatch]);
  console.log(persons)
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ul className="list-none p-0 m-0 bg-white shadow-lg rounded-lg">
        {Object.entries(persons).map(([key, value]) => (
          <li key={key} className="flex justify-between items-center p-4 border-b border-gray-300 last:border-b-0">
            <span>{key}</span>
            <span className="text-xl">{value ? "🟢" : "🔴"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
