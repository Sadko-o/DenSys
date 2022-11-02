import React, { Component } from 'react'
import { FaBeer, FaPen, FaPencilAlt, FaSearch, FaTrash } from 'react-icons/fa';
import UserButtons from './UserButtons';

export default class User extends Component {
  render() {
    return (
        <div className="w-8/12 mx-auto border-b border-slate-300 bg-slate-600 group/item ">
            <div className="p-4 flex flex-1 items-center justify-center  sm:items-stretch sm:justify-between">
                <div className="profileInfo flex flex-1">
                    <div className="image">
                        <img className="object-cover h-20 w-20 p-2 rounded-full" src={this.props.img} alt="" />
                    </div>
                    <div className="info mx-4 my-4 space-y-1">
                        <p className="text-sm font-medium text-slate-900" >{this.props.name}</p>
                        <p className="text-sm text-slate-500 truncate">{this.props.email}</p>
                    </div>
                </div>
                <div className="justify-between space-y-1">
                    <UserButtons className="deleteButton" name="Delete" mod="delete"/>
                    <UserButtons className="editButton" name="Edit" mod="edit"/>
                </div>
            </div>
      </div>
    )
  }
}
