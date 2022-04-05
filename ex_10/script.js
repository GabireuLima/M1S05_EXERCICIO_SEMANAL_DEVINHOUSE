let sleep = (valor) => {
    return new Promise((resolve, reject) => {
        (valor % 2 == 0) ?
            setTimeout(() => resolve(console.log(('Deu bom !!'))), 3000)
            :
            setTimeout(() => reject(console.log(('DEU RUIM !!'), )),3000);
            
    })
}

sleep(4)
