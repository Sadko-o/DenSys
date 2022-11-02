import React, { Component, useState } from 'react'
import UserButtons from './UserButtons';


export default class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visibility : false,
      }
    }
    
  render() {
    const userInfo = this.props.user;
    var detailedInfo = [<>
        <p>middleName : {userInfo?.middlename}</p>
        <p>IIN : {userInfo.IIN}</p>
        <p>ID : {userInfo.ID}</p>
        <p>Date of Birth : {userInfo.dateOfBirth}</p>
        <p>Contact Number : {userInfo.contactNumber}</p>
        <p>Role: {userInfo.role}</p>
        <p>Address: {userInfo.address}</p>
    </>];
    
    switch (userInfo.role) {
        case 'patient':
            detailedInfo.push(<>
                <p>Blood Group: {userInfo.bloodGroup}</p>
                <p>Emergency Number: {userInfo.emergencyNumber}</p>
                <p>Martial Status: {userInfo.martialStatus}</p>
                <p>Registration Date: {userInfo.registrationDate}</p>
            </>);    
            break;
        case 'doctor':
            detailedInfo.push(<>
                <p>Department ID: {userInfo.departmentID}</p>
                <p>Specialization Details ID : {userInfo.specializationDetailsID}</p>
                <p>Experience in Years: {userInfo.experienceInYears}</p>
                <p>Category: {userInfo.category}</p>
                <p>Appointment Price: {userInfo.appointmentPrice}</p>
                <p>Schedule Details: {userInfo.scheduleDetails}</p>
                <p>Degree: {userInfo.degree}</p>
                <p>Rating: {userInfo.rating}</p>
            </>);
            break;
        default:
            break;
    }
    const onClickHandle = () =>
    {
        this.setState({visibility: !this.state.visibility})
    }
    const onDeleteHandle = (userInfo) => 
    {
        let confirm = window.confirm(`Are you sure you want to delete ${userInfo.role} ${userInfo.name} ${userInfo.surname} with ID: ${userInfo.ID}?`);
        if(confirm)
        {
            alert("User Deleted")
        }
    }
    return (
        <div className="w-1/2 px-4 mx-auto border-b border-slate-300 cursor-pointer group/item ">
            <div className="p-4 flex flex-1 items-center justify-center  sm:items-stretch sm:justify-between">
                <div    className="profileInfo flex flex-1"
                        onClick={onClickHandle} >
                    <div className="image">
                        <img className="object-cover h-20 w-20 p-2 rounded-full" src={this.props.img} alt="" />
                    </div>
                    <div className="info mx-4 my-4 space-y-1">
                        <p className="text-sm font-medium text-slate-900" >{`${userInfo.name} ${userInfo.surname}`}</p>
                        <p className="text-sm text-slate-500 truncate">{`${userInfo.email}`}</p>

                        <div className={`detailedInfo ${this.state.visibility ? "block" : "hidden"}`}>
                            {detailedInfo}
                        </div>
                    </div>
                </div>
                <div className="justify-between space-y-1">
                    <UserButtons handleDelete={() => onDeleteHandle(userInfo)} className="deleteButton" name="Delete" mod="delete"/>
                    <UserButtons className="editButton" name="Edit" mod="edit"/>
                </div>
            </div>
          
      </div>
    )
  }
}
