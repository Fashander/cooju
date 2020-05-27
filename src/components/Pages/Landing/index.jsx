import React from 'react';
import BillBoard from './BillBoard';
import { Typography } from '@material-ui/core';
import QuickLinks from './QuickLinks';

const Landing = () => {
    return (
        <div>
            <BillBoard />
            <QuickLinks />
        </div>
    )
}

export default Landing
