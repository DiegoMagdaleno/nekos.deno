class MiscInteractions{
    private apiURL: string = 'https://nekos.life/api/v2'

    async owoify(text: string){
        if (text == null) {
            throw new Error("No string to owoify was provided!")
        }
        
        let processedText = encodeURI(text)
        let request = await fetch(`${this.apiURL}/owoify?text=${processedText}`)
        return request.json()
    }

    async eightBall(){
        let request = await fetch(`${this.apiURL}/8ball`)
        return request.json()
    }

    async textCat(){
        let request = await fetch(`${this.apiURL}/cat`)
        return request.json()
    }

    async why(){
        let request = await fetch(`${this.apiURL}/why`)
        return request.json()
    }

    async fact(){
        let request = await fetch(`${this.apiURL}/fact`)
        return request.json()
    }
}