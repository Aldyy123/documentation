import React from "react";
import {useOutletContext} from 'react-router-dom'
import {Grid} from '@mui/material'

const Configuration = () => {
    const content = useOutletContext()
    if(content){
        return (
            <Grid dangerouslySetInnerHTML={{__html: content.content}} />
        )
    }
    return null
}

export default Configuration