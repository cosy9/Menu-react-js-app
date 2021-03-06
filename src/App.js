import React, { useState } from 'react';
import items from './data';
import Categories from './Categories';
import Menu from './Menu'; 

const allCategories = ['all',...new Set (items.map((item)=>item.category))];

function App() {
  // setting up states
  // 1) menu item i.e all list of products 
  const [menuItems,setMenuItems] = useState(items);
  // 2) categories i.e all list of categories 
  const [categories,setCategories] = useState(allCategories);

  const filterItems = (category)=>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category);
    setMenuItems(newItems);
  };


  return <main>
    <section className="my-menu">
      <div className="my-title">
        <h2>Our Menu</h2>
      </div>
      <Categories categories={categories} filterItems = {filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>
}

export default App;
