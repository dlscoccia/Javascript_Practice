import React from 'react'
import ImgOne from '../images/egg1.jpg'
import ImgTwo from '../images/egg2.jpg'

const Content = () => {
    return (
        <>
        <div className="recipe">
            <img src={ImgOne} alt="egg1" className="recipe-img"/>
            <div className="recipe-div">
                <h2 className="recipe-h2">Recipe One</h2>
                <p className="recipe-p">Lorem ipsum eggs</p>
                <span>$10</span>
            </div>
        </div>
                <div className="recipe">
                <img src={ImgTwo} alt="egg1" className="recipe-img"/>
                <div className="recipe-div">
                    <h2 className="recipe-h2">Recipe Two</h2>
                    <p className="recipe-p">Lorem ipsum eggs</p>
                    <span>$12</span>
                </div>
            </div>
            </>
    )
}

export default Content
