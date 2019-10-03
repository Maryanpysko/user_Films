let a=10
let x;
function sWitch(a,x){
    switch(a){
        case 0:
            x=31;
            break;
          case 1:
            x=28;
            break;
          case 2:
            x=31;
            break;
          case 3:
            x=30;
            break;
          case 4:
            x=31;
            break;
          case 5:
            x=30;
            break;
          case 6:
            x=31;
            break;
          case 7:
            x=31;
            break;
          case 8:
            x=30;
            break;
          case 9:
            x=31;
            break;
          case 10:
            x=30;
            break;
    }
    return x
}
arr = [5, 3, 7, 9, 1, 5, 0, 5]
let min;
for (let i = 0; i < arr.length; i++){
    if(arr[i]>arr[i+1]){
        min=arr[i]
    }
}
    console.log(min)