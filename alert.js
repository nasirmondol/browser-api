console.log('I am here.')
// alert("sir is coming")

const sirCOming = () =>{
    alert('Be careful, sir is coming!!')
}

const askPicnic =() =>{
    const response = confirm('Are you going to picnic?')
    console.log(response)
    if(response === true){
        alert('amke taka bkash kore de')
    }
    else{
        console.log('dure giye morga!!')
    }
}

const yourName = () =>{
    const name = prompt('what is your name?')
    if(name){
        console.log(name)
    }
}

// alert = user k kono kicu janiye dewar jonno amra alert use korbo
// confirm = user theke kono kicu janar jonno amra qus kirle user je ans dibe sei onujayi kicu dicision nile setai hobe confirm.
// porompt = user k kono information jodi nite cai tahole amra prompt use kotbo. 