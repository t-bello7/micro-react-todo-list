import React from "react";
import {useParams} from 'react-router-dom';

const AboutAuthor = () => {
    let params = useParams();
    console.log(params);
    return <h2>This about the author</h2>
}


export default AboutAuthor;