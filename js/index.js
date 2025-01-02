

const button = document.querySelector('.btn')

button.addEventListener('click', () =>{

    const input1 = document.querySelector('.input1').value
    const input2 = document.querySelector('.input2').value
    const msg = document.querySelector('.error')

    if(input1 == 'mailo' && input2 == '123'){

        window.location='welcome.html'

    }else{

        msg.classList.add('error2')
        
    }
   

})


