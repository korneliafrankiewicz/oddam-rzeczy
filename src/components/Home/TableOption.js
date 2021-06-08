import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  table: {
    display: "flex",
    justifyContent: "center",
    maxWidth:"800px",
    top: "2800px"
  },
});

const TableOption = () => {
  const classes = useStyles()
  return ( 
    <div className={classes.table}>
dopa
    </div>
   );
}
 
export default TableOption;