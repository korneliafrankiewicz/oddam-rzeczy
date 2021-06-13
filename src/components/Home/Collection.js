import React, { useState } from 'react';
import {collections} from "./collectionList";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    ulList: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px"
       
    },
    liElements: {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid gray",
        alignItems: "center",
        width: "1000px",
        height: "80px"
    
    },
    liElement: {
        justifyContent: "space-between",
        
    },
    liElementDesc: {
        fontStyle: "italic",
    },
    numbers: {
        listStyle: "none",
        fontSize: "1.4em",
        display: "flex",
        justifyContent: "center",

        "& li": {
            padding: "15px",
            border: "1px transparent grey",
            margin: "15px 10px",

            "&:hover": {
                cursor: "pointer",
                border: "1px solid grey",
            },
        }
       
    },


  }));

const Collection = () => {
    const classes = useStyles()

    const [currentPage, setCurrentPage] = useState(1)
    const [elementsPerPage, setElementsPerPage] = useState(3);

    const pageNumbers = [];
    for(let i =1; i <= Math.ceil(collections.length/elementsPerPage); i++){
        const element = <li onClick={e => handleClick(e, i)} key={i}>{i}</li>
        pageNumbers.push(element)
    }

    const indexOfLast = currentPage * elementsPerPage;
    const indexOfFirst = indexOfLast - elementsPerPage;

    const currentElements = collections.slice(indexOfFirst, indexOfLast)

    const handleClick = (e, i) => {
        setCurrentPage(i)
    }
    return ( 
        <div>
            <ul className={classes.ulList} >{currentElements.map((collection, index) => {
               return <li key={index}>
               <div className={classes.liElements}>
                   <div className={classes.liElement}>
                    <Typography variant="h5">
                    <p >{collection.title}</p>
                    </Typography>
                    <p className={classes.liElementDesc}>{collection.description}</p>
                   </div>
                 
                   <p className={classes.liElement}>{collection.items}</p>
               </div>
               </li>
            })}</ul>

            <ul className={classes.numbers}>
            {pageNumbers}
            </ul>
        </div>
     );
}
 
export default Collection;