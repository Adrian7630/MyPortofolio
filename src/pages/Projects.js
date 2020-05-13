import React from 'react';
import Task from '../components/task';
 
function Projects ()
{
        return (

            <div className = 'content'>

                <Task boxtype = "boxreact" boxinfo = "info-react" tasklink = "https://github.com/Adrian7630/movie-app" tittle = "Movie App" info = "This application is used to find movies and see a small detail about it. "/>
                <Task boxtype = "boxreact" boxinfo = "info-react" tasklink = "https://github.com/Adrian7630/weather-app-react" tittle = "Weather App" info = "An application made with react that is used to see the weather in a city . "/>
                <Task boxtype = "boxreact" boxinfo = "info-react" tasklink = "https://github.com/Adrian7630/recipe-food-react" tittle = "Recipe App" info = "This application will find all the recipe based on the food you search."/>
                <Task boxtype = "boxweb"  boxinfo = "info-web" tasklink = "https://github.com/Adrian7630/Rock-Paper-Scissors-Game" tittle = "Rock Paper Scissors" info = "A simple game of rock paper scissors played with AI."/>
                <Task boxtype = "boxweb"  boxinfo = "info-web" tasklink = "https://github.com/Adrian7630/math-game" tittle = "Math Game" info = "An application based on math questions with random answers. "/>        

            </div>

        );
};

export default Projects;