import Header from '../layouts/header';
import Footer from '../layouts/footer';
import React from 'react';
import Table from '../components/data table';

export default function TemplateDashboard() {

    return (
        <>
        <div id="tp-dashboard">
            <Header showClient = "true" clientName="Client Name Ltd" serviceName="Amazing Service"/>
            <main>
                <h1>Template Dashboard</h1>
                <button className="btn-1">+ New Template</button>
                <Table />
                <ul>
                </ul>
            </main>
            <Footer changeCompany="false" /> 
        </div>
        </>
    )

}