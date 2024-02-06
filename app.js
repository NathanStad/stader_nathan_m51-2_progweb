const { shuffle } = require("lodash");
import { Game } from "./module/Game.js";


// Récupérer des pays depuis une API et les mélanger

const CountryAPI = async () => {
    
    fetch('https://restcountries.com/v3.1/all') // fait une requête GET en une promesse
	.then((response) => response.json())
	.then((data) => {
        const game = new Game(shuffle(data));

        const highscore = document.querySelector("#highscore").lastElementChild;
        highscore.innerHTML = `Highscore = ${localStorage.getItem("highscore")}`
        
        const form = document.querySelector('form');
        const input = form.firstElementChild;
        const button = form.lastElementChild;
        const score = document.querySelector("#score").lastElementChild;
        
        button.addEventListener("click", (e) =>{
            e.preventDefault(); 
            if (!game.finishGame()) {
                if (game.country.checkAnswer(input.value)) {
                    game.addPoint();
                    score.innerHTML = `Score = ${game.actualScore()}`
                }
                game.nextCountry()
            }else{
                alert(`Le jeu est terminer, vous avez récolter ${game.actualScore()} points`)
            }

            form.reset()

            let high = localStorage.getItem("highscore");
            if (high < game.actualScore()) {
                localStorage.setItem("highscore", game.actualScore())
                highscore.innerHTML = `Highscore = ${localStorage.getItem("highscore")}`
            }

        } )
    })
}
CountryAPI()