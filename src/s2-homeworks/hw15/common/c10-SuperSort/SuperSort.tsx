import React from 'react'
import DownIcon from "./downIcon.svg"
import UpIcon from './upIcon.svg'
import NoneIcon from './noneIcon.svg'
// добавить в проект иконки и импортировать
const downIcon = DownIcon
const upIcon = UpIcon
const noneIcon = NoneIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    switch (sort) {
        case down: return up
        case up: return ""
        default: return  down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
             alt={sort}/>
            {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
