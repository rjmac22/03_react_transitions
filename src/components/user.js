import React, { Component } from 'react';
import UserTemplate from './user_template';


class User extends Component {

  state = {
    name:21,
    lastname:'Maclean',
    age:35,
    hobbies:['run', 'jump'],
    spanish:false,
    message(){console.log('hey')},
    mother:'Jane',
    color:'red'
  }

  changeColor(){



    this.refs.myColor.style.color = 'blue'
  }



  render() {
    const style = {
      color: this.state.color

    }

    return (

      <div>
        <h4 style={style} ref="myColor">{this.state.mother}</h4>
        <div onClick={()=>this.changeColor()}>Change Colour</div>
        <UserTemplate {...this.state}/>
      </div>
    );
  }
}

export default User;
