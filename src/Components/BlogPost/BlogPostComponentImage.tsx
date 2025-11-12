import React from 'react';
import "./BlogPost.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function BlogPostComponentImage(props:{
    name:string,
    progress:string,
    images: string[]

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

            <div>
                <ImageList className={"blogImageContainer"}  cols={2} rowHeight={"auto"}>
                    {props.images.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                srcSet={item}
                                src={item}
                                alt={item}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

            <div>



            </div>

        </div>


    );
}