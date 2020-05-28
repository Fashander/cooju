// try to use this profile folder for all works relating to the profile page in components and you can import and export them through this index.
import React from 'react';
import Profile from './profile';
import Contents from './Contents';
const index = () => (
    <div>
        <Profile />
        <Contents/>
    </div>
)

export default index