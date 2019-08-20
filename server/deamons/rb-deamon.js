
import axios from 'axios'

//Tst links
const links = ['https://google.com', 'https://www.googlessa.com/', 'https://www.googless.com/']


export const startProcess = async () =>{

   for (let  i= 0; i< links.length; i++){
    console.log(links[i])
   await createThread(links[i])

   }
}

const createThread = async (link) =>{

     let count = 0
     const thread = setInterval(() => {
        axios.get(link).then(res=>{
                console.log(res.status, link)
                count = 0
        }).catch(err=> {console.log(err.code, link); clearInterval(thread)})
        count++
        if(count>10){
            console.log(link, 'is canceled')
            clearInterval(thread)
        }
    }, 5000);
}