import React from 'react'
import style from './RecipeCard.module.css'

const RecipeCard = ({ name, calories, image, ingredients, cuisineType, dishType }) => {

    return (
        <div className={style.card}>
            <h1 className={style.cardTitle}>{name}</h1>
            <img src={image} alt="" className={style.cardImage} />
            <p className={style.cardCuisine}>Cuisine: {cuisineType}</p>
            <div className={style.cardInfo}>
                <p>Dish type: {dishType}</p>
                <p>Calories: {calories}</p>
            </div>
            <div className={style.cardIngredients}>
                <h4 className={style.ingredientsTitle}>Ingredients: </h4>
                <ol className={style.ingredientsList}>
                    {ingredients.map(ingredient => <li>{ingredient.text}</li>)}
                </ol>
            </div>

        </div>
    )
}

export default RecipeCard
