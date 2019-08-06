import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>

        <td>{props.todo.name}</td>
        <td>{props.todo.description}</td>
        <td>{props.todo.contact}</td>
        <td>
            <Link to={"/edit-tutor/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = { tutors: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/v1/tutor')
            .then(res => {
                alert(JSON.stringify(res.data))
                this.setState({
                    tutors: res.data
                })

            })
    }

    todoList() {
        return this.state.tutors.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}