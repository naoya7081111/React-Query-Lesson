import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import React, { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryTasks } from '../hooks/useQueryTasks';

export const ReactQueryA: VFC = () => {

    const navigation = useNavigate();
    const { status, data } = useQueryTasks();

    if(status === 'loading') return <div>{'Loading...'}</div>
    if(status === 'error') return <div>{'Error'}</div>
    return (
        <>
            <p className='font-bold my-3'>ReactQueryA</p>
            {data?.map((task: any) => (
                <p key={task.id}>{task.title}</p>
            ))}
            <ChevronDoubleRightIcon 
            onClick={() => navigation('/query-b')} 
            className="h-5 w-5 mt-2 text-blue-500 cursor-pointer" 
            />
            <p className='text-sm'>react-query B</p>
        </>
    )
}
