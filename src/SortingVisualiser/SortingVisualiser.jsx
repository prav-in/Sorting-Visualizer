import React, { Component } from 'react'
import './SortingVisualiser.css'
import  {getBubbleSortAnimations} from '../Algorithms/BubbleSort'; 
import { getInsertionSortAniamtions } from '../Algorithms/InsertionSort';
import {getMergeSortAnimations} from '../Algorithms/MergeSort';
import { getQuickSortAnimations } from '../Algorithms/QuickSort';
import ButtonContainer from "../Components/ButtonContainer"
import ArrayContainer from '../Components/ArrayContainer'
import Slider from '../Components/Slider';

let c1 = "#ccf381" //normal bar
let c2 = "#d90429" //compared bar
let c3 =  "#d2ccf5" //afer sorting

let funs = ["resetArray","mergeSort","quickSort", "bubbleSort", "insertionSort", "stopAnimation"]
let propsObj = {}

export default class SortingVisualiser extends Component {

    constructor(props){
    super(props);
      
    this.state = {
        array : [],
        speed : 4,
        arrayBars : 240,
        btnDisabled : false
    };

    for(let i=0;i<funs.length;i++){
    this[funs[i]] = this[funs[i]].bind(this)
     propsObj[funs[i]]  = this[funs[i]]
    }
     
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

   setTimeout(()=>{
    this.setState({btnDisabled : false})
    },l*this.state.speed+arrayBars.length*4)

}

bubbleSort(){

    this.setState({btnDisabled : true})

    const animations = getBubbleSortAnimations([...this.state.array]);

console.log(animations)

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

    this.setState({btnDisabled : true})

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

  this.setState({btnDisabled : true})
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

  this.setState({btnDisabled : true})

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

stopAnimation(){

  const highestId = window.setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      window.clearInterval(i);
    }
  }, 0);

  this.setState({btnDisabled : false})
  this.resetArray(this.state.arrayBars)
}
   
  render() {

    return (
         <div className='sorting-visualiser'>  
        <ArrayContainer array={this.state.array}/> 
        <ButtonContainer arrayBars={this.state.arrayBars} btnDisabled={this.state.btnDisabled} {...propsObj}/>
        <Slider btnDisabled={this.state.btnDisabled} speed={this.state.speed}
                handleSlideChange={this.handleSlideChange} />
         </div>
    )
  }
}

// function to generate random value
function randomValue(min,max){
return Math.floor(Math.random()*(max-min+1) + min)
}