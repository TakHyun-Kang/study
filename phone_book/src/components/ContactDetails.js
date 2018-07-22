import React from 'react';
import PropTypes from 'prop-types';
import './ContactDetails.css';

export default class ContactDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        };
    }

    handleToggle = () => {
        if(!this.state.isEdit){
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        } else {
            this.handleEdit();
        }
        this.setState({
            isEdit: !this.state.isEdit
        });
    }
    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleEdit = () => {
        this.props.onEdit(this.state.name, this.state.phone);
    }
    handleKeyPress = (e) => {
        if(e.charCode===13){
            this.handleToggle();
        }
    }

    render(){
        const details = (
            <div className="detailsContent">
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );
        const edit = (
            <div className="detailsEdit">
                <p>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        className="editInput1"
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        className="editInput2"
                    />
                </p>
            </div>
        )
        const view = this.state.isEdit ? edit : details;
        const blank = (<div className="notSelected">Not Selected</div>);
        return (
            <div className="details">
                <h2>Details</h2>
                <div className="details_box">
                    {this.props.isSelected ? view : blank}
                </div>
                <p>
                    <button className="editBtn" onClick={this.handleToggle}>
                        {this.state.isEdit ? 'OK' : 'Edit'}
                    </button>
                    <button className="removeBtn" onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => { console.error('onRemove not defined'); },
    onEdit: () => { console.error('onEdit not defined'); }
};
ContactDetails.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
}