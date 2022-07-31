export const getMergeSortAnimations=(arr)=>{

    let animations =[];
    let array =[];

    for(let i=0;i<arr.length;i++)
    array.push(arr[i])

 mergeSort(array,0,arr.length-1,animations);

 return animations
}

const mergeSort = (arr,s,e,anim)=>{
 
let nums = [];

    if(e-s<1){
    nums.push(arr[e]);
    return nums;
    }

let mid = Math.floor((s+e)/2);

 let a =mergeSort(arr,s,mid,anim);
 let b =mergeSort(arr,mid+1,e,anim);

let i=0;
let j=0;
let c=0;

while( i<a.length && j<b.length){

    anim.push([s+i,mid+1+j])
    anim.push([s+i,mid+1+j])

    if(a[i]<b[j]){ 
      nums.push(a[i++])
      anim.push([c+s,-1])
      c++
      continue;
    }

     nums.push(b[j++])
     anim.push([c+s,-1])
     c++
    }

if(i>=a.length){

    while(j<b.length){
    nums.push(b[j++])
     c++
    }
     
   for(let k=0;k<nums.length;k++){
    anim.push([k+s,k+s])
    anim.push([k+s,k+s])
    anim.push([k+s,nums[k]])
   }

    return nums; 
}

while(i<a.length){
nums.push(a[i++])
}

for(let k=0;k<nums.length;k++){
    anim.push([k+s,k+s])
    anim.push([k+s,k+s])
    anim.push([k+s,nums[k]])
   }
return nums;

}