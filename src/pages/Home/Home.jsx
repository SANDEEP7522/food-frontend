import React, { useState } from 'react'
import Header from '../../components/Headers/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

function Home() {

  const[categories, setCategories] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu categories={categories} setCategories={setCategories} />
      <FoodDisplay categories={categories}  />
    </div>
  )
}

export default Home
