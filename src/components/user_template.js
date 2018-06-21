import React from 'react';
import PropTypes from 'prop-types'

const UserTemplate = (props) => {

    return (
      <div>
        Template
      </div>
    );

};

UserTemplate.propTypes = {
  name:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(['Rob','Jane'])
  ]),
  lastname: PropTypes.string,
  age: PropTypes.number,
  hobbies:PropTypes.array,
  spanish: PropTypes.bool,
  message: PropTypes.func,
  mother:function(props, propName, componentName){
    if(props[propName] !=="Jane"){
      return new Error(`The name ${props[propName]} is not correct`)
    }
  }
  
}

export default UserTemplate;
