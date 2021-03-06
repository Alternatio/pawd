import React, { useState, useEffect } from 'react'
import style from './App.module.css'
import '../../globalStyles/fonts.css'
import '../../globalStyles/global.css'
import Header from '../Header/Header'
import List from '../List/List'
import data from '../../data/data.json'

const App: React.FC = () => {
  const [copyData, setCopyData] = useState<object[]>(data)
  const [search, setSearch] = useState<string>('')
  const arrayOfKeys: string[] = [
    "id",
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
      setSearch={setSearch}
      data={copyData}
      setData={setCopyData}
      arrayOfKeys={arrayOfKeys}/>
      <List 
      search={search}
      arrayOfKeys={arrayOfKeys}
      setData={setCopyData}
      data={copyData}/>
    </div>
  );
}

export default App;