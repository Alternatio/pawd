import React, { useState } from 'react';
import style from './Item.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import PopupEditPeople from '../../PopupEditPeople/PopupEditPeople';

type ItemProps = {
  data: object[]
  index: number
  value: objectKeys
  arrayOfKeys: string[]
  setData: Function
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

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const [popupIsVisible, setPopupIsVisible] = useState<boolean>(false)
  return (
    <motion.div 
    layout
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className={style.Item}>
      <AnimatePresence>
        {popupIsVisible && 
        <PopupEditPeople 
        value={props.value}
        data={props.data}
        setData={props.setData}
        index={props.index}
        arrayOfKeys={props.arrayOfKeys}
        setPopupIsVisible={setPopupIsVisible}/>}
      </AnimatePresence>
      <div className={style.index}>
        #{props.value.id}
      </div>
      {props.arrayOfKeys.map((value, index) => {
        return (
          <>
            {index > 0 && <div className={style.line}>
            <div className={style.key}>
              {value}
            </div>
            <div className={style.value}>
              {Object.values(props.value)[index]}
            </div>
          </div>}
          </>
        )
      })}
      <div className={style.buttons}>
        <button 
        onClick={() => {
          setPopupIsVisible(!popupIsVisible)
        }}
        className='buttonYellow'>
          {popupIsVisible ? "Готово" : "Редактировать"}
        </button>
        <button 
        onClick={() => {
          props.setData(props.data.filter((item: objectKeys) => (item.id !== props.value.id)))
        }}
        className='buttonRed'>
          Удалить
        </button>
      </div>
    </motion.div>
  );
}

export default Item;