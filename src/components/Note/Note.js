import React, { Component } from 'react';
import './Note.css';


class Note extends Component {
    

    render() {
       var style = {backgroundColor: this.props.color}
        return(
               <div className="note" style={style}>
               {this.props.children}
               </div>
               
           
        );
    }
}
export default Note