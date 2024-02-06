import { shuffle } from "lodash";

export class Country {
    #country
    #answer = new Set();
    #flag

    constructor(country){
        this.#country = country
        this.#flag = country.flag;
        this.#allAnswers()
    }

    #allAnswers(){
        let array = Object.values(this.#country.translations);
        array.map((key)=>{
            this.#answer.add(key.common.toLowerCase())
        })
    }

    checkAnswer(answer){
        if (this.#answer.has(answer.toLowerCase())) {
            return true
        }else{
            return false
        }
    }
    afficheDrapeau(){
        document.querySelector('#flag').innerHTML = `<h1>${this.#flag}</h1>`;
    }
}