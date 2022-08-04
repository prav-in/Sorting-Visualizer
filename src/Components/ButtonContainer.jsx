import React from 'react'
import './css/ButtonContainer.css'


const ButtonContainer = ({resetArray,mergeSort,bubbleSort,insertionSort,quickSort,stopAnimation,arrayBars,btnDisabled}) => {
  return (
    <div className="btn-container">
         <button disabled={btnDisabled} onClick={()=>resetArray(arrayBars)} className="btn">New Array</button>
         <button disabled={btnDisabled} onClick={()=>mergeSort()} className="btn">Merge Sort</button> 
         <button disabled={btnDisabled} onClick={()=>bubbleSort()} className="btn">Bubble Sort</button>
         <button disabled={btnDisabled} onClick={()=>insertionSort()} className="btn">Insertion Sort </button>
         <button disabled={btnDisabled} onClick={()=>quickSort()} className="btn">Quick Sort </button>
         <button disabled={!btnDisabled} onClick={()=>stopAnimation()} className="btn">Stop</button>
        </div>
  )
}

export default ButtonContainer