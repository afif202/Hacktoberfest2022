function isPassword(password){
    return new Promise((resolve,reject) => {
        console.log('Password:',password)
        if(password === '123456'){
            return resolve('password mu bener')
        }else{
            return reject('password mu salah')
        }
    })
}

//async cara
async function password(){
    let result = await isPassword('123256')
    console.log(result)
}
password()
