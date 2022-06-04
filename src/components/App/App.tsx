import React, { useState } from 'react'
import style from './App.module.css'
import '../../globalStyles/fonts.css'
import '../../globalStyles/global.css'
import Header from '../Header/Header'
import List from '../List/List'
import data from '../../data/data.json'

const App: React.FC = () => {
  const [copyData, setCopyData] = useState<object[]>(data)
  const arrayOfKeys: string[] = [
    "ФИО",
    "Дата рождения",
    "Пол",
    "Должность",
    "Название подразделения",
    "ФИО руководителя"
  ]

  return (
    <div className={style.App}>
      <Header 
      data={copyData}
      setData={setCopyData}
      arrayOfKeys={arrayOfKeys}/>
      <List 
      arrayOfKeys={arrayOfKeys}
      setData={setCopyData}
      data={copyData}/>
    </div>
  );
}

export default App;