import React from 'react'
import style from './PopupAddPeople.module.css'
import { motion } from 'framer-motion'
import InputMask from 'react-input-mask';

type PopupAddPeopleProps = {
  setPopupIsVisible: Function
  arrayOfKeys: string[]
  setData: Function
  data: object[]
}

interface objectValues {
  fullName: string
  dateOfBirth: string
  gender: string
  post: string
  nameOfDivision: string
  fullNameOfDirector: string
}

const PopupAddPeople: React.FC<PopupAddPeopleProps> = (props: PopupAddPeopleProps) => {
  const objectPeople: objectValues = {
    fullName: '',
    dateOfBirth: '',
    gender: '',
    post: '',
    nameOfDivision: '',
    fullNameOfDirector: ''
  }

  const arrayInputs:string[] = []

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className={style.background}>
      <div 
      className={style.PopupAddPeople}>
        <div className={style.head}>
          Добавление сотрудника
        </div>
        {props.arrayOfKeys.map((value, index) => {
          arrayInputs.push('')
          return (
            <label 
            className={style.label}>
              {value}
              {index === 1 && 
              <InputMask 
              mask='99.99.9999'
              defaultValue='-'
              onChange={e => arrayInputs[index] = e.target.value}
              className={style.input}
              type="text"/>}
              {index !== 1 &&
              <InputMask 
              mask=''
              defaultValue='-'
              onChange={e => arrayInputs[index] = e.target.value}
              className={style.input}
              type="text"/>}
            </label>
          )
        })}
        <div className={style.buttons}>
          <button 
          onClick={() => props.setPopupIsVisible(false)}
          className='buttonRed'>
            Назад
          </button>
          <button 
          onClick={() => {
            objectPeople.fullName = arrayInputs[0]
            objectPeople.dateOfBirth = arrayInputs[1]
            objectPeople.gender = arrayInputs[2]
            objectPeople.post = arrayInputs[3]
            objectPeople.nameOfDivision = arrayInputs[4]
            objectPeople.fullNameOfDirector = arrayInputs[5]
            props.setData([...props.data, objectPeople])
          }}
          className='buttonGreen'>
            Добавить
        </button>
        </div>
      </div>
    </motion.div>
  )
}

export default PopupAddPeople