import React, { useState } from 'react'
import Header from '../../components/Headers/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {

  const[categories, setCategories] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu categories={categories} setCategories={setCategories} />
      <FoodDisplay categories={categories}  />
      <AppDownload />
    </div>
  )
}

export default Home
