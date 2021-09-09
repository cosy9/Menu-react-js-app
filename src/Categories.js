import React,{useState} from 'react';

const Categories = ({categories,filterItems}) => {
  const [value,setValue] = useState(0);
  return (
  <div className="btn-container">
    {
      categories.map((category,index)=>{
        return(
          <button 
          type="button"
          className={`filter-btn ${value === index && 'btn-style' } `}
          key={index} 
          onClick={()=>{filterItems(category); setValue(index)}}
          >
            {category}
          </button>
        )
      })
    }
  </div>
  );
};

export default Categories;