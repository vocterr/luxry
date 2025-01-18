"use client";

import { User } from '@/types'
import { deleteUserAdmin } from '@/utils/deleteUserAdmin';
import { updateRoleAdmin } from '@/utils/updateRoleAdmin';
import React, { useState } from 'react'
import { FiEdit, FiTrash, FiUser } from 'react-icons/fi';

export const UsersListManageUsersPage = ({ initialUsers }: { initialUsers: User[] }) => {
    const [users, setUsers] = useState(initialUsers);
    const [deleteStatusMessage, setDeleteStatusMessage] = useState<{ success: boolean, message: string } | null>(null);
    const [roleStatusMessage, setRoleStatusMessage] = useState<{ success: boolean, message: string } | null>(null);
    const [loading, setLoading] = useState(false);


    const onDeleteClick = async (userId: string) => {
        setLoading(true);
        const result = await deleteUserAdmin(userId);
        setDeleteStatusMessage({ success: result!.success, message: result!.message });
        setLoading(false);
    }

    const onRoleClick = async (role: string, userId: string) => {
        setLoading(true);
        const result = await updateRoleAdmin(role, userId);
        setRoleStatusMessage({ success: result!.success, message: result!.message });
        setLoading(false);
    }
    return (
        <div className="grid grid-cols-1 gap-4 w-[90%] self-center font-inter text-black">
            {users.map((user) => (
                <div className='flex flex-col p-4 space-y-3 rounded-md shadow-lg shadow-gray-900 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'>
                    <p className='font-bold'>ID: <b className='font-normal relative bottom-[1px]'>{user.id}</b></p>
                    <p className='font-bold'>Name: <b className='font-normal'>{user.name}</b></p>
                    <p className='font-bold'>Email: <b className='font-normal'>{user.email}</b></p>
                    <p className='font-bold'>Role: <b className='font-normal'>{user.role}</b></p>


                    {loading && (
                        <div className='flex items-center justify-center mt-2'>
                            <div className='w-6 h-6 border-4 self-center rounded-full border-blue-500 border-t-transparent animate-spin '></div>
                        </div>

                    )}
                    <div className='flex items-center justify-between'>
                        <button onClick={() => onDeleteClick(user.id)} className='text-red-600 hover:bg-red-300 hover:scale-[1.03] transition-all duration-500 font-bold border border-gray-600 w-36 h-10 rounded-md shadow-md shadow-gray-400 flex items-center justify-center'>
                            <FiTrash className='w-5 h-5' />
                            <span className='ml-2'>Delete</span>
                        </button>

                        <button onClick={() => onRoleClick(user.role == "ADMIN" ? "USER" : "ADMIN", user.id)} className='text-red-600  hover:bg-red-300 hover:scale-[1.03] transition-all duration-500  font-bold border border-gray-600 w-36 h-10 rounded-md shadow-md shadow-gray-400 flex items-center justify-center'>
                            <FiEdit className='w-5 h-5' />
                            <span className='ml-2'>{user.role == "ADMIN" ? "Make User" : "Make Admin"}</span>
                        </button>

                    </div>
                </div>
            ))}
        </div>
    )
}
