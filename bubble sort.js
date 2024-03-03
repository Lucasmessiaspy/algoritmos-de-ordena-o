let valores=[5,2,1,7,3,5];
let aux;
for(let i =0;i<valores.length;i++){
    for(let j =i+1;j<valores.length;i++){
        if(valores[i]>valores[j]){
            aux=valores[i];
            valores[i]=valores[j];
            valores[j]=aux;
        }
    }
}
console.log("Lista ordenada");
for(i=0;i<valores.length;i++){
    console.log(`${valores[i]}\n`);
}