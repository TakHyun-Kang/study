import React from 'react';
import './ContactInfo.css';

export default class ContactInfo extends React.Component{
    render(){
        return(
            <div className="contactInfo" onClick={this.props.onClick}>
                {this.props.contact.name}
            </div>
        );
    }
}