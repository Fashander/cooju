// try to use this profile folder for all works relating to the profile page in components and you can import and export them through this index.
import React from 'react';
import Profile from './profile';
import Assessment from './Assessment';
import CourseHighlight from './CourseHighlight';
import Reports from './Reports'
import Inprogress from './Inprogress'
import Completed from './Completed'
const index = () => {
    return (
        <div>
        
            <Profile />
            <Assessment />
           <Reports/>
                <CourseHighlight/>
            <Inprogress/>
            <Completed/>
            
        </div>
    )
}
export default index