import React from 'react';

class SocialSectionElement extends React.Component {
  render() {
    let social = this.props.social;
      return (
        <a className="color--skyBlue social"
           title={ social.title }
           target="_blank"
           href={ social.href }>
             <i className={ social.icon }></i>
        </a>
      )
  }
}

export default SocialSectionElement;
