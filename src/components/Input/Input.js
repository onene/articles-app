import React, { Component } from 'react';


class Input extends Component {
    render() {
        const {onChange, onClick} = this.props;
        return(
        <div className="input">
              <textarea onChange={onChange} rows={5} className="text" placeholder="Enter your message"></textarea>
             <button onClick={onClick} className="btn">ADD</button>
        </div>
          
        );
    }
}
export default Input