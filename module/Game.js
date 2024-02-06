import {Country} from "./Country.js";

export class Game{

    #score = 0
    #allCountry
    #actuallCountry = 0
    country
    actualScore = () =>{
        return this.#score
    };

    constructor(objectAllCountries){
        this.#allCountry = objectAllCountries;
        this.country = new Country(this.#allCountry[this.#actuallCountry])
        this.country.afficheDrapeau()
    }

    addPoint(){
        this.#score++;
    }

    finishGame(){
        if (this.#actuallCountry >= this.#allCountry.length) {
            return true
        }else{
            return false
        }
    }

    nextCountry(){
        if (this.finishGame()) {
            console.log("You have finished the game");
        }else{
            this.#actuallCountry++;
            this.country = new Country(this.#allCountry[this.#actuallCountry])
            this.country.afficheDrapeau()
        }
    }
}