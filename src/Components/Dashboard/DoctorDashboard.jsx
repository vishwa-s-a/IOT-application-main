import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext.jsx';

const DoctorDashboard = () => {
    const { user } = useAuth();
    const [doctorData, setDoctorData] = useState(null);

    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                //console.log('user-data from dashboard',user)
                const response = await fetch(`/api/doctor`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include' // Include cookies in the request
                });

                if (response.ok) {
                    const result = await response.json();
                    setDoctorData(result);
                } else {
                    console.error('Failed to fetch doctor data');
                }
            } catch (error) {
                console.error('Error fetching doctor data:', error);
            }
        };

        if (user) {
            fetchDoctorData();
        }
    }, [user]);

    if (!doctorData) {
        return( 
            <div>
                Loading doctor data for {user ? user.username : 'unknown user'}...
                <h1>Doctor Dashboard</h1>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.username}</p>
                <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                <p><strong>Location:</strong> {user.location}</p>
                <p><strong>Specialization:</strong> {user.specialization}</p>
                <p><strong>Years of Service:</strong> {user.yearsOfService}</p>
                <p><strong>Availability:</strong> {user.availability.join(', ')}</p>
            </div>
        );
    }

    return (
        <div>
            Loading doctor data for {user ? user.username : 'unknown user'}...
            <h1>Doctor Dashboard</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.username}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Specialization:</strong> {user.specialization}</p>
            <p><strong>Years of Service:</strong> {user.yearsOfService}</p>
            <p><strong>Availability:</strong> {user.availability.join(', ')}</p>

            <h1>Doctor appointments</h1>
            <p><strong>Today: </strong> {doctorData.today}</p>
            <p><strong>Tomorrow:</strong> {doctorData.tomorrow}</p>
        </div>
    );
};

export default DoctorDashboard;
