import { useEffect, useState } from 'react';

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    console.log(storedUserData); // Debug: Log the stored user data

    if (storedUserData && storedUserData.message) {
      // Set the user data from the 'message' field
      const user = storedUserData.message;
      setUserData({
        full_name: user.full_name,
        username: user.username,
        country: user.country_row_id, // Assuming country_row_id needs to be replaced with the country name
        email_id: user.email_id,
        mobile_number: user.mobile_number,
        referral_id: user.referral_username, // Referral username as Referral ID
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
