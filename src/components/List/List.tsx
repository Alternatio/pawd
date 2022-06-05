import React from 'react'
import style from './List.module.css'
import Item from './Item/Item'
import { AnimatePresence } from 'framer-motion'

type ListProps = {
  data: object[]
  arrayOfKeys: string[]
  setData: Function
  search: string
}

interface objectKeys {
  id?: string
  fullName?: string
  dateOfBirth?: string
  gender?: string
  post?: string
  nameOfDivision?: string
  fullNameOfDirector?: string
}

const List: React.FC<ListProps> = (props: ListProps) => {
  const keys: string[] = [
    'id',
    'fullName',
    'dateOfBirth',
    'gender',
    'post',
    'nameOfDivision',
    'fullNameOfDirector'
  ]

  const searchFunction: Function = (data: object[]) => {
    return (data.filter((item: any) => 
      keys.some(key => item[key].toLowerCase().includes(props.search))
    ))
  }

  return (
    <div className='wrapper'>
      <div 
      className={style.List}>
        <AnimatePresence>
          {
            (props.data.length === 0) && <div>Список пуст!</div>
          }
          {
            searchFunction(props.data).map((value: objectKeys, index: any) => {
              return (
                <Item 
                arrayOfKeys={props.arrayOfKeys}
                index={index}
                value={value}
                setData={props.setData}
                data={props.data}/>
              )
            })
          }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default List