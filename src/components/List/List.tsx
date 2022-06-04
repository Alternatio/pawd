import React, { useEffect } from 'react'
import style from './List.module.css'
import Item from './Item/Item'

type ListProps = {
  data: object[]
  arrayOfKeys: string[]
  setData: Function
}

interface objectValues {
  fullName?: string
  dateOfBirth?: string
  gender?: string
  post?: string
  nameOfDivision?: string
  fullNameOfDirector?: string
}

const List: React.FC<ListProps> = (props: ListProps) => {
  return (
    <div className='wrapper'>
      <div 
      className={style.List}>
        {
          props.data.map((value: objectValues, index) => {
            return <Item 
            arrayOfKeys={props.arrayOfKeys}
            index={index}
            value={value}
            setData={props.setData}
            data={props.data}/>
          })
        }
      </div>
    </div>
  )
}

export default List