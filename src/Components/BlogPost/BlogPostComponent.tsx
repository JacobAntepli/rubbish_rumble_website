import React from 'react';
import "./BlogPost.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function BlogPostComponent(props:{
    name:string,
    progress:string

}){
    return(

        <div className={"blogPostContainer"}>

            <div className={"blogPostName"}>
            <text>
                {props.name}
            </text>
            </div>

            <div className={"blogPostProgress"}>
            <text>
                {props.progress}
            </text>

            </div>

        </div>


    );
}