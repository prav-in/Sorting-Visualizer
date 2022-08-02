import React, { Component } from 'react'
import './SortingVisualiser.css'
import  {getBubbleSortAnimations} from '../Algorithms/BubbleSort'; 
import { getInsertionSortAniamtions } from '../Algorithms/InsertionSort';
import {getMergeSortAnimations} from '../Algorithms/MergeSort';
import { getQuickSortAnimations } from '../Algorithms/QuickSort';

let c1 = "#ccf381" //normal bar
let c2 = "#d90429" //compared bar
let c3 =  "#d2ccf5"

export default class SortingVisualiser extends Component {

    constructor(props){
    super(props);
      
    this.state = {
        array : [],
        speed : 4,
        arrayBars : 200
    };

    }

  componentDidMount(){
    this.resetArray(this.state.arrayBars);
  }

  resetArray(ab) {
     const array = [];
     for(let i=0;i<ab;i++){
        array.push(randomValue(5,450));
     }
     
     this.setState({array});

     const arrayBars = document.getElementsByClassName('array-bar');

   for(let i=0;i<arrayBars.length;i++)
   arrayBars[i].style.backgroundColor = c1
  
  }

colorAll(l){

  const arrayBars = document.getElementsByClassName('array-bar');

   for(let i=0;i<arrayBars.length;i++){
   
    setTimeout(()=>{
   arrayBars[i].style.backgroundColor = c3
    },l*this.state.speed + i*4)
   }

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
        this.colorAll(animations.length)
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
    this.colorAll(animations.length)
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
    this.colorAll(animations.length)
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

    this.colorAll(animations.length)

}

handleSlideChange=(e)=>{

  let v = e.currentTarget.value;
  let speed = Math.pow(2,7-v);
  let arrayBars = speed===1 ? 1000 : Math.round(1200/(speed+1))

  this.resetArray(arrayBars)
  this.setState({speed,arrayBars},()=>{
    const arrBars = document.getElementsByClassName('array-bar');
  for(let i=0;i<arrBars.length;i++){
  arrBars[i].style.width = `${speed}px`
  arrBars[i].style.margin = speed===1 ? 0 : "0 0.5px"
  }
})
 
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
         <button onClick={()=>this.resetArray(this.state.arrayBars)} className="btn">New Array</button>
         <button onClick={()=>this.mergeSort()} className="btn">Merge Sort</button> 
         <button onClick={()=>this.bubbleSort()} className="btn">Bubble Sort</button>
         <button onClick={()=>this.insertionSort()} className="btn">Insertion Sort </button>
         <button onClick={()=>this.quickSort()} className="btn">Quick Sort </button>
         <input type="range" min="0" max="7" step="1" value={7-Math.round(Math.log2(this.state.speed))} onChange={this.handleSlideChange} className="slider" id="myRange"></input>
        </div>
        </div>
    )
  }
}

// function to generate random value
function randomValue(min,max){
return Math.floor(Math.random()*(max-min+1) + min)
}