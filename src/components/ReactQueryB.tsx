import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';
import React, { VFC } from 'react'
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom'
import { Task } from '../types/types';

export const ReactQueryB: VFC = () => {
    const navigation = useNavigate();
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<Task[]>('tasks');
    return (
        <>
            <p className='font-bold my-3'>ReactQueryB</p>
            {data?.map((task) => (
                <p key={task.id}>{task.title}</p>
            ))}
            <ChevronDoubleLeftIcon 
                onClick={() => navigation('/')} 
                className="h-5 w-5 mt-2 text-blue-500 cursor-pointer" 
            />
            <p className='text-sm'>react-query A</p>
        </>
    )       
}
