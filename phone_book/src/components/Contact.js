import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';
import './Contact.css';

export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [{
                name: 'AB',
                phone: '010-0000-0001'
            }, {
                name: 'CD',
                phone: '010-0000-0002'
            }, {
                name: 'EF',
                phone: '010-0000-0003'
            }, {
                name: 'GH',
                phone: '010-0000-0004'
            }]
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.handleCreate = this.handleCreate.bind(this);
        // this.handleRemove = this.handleRemove.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillMount(){
        const contactData = localStorage.contactData;
        if(contactData){
            this.setState({
                contactData: JSON.parse(contactData)
            });
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(JSON.stringify(prevState.contactData) !== JSON.stringify(this.state.contactData)){
            localStorage.contactData = JSON.stringify(this.state.contactData);
        }
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    };

    handleClick = (key) => {
        this.setState({
            selectedKey: key
        });
    };
    
    handleCreate = (contact) => {
        this.setState({
            contactData: update(
                this.state.contactData,
                { $push: [contact] }
            )
        });
    }
    handleRemove = () => {
        if(this.state.selectedKey < 0){
            return;
        }
        this.setState({
            contactData: update(
                this.state.contactData,
                { $splice: [[this.state.selectedKey, 1]] }
            ),
            selectedKey: -1
        });
    }
    handleEdit = (name, phone) => {
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                }
            )
        });
    }

    createToggle = () => {
        this.setState(prevState => ({
            isToglleOn: !prevState.isToglleOn
        }));
    }

    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            )
            return data.map((contact, i) => {
                return (<ContactInfo 
                            contact={contact}
                            key={i}
                            onClick={ () => this.handleClick(i)}
                        />);
            });
        };

        return (
            <div>
                <h2>Phone Numbers</h2>
                <input
                    className="search"
                    name="keyword"
                    placeholder="search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div className="search_content">{mapToComponents(this.state.contactData)}</div>
                <ContactDetails 
                    isSelected = {this.state.selectedKey != -1}
                    contact= {this.state.contactData[this.state.selectedKey]}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                />
                <div className="contactCreateBox">
                    <div className="newCreate" onClick={this.createToggle}>Write a new phone number</div>
                    <div>
                        {
                            this.state.isToglleOn ?
                            <ContactCreate onCreate={this.handleCreate} /> :
                            <h2>New Phone Number</h2>
                        }
                    </div>
                    
                    {/* <ContactCreate 
                        onCreate={this.handleCreate}
                    /> */}
                    
                </div>
            </div>
        );
    }
}