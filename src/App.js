import {useState, useEffect, useRef} from 'react'
import './style.css';
import Recipe from './components/Recipe'

const API_ID = "8d46a36d";
const API_KEY = "5b1fd96d251122cbca1215c999e3c974";
const base_URL = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;

function App() {
  const [name, setName] = useState('chicken')
  const [recipes, setRecipes] = useState([]);

  
  const ref = useRef('');
  useEffect(async () => {
    return await fetch(
      `https://api.edamam.com/search?q=${name}&app_id=${API_ID}&app_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits));
  }, [name]);

  const searchHandle = () => {
    setName(ref.current.value);
  }
  const keydownHandle = (e) =>{
    if (e.key == 'Enter') {
      searchHandle();
      ref.current.value = "";
    }
  }


  return (
    <div className="wrapper">
      <div className="search-field">
        <input
          ref={ref}
          type="text"
          onKeyDown={keydownHandle}
          placeholder="Search..."
          className="search-bar"
        />
        <button onClick={searchHandle} className="btn-search">
          Search
        </button>
      </div>
      <div className="content">
        {recipes.map((recipe, key) => (
          <Recipe
            img={recipe.recipe.image}
            label={recipe.recipe.label}
            calories={recipe.recipe.ingredientLines}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
