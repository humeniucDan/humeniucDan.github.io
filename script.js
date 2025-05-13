baseUrl = 'https://downtowncleanser-ftducmaveracawgr.germanywestcentral-01.azurewebsites.net'
// baseUrl = 'http://localhost:8080';
const url = baseUrl + '/login';
const url2 = baseUrl + '/users/id';

const data = {
    "email": "a",
    "password": "a"
};

async function loginAndFetchUserData() {
  try {
    const loginOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'  // This is essential
    };

    const loginResponse = await fetch(url, loginOptions);

    if (!loginResponse.ok) {
      throw new Error(`Login failed: ${loginResponse.status} - ${loginResponse.statusText}`);
    }

    const loginData = await loginResponse.text(); // Or loginResponse.json() if the server returns JSON
    console.log('Login successful:', loginData);

    // After successful login, fetch user data
    const userDataOptions = {
      method: 'GET',
      credentials: 'include'  // Also essential for the user data request
    };

    const userDataResponse = await fetch(url2, userDataOptions);

    if (!userDataResponse.ok) {
      throw new Error(`Fetch user data failed: ${userDataResponse.status} - ${userDataResponse.statusText}`);
    }

    const userData = await userDataResponse.text(); // Or userDataResponse.json() if the server returns JSON
    console.log('User data:', userData);

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the function to start the process
loginAndFetchUserData();