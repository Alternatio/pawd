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

interface objectKeys {
  id?: string
  fullName?: string
  dateOfBirth?: string
  gender?: string
  post?: string
  nameOfDivision?: string
  fullNameOfDirector?: string
}

const PopupAddPeople: React.FC<PopupAddPeopleProps> = (props: PopupAddPeopleProps) => {
  const objectPeople: objectKeys = {
    id: '',
    fullName: '',
    dateOfBirth: '',
    gender: '',
    post: '',
    nameOfDivision: '',
    fullNameOfDirector: ''
  }
  const lastObject: objectKeys = props.data[props.data.length-1]
  const arrayInputs: string[] = []

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
            <>
              {index > 0 && <label 
              className={style.label}>
                {value}
                {index === 2 && 
                <InputMask 
                mask='99.99.9999'
                defaultValue='-'
                onChange={e => arrayInputs[index] = e.target.value}
                className={style.input}
                type="text"/>}
                {index !== 2 &&
                <InputMask 
                maxLength={50}
                mask=''
                defaultValue='-'
                onChange={e => arrayInputs[index] = e.target.value}
                className={style.input}
                type="text"/>}
              </label>}
            </>
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
            lastObject !== undefined ? (
              lastObject.id !== undefined && (
                arrayInputs[0] = ((Number(lastObject.id)+1)).toString()
                )
              ) : (arrayInputs[0] = '0')
            objectPeople.id = arrayInputs[0]
            objectPeople.fullName = arrayInputs[1]
            objectPeople.dateOfBirth = arrayInputs[2]
            objectPeople.gender = arrayInputs[3]
            objectPeople.post = arrayInputs[4]
            objectPeople.nameOfDivision = arrayInputs[5]
            objectPeople.fullNameOfDirector = arrayInputs[6]
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