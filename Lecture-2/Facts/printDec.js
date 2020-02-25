function printInc(num){
    if(num==0) return;

    printInc(num-1);
    console.log(num);
}

printInc(5);