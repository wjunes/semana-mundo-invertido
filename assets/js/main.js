
import { subscribeToHellfireClub } from '/firebase/hellfire-clube.js'

    const txtName = document.getElementById('txtName')
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')

    const btnSubscribe = document.getElementById('btnSubscribe')

    btnSubscribe.addEventListener('click', () => {
        const subscription = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

//Salva en banco de edatos
    const subscriptionId = subscribeToHellfireClub(subscription)
     alert ('inscripto satisfactoriamente: ${subscriptionId}')
    })
