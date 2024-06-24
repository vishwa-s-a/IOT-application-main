import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext.jsx';

const PatientDashboard = () => {
    const { user } = useAuth();
    const [patientData, setPatientData] = useState(null);

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                //console.log('user-data from dashboard',user)
                const response = await fetch(`/api/patient/${user.username}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    setPatientData(result);
                } else {
                    console.error('Failed to fetch doctor data');
                }
            } catch (error) {
                console.error('Error fetching doctor data:', error);
            }
        };

        if (user) {
            fetchPatientData();
        }
    }, [user]);

    if (!patientData) {
        return( 
            <div>
                Loading patient data for {user ? user.username : 'unknown user'}...
                <h1>Patient Dashboard</h1>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.username}</p>
                <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                <p><strong>Location:</strong> {user.location}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Guardian Presence:</strong> {user.guardianPresence}</p>
                
            </div>
        );
    }

    return (
        <div>
            Loading patient data for {user ? user.username : 'unknown user'}...
            <h1>Patient Dashboard</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.username}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Guardian Presence:</strong> {user.guardianPresence}</p>

            <h1>Patient appointments</h1>
            <p><strong>Today: </strong> {patientData.today}</p>
            <p><strong>Tomorrow:</strong> {patientData.tomorrow}</p>
        </div>
    );
};

export default PatientDashboard;
