export const getInsertionSortAniamtions=(arr)=>{

     let animations = [];

    for(let i=0;i<arr.length;i++){

       let el = arr[i];
       
       let j;

       for(j=i;j>0 && arr[j-1]>el;j--){
       
        animations.push([j,j-1]);
        animations.push([j,j-1]);
        animations.push([j,arr[j-1]]);
       
        arr[j] = arr[j-1];
       }

       animations.push([j,j]);
       animations.push([j,j]);
       animations.push([j,el]);

      arr[j] = el;
                

    }

    return animations;

}