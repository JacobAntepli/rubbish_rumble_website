import React from 'react';


export default function BlogPostComponentImage(props:{
    name:string,
    progress:string

}){
    return(
        <div>
            <text>
                {props.name}
            </text>
            <text>
                {props.progress}
            </text>
        </div>

    );
}