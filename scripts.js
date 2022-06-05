'use strict'

window.addEventListener('load', ()=>{

    const encryptInput = document.querySelector('#encrypt-input')
    const encryptBtn = document.querySelector('#encrypt-btn')
    const encryptionArea = document.querySelector('.encryption-area')
    const sClick = document.querySelector('.s-click')



    // estas son las keys que accionan el script
    const correctKeys= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Backspace', ' ', ".", ",", ":", ";", "?", "(", ")", "'", "'", "/", ">", "<", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
    


    // y este array es con el que se hace el encriptado
    const lettersList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']



    const encryptLetter = (index, letter)=>{

        console.log(index, letter)

        if(letter== ' '){

            return '-'

        }else if(index > 28){
            
            return letter

        }else{
            
            let newPosition = index + 3
    
            if(newPosition > 26){
                newPosition = newPosition - 27
            }
            
            // console.log(`N: ${newPosition}`, `N: ${lettersList[newPosition]}`)
    
            return lettersList[newPosition]
            
        }

    }
    
    

    const createEncryptedElement= (index, letter)=>{

        // console.log(letter)

        if(letter == 'Backspace'){

            if(document.querySelectorAll('.letter').length > 0){

                let spanIndex = encryptionArea.children.length - 2
    
                let lastSpan = encryptionArea.children[spanIndex] 
                
                encryptionArea.removeChild(lastSpan)

            }

        }else {

            // console.log(`I: ${index}`, `L: ${letter}`)

            const span = document.createElement('SPAN')
        
            span.classList.add('letter')
    
            let encryptedLetter = encryptLetter(index, letter)
            
            span.textContent = encryptedLetter
            
            encryptionArea.insertBefore( span, sClick)

        }

        
    }
    
    
    encryptInput.addEventListener('keydown', (event)=>{
        
        let letter = event.key

        correctKeys.forEach( (cKey, index) =>{
            if(letter == cKey) createEncryptedElement(index, letter)
        })

    })
    

    const animacionDeInicio = ()=>{
        
        let message = 'encriptador cesar'

        message = Array.from(message)

        let i = 0

        let interval = setInterval(()=>{

            let index = correctKeys.indexOf(message[i])
            
            console.log(index, message[i])

            
            encryptInput.value += message[i]
            createEncryptedElement(index, message[i])


            
            

            i++
            if( i >= message.length) clearInterval(interval)
            
        },200)
        

    }
    
    animacionDeInicio()
})