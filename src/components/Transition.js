import React, { Component } from 'react';
import Tranistion from 'react-transition-group/Transition';

import '../css/App.css';

class TransitionComp extends Component{

    state = {
        show: false
    }

    showDiv = () => {
        this.setState({
            show:!this.state.show? true : false
        })
    }

    render(){
        return(
            <div>
                <Tranistion
                  in={this.state.show}
                  timeout={{
                      enter:5000,
                      exit:500
                      }}

                  onEnter={ (node) =>{
                      console.log('exited')
                  }}
                >
                  { state => 
                    <div className={`square square-${state}`}>
                      {`square square-${state}` }  
                    </div> 
                  }

                </Tranistion>
  
                <div className="showDiv"
                    onClick={this.showDiv}>
                Show Or Hide

                </div>


            </div>
            

        )
    }
}


export default TransitionComp;