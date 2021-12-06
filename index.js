const arr = [];
function writeCards(arr, stuff){
    let ray = [];
    for (let i = 0; i < arr.length; i++) {
        ray[i]= `Thank you, ${arr[i]}, for the wonderful ${stuff} gift!`;
    }
    return ray;
}

function countDown(num){
    let i=0;
    while (i<=num) {
        console.log(i++);
    }
}