// Create a convinient interface ("Facade") over a cumbersome API


// Use getFetch() function to get data from an API, usage is independent from implementation and easier to understand
function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
  }
  
  function getUserPosts(userId) {
    return getFetch(`https://jsonplaceholder.typicode.com/posts`, {userId})
  }
  
  // Use recieved data
  getUsers().then(users => {
    users.forEach(user => {
      getUserPosts(user.id).then(posts => {
        console.log(user.name);
        console.log(posts.length);
      })
    })
  })
  

// getFetch() function implemented via Fetch API

  // function getFetch(url, params = {}) {
  //   const queryString = Object.entries(params).map(param => {
  //     return `?${param[0]}=${param[1]}`
  //   }).join('&')
  //   return fetch(`${url}${queryString}`, {
  //     method: "GET",
  //     headers: {"Content-Type": "application/json"}
  //   }).then(res => res.json());
  // }
  

// getFetch() function implemented via Axios

function getFetch(url, params = {}) {
    return axios({
      url,
      method: "GET",
      params
    }).then(res => res.data);
  }