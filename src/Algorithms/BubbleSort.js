export const getBubbleSortAnimations = (arr)=>{

    const animations = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){   
            
             const comp = [j,j+1]

            if(arr[j]>arr[j+1]){
                                                
                animations.push(comp)
                animations.push(comp)
                animations.push(comp)

               swap(arr,j,j+1);
            }else{

                const swap = [j,j];

                animations.push(comp)
                animations.push(comp)
                animations.push(swap)
            }
        }
    }

    return animations;
}

const swap = (arr,i,j)=>{
    let temp =  arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}