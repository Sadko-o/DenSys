// IMPORTINGS
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import HomeHeader from '../../headers/AdminHeader';
import SearchForm from '../home/SearchForm';

// COMPONENT
const SearchPage = () => {
    const baseURL = "https://backend-app-production-2791.up.railway.app/doctor";
    const [row, setRow] = useState(null);
    const [updateModel, setUpdateModel] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false); 
    const [createModal, setCreateModal] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [salary, setSalary] = useState('');
    const [phone, setPhone] = useState('');
    const [cname, setCname] = useState('');

    

    const [editEmail, setEditEmail] = useState('');
    const [editName, setEditName] = useState('');
    const [editSurname, setEditSurname] = useState('');
    const [editSalary, setEditSalary] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const [editCname, setEditCname] = useState('');
    //CREATE
    
    //READ
    const getAllUsers = async () => {
        const response = await axios.get(baseURL);
        setRow(response.data);
    }
    useEffect(() => {
        getAllUsers();
    }, []);

    //DELETE
    const deleteUser =   (row) => {
        // console.log(cname)
        axios({
            method: 'delete',
            url: baseURL,
            data: {
                email: row.email,
            }
        }).then((response)=>{
            console.log(response)
            alert(response.data)
            getAllUsers();
            }).catch((error)=>{
            console.log(error)
            alert(error)
            });
    }

    const handleDelete = (row) => {
        setDeleteModal(true);
        deleteUser(row);
    }

    //UPDATE
    const handleEdit = () => {
        axios({
            method: 'put',
            url: baseURL,
            headers: {}, 
            data: {
                email: editEmail,
                name: editName,
                surname: editSurname,
                salary: editSalary,
                phone: editPhone,
                cname_id: editCname,
            }
        }).then((response)=>{
            console.log(response)
            alert(response.data)
            getAllUsers();
          }).catch((error)=>{
            console.log(error)
            alert("Not Updated")
            }
        );
    }


    return (
        <>
        <HomeHeader/>
        <div >
            
            <div className="min-w-screen pt-10 shadow-2xl flex items-center justify-center bg-[#f3f3f3] font-sans overflow-hidden">
               
                <div className="w-full lg:w-5/6 my-11">
                    <div className='m-6'>
                        <SearchForm/>
                    </div>
                    
                    <div className=" bg-white shadow-xl rounded-[12px] py-6">
                        <table className="min-w-max bg-white  w-full table-auto">
                            <thead>
                                <tr className="bg-white  mx-4 px-5 text-black uppercase text-sm leading-normal">
                                    <th className="py-3 px-3 text-left">Email</th>
                                    <th className="py-3 px-2 text-left">name</th>
                                    <th className="py-3 px-3 text-left">surname</th>
                                    <th className="py-3 px-2 text-left">salary</th>
                                    <th className="py-3 px-3 text-left">phone</th>
                                    <th className="py-3 px-3 text-left">cname</th>
                                    <th className="py-3 px-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 bg-white  text-sm font-light">
                                { (row)? row.map(row =>
                                <tr className="border-b border-gray-300  bg-white hover:bg-gray-200">
                                    <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                                        <div className="flex bg-white  items-center">
                                            <span className="bg-white  font-medium">{row.email}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                                        <div className="flex bg-white  items-center">
                                            <span className="bg-white  font-medium">{row.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-10 text-left bg-white  whitespace-nowrap">
                                        <div className="flex bg-white  items-center">
                                            <span className="font-medium">{row.surname}</span>
                                        </div>
                                    </td>

                                    <td className="py-3 px-10 bg-white  text-left whitespace-nowrap">
                                        <div className="flex bg-white  items-center">
                                            <span className="font-medium">{row.salary}</span>
                                        </div>
                                    </td>

                                    <td className="py-3 px-10 bg-white  text-left whitespace-nowrap">
                                        <div className="flex bg-white  items-center">
                                            <span className="font-medium">{row.phone}</span>
                                        </div>
                                    </td>

                                    <td className="py-3 px-10 bg-white  text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="font-medium">{row.cname}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 bg-white  text-center">
                                        {/* TODO svg icon or smth make apppointment */}
                                    </td>
                                </tr>
                                ):<tr className='min-w-max w-full uppercase text-sm table-auto'><td className='text-black-600 uppercase text-sm leading-normal'> Loading...</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            </>
    )
}

export default SearchPage