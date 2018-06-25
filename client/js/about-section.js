import React from 'react';

class AboutSection extends React.Component {
  render() {
    return (
      <span>
        {this.props.about.map( (about, idx) => {
          return (
            <p key={idx} className="color--darkgrey section__description"> 
             {about} </p>
          )
        })}
      </span>
    )
  }
}

export default AboutSection;
