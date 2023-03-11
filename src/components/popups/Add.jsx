import { Button, FormControl, FormGroup, TextField } from '@mui/material'
import React from 'react'

export default function Add({ action,setAction }) {
    if (action === 'add')
        return (
            <div className='w-full h-screen flex justify-center bg-gray-500 bg-opacity-5 fixed top-0 left-0'>
                <FormControl
                    sx={{
                        boxShadow: '0 0 .5px gray',
                        padding: '20px',
                        borderRadius: '6px',
                        width: '400px',
                        display: 'flex',
                        gap: '23px',
                        height: 'fit-content',
                        marginTop: '20vh',
                        background: 'white',
                        opacity: '1',
                    }}
                >
                    <span className='text-[17px] font-[700]'>
                        Add a new photo
                    </span>
                    <FormGroup>
                        <div className='text-[16px]'>Title</div>
                        <TextField required />
                    </FormGroup>
                    <FormGroup>
                        <div className='text-[16px]'>Photo URL</div>
                        <TextField required />
                    </FormGroup>
                    <FormGroup sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        gap: '15px'
                    }}>
                        <Button variant="text" sx={{ color: 'lightgray' }} onClick={() => setAction(null)}>Cancel</Button>
                        <Button variant='contained'>Upload</Button>
                    </FormGroup>
                </FormControl>
            </div>

        )
}
