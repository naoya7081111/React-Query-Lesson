import React, { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectCount, increment } from '../slices/counterSlice';

export const RTKitA: VFC = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    console.log('rendered RKTitA')
    return (
    <div className='flex justify-center items-center flex-col'>
        <p className='font-bold my-3'>RTKitA</p>
        {count}
        <button
        className='py-3 px-3 mt-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded'
        onClick={() => dispatch(increment())}
        >
            increment
        </button>
    </div>
    )
}
