import React, {Component} from 'react';
import Stars from "react-stars";

// ReviewList: a container inside of a Movie that houses Review components.

export default class Reviewlist extends React.Component {

   render() {
      return (
       <div className='card bg-dark'>
          <div className='card-body'>
             <p>"{this.props.review}"
             </p>
             <Stars
                className='d-flex justify-content-center'
                count={5}
                value={this.props.stars}
                size={40}
                color2={'#ff9100'}
                edit={false}
                half={true}
             />
            
          </div>
       </div>
      )
  }
}