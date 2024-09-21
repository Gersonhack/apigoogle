const axios = require('axios');
  
  const data = {
    "hideReferer": false,
    "httpsLinks": false,
    "hostname": "yourshortdomain.com",
    "linkType": "random"
  };
  
  const options = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'pk_0Kik0GUQVIBanxJL'
    }
  };
  
  axios.post('https://api.short.io/domains/', data, options)
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(response) {
      console.log(response);
    });
    
    
    
    
    
    {
  linkType: 'random',
  state: 'configured',(or not_configured)
  cloaking: false,
  setupType: 'dns',
  httpsLinks: false,
  id: 91576,
  hostname: 'myshortlink.club',
  UserId: 9346,
  updatedAt: '2020-04-23T10:22:47.010Z',
  createdAt: '2020-04-23T10:22:46.649Z',
  provider: null,
  unicodeHostname: 'yourshortdomain.com',
  clientStorage: null
}