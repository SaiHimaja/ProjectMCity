import React from "react";
import AdminLayout from "../../HOC/adminlayout";

const Dashboard =(props) => {
    console.log(props)
    return(
        <AdminLayout title="Dashboard">
            <div className="user_dashboard">
                <div>
                    
                    This is your dashboard
                </div>
            </div>
        </AdminLayout>
    )
}
export default Dashboard;