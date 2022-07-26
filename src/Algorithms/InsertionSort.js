export const getInsertionSortAniamtions=(arr)=>{

    for(let i=0;i<arr.length;i++){

       let el = arr[i];
       
       let j;

       for(j=i;j>0 && arr[j-1]>el;j--)
       arr[j] = arr[j-1];

      arr[j] = el;
    }

    return arr;

}