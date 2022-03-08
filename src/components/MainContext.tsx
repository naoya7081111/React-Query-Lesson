import React, { VFC } from 'react'
import { ClassicalFetchA } from './ClassicalFetchA'
import { ClassicalFetchB } from './ClassicalFetchB'
import { ContextA } from './ContextA'
import { ContextB } from './ContextB'

export const MainContext: VFC = () => {
    return (
    <div>
        <ClassicalFetchA />
        <ClassicalFetchB />
        <ContextA />
        <ContextB />
    </div>
    )
}
