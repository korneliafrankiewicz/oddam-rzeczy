import React, { useState } from 'react';
import {fundations} from "./fundationList"
const Fundation = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [elementsPerPage, setElementsPerPage] = useState(3);

    const pageNumbers = [];
    for(let i =1; i <= Math.ceil(fundations.length/elementsPerPage); i++){
        const element = <li onClick={e => handleClick(e, i)} key={i}>{i}</li>
        pageNumbers.push(element)
    }

    const indexOfLast = currentPage * elementsPerPage;
    const indexOfFirst = indexOfLast - elementsPerPage;

    const currentElements = fundations.slice(indexOfFirst, indexOfLast)

    const handleClick = (e, i) => {
        setCurrentPage(i)
    }

    return ( 
        <div>
            <ul>{currentElements.map((fundation, index) => {
               return <li key={index}>
               <div>
                   <p>{fundation.title}</p>
                   <p>{fundation.description}</p>
                   <p>{fundation.items}</p>
               </div>
               </li>
            })}</ul>
            {pageNumbers}
        </div>
  
     );
}
 
export default Fundation;