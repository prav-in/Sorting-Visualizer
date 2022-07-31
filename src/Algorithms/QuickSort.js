export const getQuickSortAnimations=(arr)=>{

    let anim = [];
  quickSort(arr,0,arr.length,anim)

return anim
}


const quickSort =(arr,s,e,anim)=>{

if(e-s<2)
return

let piviot = getPiviot(arr,s,e,anim);
quickSort(arr,s,piviot,anim)
quickSort(arr,piviot+1,e,anim)

}

const getPiviot=(arr,s,e,anim)=>{

let i=s
let j=e
let piviot = arr[i]

while(i<j){

while(i<j && arr[--j]>=piviot){
  anim.push([i,j])
  anim.push([i,j])
  anim.push([j,-1])
}
if(i<j){    
arr[i] = arr[j] 
anim.push([i,j])
anim.push([i,j])
anim.push([i,arr[j]])
}

while(i<j && arr[++i]<=piviot){
    anim.push([i,j])
    anim.push([i,j])
    anim.push([i,-1])
}
if(i<j){
arr[j] = arr[i] 
anim.push([i,j])
anim.push([i,j])
anim.push([j,arr[i]])
}
}

arr[j] = piviot
anim.push([i,j])
anim.push([i,j])
anim.push([j,piviot])
return j

}