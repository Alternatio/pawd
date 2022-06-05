import React from 'react'
import style from './PopupEditPeople.module.css'
import { motion } from 'framer-motion'
import InputMask from 'react-input-mask';

type PopupEditPeopleProps = {
  setPopupIsVisible: Function
  arrayOfKeys: string[]
  data: object[]
  setData: Function
  index: number
  value: objectKeys
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

const PopupEditPeople: React.FC<PopupEditPeopleProps> = (props: PopupEditPeopleProps) => {
  return (
    <motion.div 
    className={style.popup}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      {props.arrayOfKeys.map((value, index) => {
        return (
          <>
            {((index === 2) && (index > 0)) && 
            <InputMask 
            mask='99.99.9999'
            onChange={e => props.value.dateOfBirth = e.target.value}
            defaultValue={Object.values(props.data[props.index])[index]}
            className={style.input}
            placeholder={value}
            type="text"/>}
            {((index !== 2) && (index > 0)) &&
            <InputMask 
            mask=''
            onChange={e => {
              index === 1 && (props.value.fullName = e.target.value)
              index === 3 && (props.value.gender = e.target.value)
              index === 4 && (props.value.post = e.target.value)
              index === 5 && (props.value.nameOfDivision = e.target.value)
              index === 6 && (props.value.fullNameOfDirector = e.target.value)
            }}
            defaultValue={Object.values(props.data[props.index])[index]}
            className={style.input}
            placeholder={value}
            maxLength={50}
            type="text"/>}
          </>
        )
      })}
    </motion.div>
  )
}

export default PopupEditPeople