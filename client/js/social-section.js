import React from 'react';
import SocialSectionElement from './social-section-element';

class SocialSection extends React.Component {
  render() {
    return (
      <span>
        <ul className="section--social">
          {this.props.social.map( (social, idx) => {
            return (
              <li className="socialWrapper" key={idx} >
                <SocialSectionElement social={social}  />
              </li>
            )
          })}
        </ul>
      </span>
    )
  }
}

export default SocialSection;
