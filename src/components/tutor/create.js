import React, { Component } from 'react';
import axios from 'axios';
export default class Create extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tutor_name:'',

            tutor_description: '',
            tutor_contact:'',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            tutor_description: e.target.value
        });
    }
    _handleName=(e)=>{
        this.setState({
            tutor_name:e.target.value
        })
    }
    _handleContact=(e)=>{
        this.setState({
            tutor_contact:e.target.value
        })
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        

        const newTodo = {
            tutor_description: this.state.tutor_description,
            tutor_contact: this.state.tutor_contact,
            tutor_name: this.state.tutor_name,
            // todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/api/v1/tutor', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            tutor_description: '',
            tutor_contact: '',
            tutor_name: '',
            
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add information</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.tutor_name}
                                onChange={this._handleName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Contact: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tutor_contact}
                                onChange={this._handleContact}
                                />
                    </div>
           
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.tutor_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}