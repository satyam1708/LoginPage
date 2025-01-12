import { useEffect, useState } from 'react';

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    console.log(storedUserData); // Debug: Log the stored user data

    if (storedUserData && storedUserData.message) {
      const user = storedUserData.message;
      setUserData({
        full_name: user.full_name,
        username: user.username,
        country: user.country_row_id, 
        email_id: user.email_id,
        mobile_number: user.mobile_number,
        referral_id: user.referral_username, 
      });
    } else {
      // Redirect to login if no user data found
      window.location.href = '/';
    }
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>Country</th>
            <th>Email ID</th>
            <th>Mobile Number</th>
            <th>Referral ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userData.full_name || 'N/A'}</td>
            <td>{userData.username || 'N/A'}</td>
            <td>{userData.country || 'N/A'}</td>
            <td>{userData.email_id || 'N/A'}</td>
            <td>{userData.mobile_number || 'N/A'}</td>
            <td>{userData.referral_id || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
