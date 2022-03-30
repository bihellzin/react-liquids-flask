import React, { useState } from "react";
import './style.css'

function Flask ({ setChosenFlask, chosenFlask, setChosenFlaskIndex, chosenFlaskIndex, index, setFlasks, flasks }) {
  const last = getLastColor(flasks[index]);
  const liquids = flasks[index]

  // console.log(liquids);
  // console.log(flasks[index]);
  console.log(last);
  // console.log(emptySpaces);

  function getLastColor(liquids) {
    let color;
    if (!liquids.every(el => el === null)) {
      liquids.forEach(currentColor => {
        if (currentColor && !color) color = currentColor
      })
  
      return color
    }
    return null
  }

  function firstValidElement(array) {
    for (let index = 0; index < array.length; index++) {
      if (array[index]) {
        return  [array[index], index]
      }
    }
    return [null, null]
  }

  function firstEmptySpace(array) {
    if (array[3] === null) {
      return 3
    }
    for (let i = 0; i < array.length - 1; i++) {
      if (!array[i] && array[i + 1]) {
        return i
      }
    }
    return -1
  }

  function transpose(recipientIndex) {
    if (getLastColor(chosenFlask) === last || last === null) {
      console.log("entrou");
      let newFlask1 = chosenFlask
      let newFlask2 = flasks[index]
      let tempLast = last;

      while(newFlask2.some(el => el === null) && newFlask1.some(el => el === tempLast)) {
        const [element, elementIndex] = firstValidElement(newFlask1);
        newFlask1[elementIndex] = null
        const nextSpace = firstEmptySpace(newFlask2)
        newFlask2[nextSpace] = element
        tempLast = element;
      }
      console.log(newFlask1);
      console.log(newFlask2);
    }
    setChosenFlask(null)
    setChosenFlaskIndex(null)
  }

  function handleClick() {
    if (chosenFlask) {
      transpose(index)
    } else {
      setChosenFlask(liquids)
      setChosenFlaskIndex(index)
    }
  }

  return (
    <div className="flask"
    style={{cursor: "pointer"}}
    onClick={handleClick}>
      {flasks[index].map((liquid, index) => {
        return <div key={index} className={`color__${liquid}`}></div>
      })}
    </div>)
}

export default Flask