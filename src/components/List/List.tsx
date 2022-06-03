import React from 'react'
import style from './List.module.css'
import Item from './Item/Item'

type ListProps = {
  data: object[]
  arrayOfKeys: string[]
  setData: Function
}

const List: React.FC<ListProps> = (props: ListProps) => {
  return (
    <div className='wrapper'>
      <div 
      className={style.List}>
        {
          props.data.map((value, index) => {
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