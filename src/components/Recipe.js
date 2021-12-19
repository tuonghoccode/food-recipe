import React from 'react'
import './recipe.css'
function Recipe({img,label,calories}) {
    return (
      <div className="recipe-wrapper">
        <img src={img} />
        <div className="recipe-content">
          <div className="title">{label}</div>
          <div className="detail">
            <ul>{calories.map(item=><li>{item}</li>)}</ul>
          </div>
          <button className="view-recipe">View Recipe</button>
        </div>
      </div>
    );
}

export default Recipe
