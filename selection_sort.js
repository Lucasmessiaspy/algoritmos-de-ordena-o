let numero = [1,3,4,2,99,1,5,2];
let i;
let j;
let menor;
let auxiliar;

for(i=0;i<numero.length;i++){
    menor = i;
    for(j=i+1;j<numero.length;j++){
        if(numero[j]<numero[menor]){
            menor=j;
        }
    }
    auxiliar = numero[menor];
    numero[menor] = numero[i];
    numero[i]=auxiliar;
}
    console.log("Valor ordernado")
for(i=0;i<numero.length;i++){
    console.log(`${numero[i]}\n`);
}