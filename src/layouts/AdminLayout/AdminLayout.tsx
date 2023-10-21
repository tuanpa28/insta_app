import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            AdminLayout
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
