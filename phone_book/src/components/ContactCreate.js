import React from 'react';
import PropTypes from 'prop-types';
import './ContactCreate.css';

export default class ContactCreate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: ''
        }; 
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleClick = () => {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };
        this.props.onCreate(contact);
        this.setState({
            name: '',
            phone: ''
        });
        this.refs.createFocus.focus();
    }
    handleKeyPress = (e) => {
        if(e.charCode===13){
            this.handleClick();
        }
    }

    render(){
        return(
            <div>
                <h2>New Phone Number</h2>
                <p>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        ref="createFocus"
                        className="createName"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        className="createPhone"
                    />
                </p>
                <button className="createBtn" onClick={this.handleClick}>Write</button>
            </div>
        )
    }
}

ContactCreate.propTypes = {
    onCreate: PropTypes.func
};
ContactCreate.defaultProps = {
    onCreate: () => { console.error('onCreate not defined'); }
}