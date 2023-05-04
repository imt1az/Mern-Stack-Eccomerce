import DashboardLayout from 'components/Hoc/dasboardLayout';
import React from 'react';
import SiteVar from './SiteVar';

const SiteMain = () => {
    return (
        <div>
            <DashboardLayout title='Manage Site'>
                <SiteVar></SiteVar>
            </DashboardLayout>
        </div>
    );
};

export default SiteMain;