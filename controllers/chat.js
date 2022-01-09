const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static('data'));



class Chat {
    constructor(){
        this.Chat = [];
    }

    save(obj){
        console.log(obj)
        let data = fs.readFileSync(dataPath, 'utf-8')

        if(data.length <= 2){
            this.Chat = obj;
            
            fs.writeFileSync(dataPath,JSON.stringify(this.Chat))
             
             return this.Chat;
        }else if(data.length > 2){
            
            let objParse = JSON.parse(data);

            let newProd = {...obj}
            objParse.push(newProd);


            fs.writeFileSync(dataPath,JSON.stringify(objParse))

            return objParse;

        }


    }

    
}

const chatConstructor = new Chat();
module.exports = chatConstructor;