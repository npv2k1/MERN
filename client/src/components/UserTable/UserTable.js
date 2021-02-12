import React, { Component } from "react";
import "./../../lib/bootstrap/bootstrap.css"
import axios from "axios"
const fs = require('fs')
class UserTable extends Component {
    constructor(){
        super();
        this.state={userList:[],loading:true}
    }
    componentDidMount(){
        axios.get('/api/admin/listusers').then(res=>{
            this.setState({userList:res.data})
            console.log(this.state.userList)
            this.setState({loading:false})
        })
    }
    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <th>Full name</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Balance</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>admin</td>
                            <td>10/09/2001</td>
                            <td>male</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        {!this.state.loading ? this.state.userList.map(user => {
                            return (<tr>
                                <td>{user.name}</td>
                                <td>{user.birthday ? new Date(user.birthday).toLocaleDateString():'none'}</td>
                                <td>{user.gender?"Male":"Female"}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                                <td>{user.balance}</td>
                            </tr>)
                        }) : <h1>Loading</h1>}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default UserTable;
