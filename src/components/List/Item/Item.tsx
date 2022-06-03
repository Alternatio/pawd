import React from 'react';
import style from './Item.module.css'
import { motion, AnimatePresence } from 'framer-motion'

type ItemProps = {
  data: object[]
  index: number
  value: object
  arrayOfKeys: string[]
  setData: Function
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className={style.Item}>
      <div className={style.index}>
        #{props.index}
      </div>
      {props.arrayOfKeys.map((value, index) => {
        return (
          <div className={style.line}>
            <div className={style.key}>
              {value}
            </div>
            <div className={style.value}>
              {Object.values(props.value)[index]}
            </div>
          </div>
        )
      })}
      <div className={style.buttons}>
        <button 

        className='buttonYellow'>
          Редактировать
        </button>
        <button 
        onClick={() => {
          const tempArray: object[] = props.data
          tempArray.splice(props.index, 1)
          props.setData(tempArray)
          console.log(tempArray)
        }}
        className='buttonRed'>
          Удалить
        </button>
      </div>
    </motion.div>
  );
}

export default Item;