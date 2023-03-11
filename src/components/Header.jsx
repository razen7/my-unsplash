import React from 'react'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import { Button, InputAdornment, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export default function Header({ setAction }) {
    return (
        <header className='flex justify-between flex-wrap'>
            <div className="flex gap-12">
                <div className="] flex gap-2 items-center">
                    <div>
                        <CameraEnhanceIcon fontSize='large' />
                    </div>
                    <div>
                        <div className="font-[800] leading-5 tracking-normal">
                            My UnSplash
                        </div>
                        <div className="text-[12px] leading-3">
                            devchallenges.io
                        </div>
                    </div>
                </div>
                <div className="search">
                    <TextField placeholder="Search By Name" id='outlined-basic' variant='outlined' InputProps=
                        {{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            </div>
            <div>
                <Button onClick={() => setAction('add')} variant='contained'>
                    Add a photo
                </Button>
            </div>
        </header>
    )
}
