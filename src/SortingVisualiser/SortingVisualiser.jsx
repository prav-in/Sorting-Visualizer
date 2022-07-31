import React, { Component } from 'react'
import './SortingVisualiser.css'
import  {getBubbleSortAnimations} from '../Algorithms/BubbleSort'; 
import { getInsertionSortAniamtions } from '../Algorithms/InsertionSort';
import {getMergeSortAnimations} from '../Algorithms/MergeSort';
import { getQuickSortAnimations } from '../Algorithms/QuickSort';

let ARRAY_BARS = 300;
let c1 = "#ccf381"
let c2 = "#ff01fb"

export default class SortingVisualiser extends Component {

    constructor(props){
    super(props);
      
    this.state = {
        array : [],
        speed : 50
    };

    }

  componentDidMount(){
    this.resetArray();
  }

  resetArray() {
     const array = [];
     for(let i=0;i<ARRAY_BARS;i++){
        array.push(randomValue(5,450));
     }
     this.setState({array});
  }


  bubbleSort(){
    
    const animations = getBubbleSortAnimations([...this.state.array]);

    for(let i=0;i<animations.length;i++){
        
        const arrayBars = document.getElementsByClassName('array-bar');  
        const isColorChange = i%3!==2;
        
        if(isColorChange){
        
            const [barOneInd,barTwoInd] = animations[i];
            const barOneStyle = arrayBars[barOneInd].style;
            const barTwoStyle = arrayBars[barTwoInd].style;
            const color = i%3===0 ? c2 : c1;
            
            setTimeout(()=>{
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color; 
            },i*(this.state.speed))
            }else{ 
                setTimeout(()=>{

                    const [barOneInd,barTwoInd] = animations[i];
                    const barOneStyle = arrayBars[barOneInd].style;
                    const barTwoStyle = arrayBars[barTwoInd].style;

                    const temp = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = temp; 

                },i*(this.state.speed))

            }

        }

}

  insertionSort(){

   let animations = getInsertionSortAniamtions([...this.state.array])

   for(let i=0;i<animations.length;i++){
        
    const arrayBars = document.getElementsByClassName('array-bar');  
    const isColorChange = i%3!==2;
    
    if(isColorChange){
    
        const [barOneInd,barTwoInd] = animations[i];
        const barOneStyle = arrayBars[barOneInd].style;
        const barTwoStyle = arrayBars[barTwoInd].style;
        const color = i%3===0 ? c2 : c1;
        
        setTimeout(()=>{
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color; 
        },i*(this.state.speed))
        }else{ 
            setTimeout(()=>{

                const [barOneInd,newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneInd].style;

                barOneStyle.height = `${newHeight}px`

            },i*(this.state.speed))

        }

    }
   
}

mergeSort(){

  const animations = getMergeSortAnimations([...this.state.array])

  for(let i=0;i<animations.length;i++){
        
    const arrayBars = document.getElementsByClassName('array-bar');  
    const isColorChange = i%3!==2;
    
    if(isColorChange){
    
        const [barOneInd,barTwoInd] = animations[i];
        const barOneStyle = arrayBars[barOneInd].style;
        const barTwoStyle = arrayBars[barTwoInd].style;
        const color = i%3===0 ? c2 : c1;
        
        setTimeout(()=>{
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color; 
        },i*(this.state.speed))
        }else{ 
            setTimeout(()=>{
                const [barOneInd,newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneInd].style;

                  if(newHeight!==-1){
                barOneStyle.height = `${newHeight}px`
                 }
            },i*(this.state.speed))

        }

    }

}

quickSort(){

  const animations = getQuickSortAnimations([...this.state.array])

  for(let i=0;i<animations.length;i++){
        
    const arrayBars = document.getElementsByClassName('array-bar');  
    const isColorChange = i%3!==2;
    
    if(isColorChange){
    
        const [barOneInd,barTwoInd] = animations[i];
        const barOneStyle = arrayBars[barOneInd].style;
        const barTwoStyle = arrayBars[barTwoInd].style;
        const color = i%3===0 ? c2 : c1;
        
        setTimeout(()=>{
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color; 
        },i*(this.state.speed))
        }else{ 
            setTimeout(()=>{
                const [barOneInd,newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneInd].style;

                  if(newHeight!==-1){
                barOneStyle.height = `${newHeight}px`
                 }
            },i*(this.state.speed))

        }

    }

}

handleSlideChange=(e)=>{

  let speed = e.currentTarget.value;
   this.setState({speed})

}

   
  render() {

    const {array} = this.state;

    return (
         <div className='array-container'>
        
        <div className="array-bars">
        {array.map((val,ind)=>(
           
            <div className="array-bar" 
            key={ind}
            style={{height: `${val}px`}}>
            </div>  
        ))}
       </div>
        <div className="btn-container">
         <button onClick={()=>this.resetArray()} className="btn">New Array</button>
         <button onClick={()=>this.mergeSort()} className="btn">Merge Sort</button> 
         <button onClick={()=>this.bubbleSort()} className="btn">Bubble Sort</button>
         <button onClick={()=>this.insertionSort()} className="btn">Insertion Sort </button>
         <button onClick={()=>this.quickSort()} className="btn">Quick Sort </button>
         <input type="range" min="1" max="100" step="1" value={this.state.speed} onChange={this.handleSlideChange} className="slider" id="myRange"></input>
        </div>
        </div>
    )
  }
}

// function to generate random value
function randomValue(min,max){
return Math.floor(Math.random()*(max-min+1) + min)
}