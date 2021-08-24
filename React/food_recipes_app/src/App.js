import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';


function App() {
  const APP_ID = 'ceb720ef'
  const APP_KEY = '4b4e0d1a670362fc59fb626ec5d76b85'
  

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('pizza')
  
  const getRecipe = async () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    setRecipes(data.hits)
  }
  useEffect(() => {
    getRecipe()
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App">
      <form className="searchForm" onSubmit={getSearch}>
        <input type="text" className="searchInput" value={search} onChange={updateSearch} placeholder="Search a recipe..."/>
        <button type="submit" className="searchBtn">Search</button>
      </form>
      {recipes.map(recipe => (
      <RecipeCard 
      name={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image} 
      ingredients={recipe.recipe.ingredients} 
      dishType={recipe.recipe.dishType} 
      cuisineType={recipe.recipe.cuisineType} />)
      )}
    </div>
  );
}

export default App;
