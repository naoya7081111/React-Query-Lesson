import React, { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

export const ClassicalFetchB: VFC = () => {

    const navigation = useNavigate();
    const { tasks } = useStateContext();
    console.log('renderd ClassicalFetchB');

  return (
    <div className='flex justify-center items-center flex-col'>
        <p className="flex-center font-bold mb-3">ClassicalFetchB</p>
        {tasks?.map((task) => (
            <p key={task.id}>{task.title}</p>
        ))}
        <ChevronDoubleLeftIcon 
            onClick={() => navigation('/fetch-a')} 
            className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"             
        />
        <p className='text-sm'>fetch A</p>
    </div>
  )
}
