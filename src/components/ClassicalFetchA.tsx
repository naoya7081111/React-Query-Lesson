import React, { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useClassicalFetch } from '../hooks/useClassicalFetch'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ClassicalFetchA: VFC = () => {

    const navigation = useNavigate()
    const { isLoading, isError, tasks } = useClassicalFetch();
    console.log("renderd ClassicfetchA");

    return (
        <div className='flex justify-center items-center flex-col'>
            <p className="flex-center font-bold mb-3">ClassicalFetchA</p>
            {isError && <div>Error</div>}
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                tasks?.map((task) => <p key={task.id}>{task.title}</p>)
            )
        }
        <ChevronDoubleRightIcon 
            onClick={() => navigation('/fetch-b')} 
            className="h-5 w-5 mt-2 text-blue-500 cursor-pointer" 
        />
        <p className='text-sm'>fetch B</p>
        </div>
    )
}