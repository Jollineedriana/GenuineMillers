axios.get('http://localhost:5000/api/v1/customer/profile', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle error
  });
  