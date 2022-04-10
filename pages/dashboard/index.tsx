import React from 'react';
import MainLayout from "../../src/containers/Layouts/MainLayout";
import Calendar from "../../src/components/Calendar/calendar";

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dashboard__header">
                <div className="dashboard__title">
                    <p>Календарь</p>
                    <span>На согласовании</span>
                </div>
            </div>
            <Calendar />
        </div>
    );
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page: JSX.Element) {
    return <MainLayout>{page}</MainLayout>
}