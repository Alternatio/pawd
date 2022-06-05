import React, { useState } from 'react'
import style from './Header.module.css'
import PopupAddPeople from '../PopupAddPeople/PopupAddPeople'
import { AnimatePresence } from 'framer-motion';

type HeaderProps = {
  arrayOfKeys: string[]
  setData: Function
  data: object[]
  setSearch: Function
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [popupIsVisible, setPopupIsVisible] = useState<boolean>(false)

  return (
    <>
      <div className='wrapper'>
        <div className={style.Header}>
          <button 
          onClick={() => setPopupIsVisible(true)}
          className='buttonGreen'>
            Добавить сотрудника
          </button>
          <button 
          onClick={() => props.setData([])}
          className='buttonRed'>
            Удалить всё
          </button>
          <input 
          onChange={e => props.setSearch((e.target.value).toLowerCase())}
          maxLength={50}
          className={style.input}
          placeholder="Поиск"
          type="text" />
        </div>
      </div>
      <AnimatePresence>
        {popupIsVisible && 
        <PopupAddPeople 
        data={props.data}
        setData={props.setData}
        setPopupIsVisible={setPopupIsVisible}
        arrayOfKeys={props.arrayOfKeys}/>}
      </AnimatePresence>
    </>
  )
}

export default Header