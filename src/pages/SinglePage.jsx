import React from 'react';
import {useParams} from 'react-router-dom';

const aboutData = [
    {
        slug: "about-app",
        title: "About the app",
        description: "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."
    },
    {
        slug: "about-author",
        title: "About the author",
        description: "This app was developed by Bello Oluwatomisin, a budding software developer. He is opened to freelance Gig. So go ahead and connect with Bello on Twitter @__tbello."
    }
]
const SinglePage = () => {
    // const slug = props.slug
    let params = useParams();
    console.log(params.aboutId);
    let contentData = aboutData.find(item=>item.slug === params.aboutId);
    let title = 'Nothing'
    let description = 'Nothing to write ABOUT'
    if (contentData){   
        ({title, description} = contentData)
    }
    return (
        <div className='main__content'>
            <h1>{title}</h1>
            <p>{ description}</p>
        </div>
    )
}

export default SinglePage;