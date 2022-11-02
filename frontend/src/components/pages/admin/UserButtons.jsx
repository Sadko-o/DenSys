import React, { Component } from 'react';

var buttonClass = '';
class UserButtons extends Component {
    constructor(props) {
        super(props)
        
        buttonClass = (this.props.name == 'Delete') ? 
        'bg-transparent p-1 w-full px-4 rounded-full group/edit text-transparent group-hover/item:text-black group-hover/item:border-2 border-indigo-500  hover:bg-red-500 hover:border-red-500':
        'bg-transparent p-1 w-full px-4 rounded-full group/edit text-transparent group-hover/item:text-black group-hover/item:border-2 border-indigo-500  hover:bg-yellow-500 hover:border-yellow-500'
    }
    render() {
        return (
            <div>
                <button className={buttonClass}>
                    <div className='text-center bg-transparent group-hover/edit:text-white'>
                        {this.props.name}
                    </div>
                </button>
            </div>
        );
    }
}

export default UserButtons;
