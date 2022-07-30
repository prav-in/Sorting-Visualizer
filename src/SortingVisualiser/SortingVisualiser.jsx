import React, { Component } from 'react'
import './SortingVisualiser.css'
import  {getBubbleSortAnimations} from '../Algorithms/BubbleSort'; 
import { getInsertionSortAniamtions } from '../Algorithms/InsertionSort';
import {getMergeSortAnimations} from '../Algorithms/MergeSort';

let SPEED = 20;
let ARRAY_BARS = 170;

export default class SortingVisualiser extends Component {

    constructor(props){
    super(props);
      
    this.state = {
        array : [],
    };
    }

  componentDidMount(){
    this.resetArray();
  }



  resetArray() {

     const array = [];
     for(let i=0;i<ARRAY_BARS;i++){
        array.push(randomValue(5,650));
     }

     this.setState({array});
  }

  insertionSort(){

   console.log(this.state.array)

   let animations = getInsertionSortAniamtions(this.state.array)
   
    console.log(animations)

   for(let i=0;i<animations.length;i++){
        
    const arrayBars = document.getElementsByClassName('array-bar');  
    const isColorChange = i%3!==2;
    
    if(isColorChange){
    
        const [barOneInd,barTwoInd] = animations[i];
        const barOneStyle = arrayBars[barOneInd].style;
        const barTwoStyle = arrayBars[barTwoInd].style;
        const color = i%3===0 ? 'red' : 'blue';
        
        setTimeout(()=>{
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color; 
        },i*SPEED)
        }else{ 
            setTimeout(()=>{

                const [barOneInd,newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneInd].style;

                barOneStyle.height = `${newHeight}px`

            },i*SPEED)

        }

    }
   
}

mergeSort(){

  const animations = getMergeSortAnimations(this.state.array)


  for(let i=0;i<animations.length;i++){
        
    const arrayBars = document.getElementsByClassName('array-bar');  
    const isColorChange = i%3!==2;
    
    if(isColorChange){
    
        const [barOneInd,barTwoInd] = animations[i];
        const barOneStyle = arrayBars[barOneInd].style;
        const barTwoStyle = arrayBars[barTwoInd].style;
        const color = i%3===0 ? 'red' : 'blue';
        
        setTimeout(()=>{
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color; 
        },i*SPEED)
        }else{ 
            setTimeout(()=>{
                const [barOneInd,newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneInd].style;

                barOneStyle.height = `${newHeight}px`

            },i*SPEED)

        }

    }

}

  bubbleSort(){
    
    const animations = getBubbleSortAnimations(this.state.array);

    for(let i=0;i<animations.length;i++){
        
        const arrayBars = document.getElementsByClassName('array-bar');  
        const isColorChange = i%3!==2;
        
        if(isColorChange){
        
            const [barOneInd,barTwoInd] = animations[i];
            const barOneStyle = arrayBars[barOneInd].style;
            const barTwoStyle = arrayBars[barTwoInd].style;
            const color = i%3===0 ? 'red' : 'blue';
            
            setTimeout(()=>{
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color; 
            },i*SPEED)
            }else{ 
                setTimeout(()=>{

                    const [barOneInd,barTwoInd] = animations[i];
                    const barOneStyle = arrayBars[barOneInd].style;
                    const barTwoStyle = arrayBars[barTwoInd].style;

                    const temp = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = temp; 

                },i*SPEED)

            }

        }

}


  render() {

    const {array} = this.state;

    return (
         <div className='array-container'>
        {array.map((val,ind)=>(
           
            <div className="array-bar" 
            key={ind}
            style={{height: `${val}px`}}>
            </div>  
        ))}
         <button onClick={()=>this.resetArray()}>New Array</button>
         <button onClick={()=>this.mergeSort()}>Merge Sort</button> 
         <button onClick={()=>this.bubbleSort()}>Bubble Sort</button>
         <button onClick={()=>this.insertionSort()}>Insertion Sort </button>
        </div>
    )
  }
}

// function to generate random value
function randomValue(min,max){
return Math.floor(Math.random()*(max-min+1) + min)
}