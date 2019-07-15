// var signIn = new OktaSignIn({
//     baseUrl: 'https://dev-622585.okta.com', //'https://{yourOktaDomain}'
//     clientId: '0oaw6dir182J14UKb356',
//     redirectUri: 'https://localhost:8000',
//     authParams: {
//       issuer: 'https://dev-622585.okta.com/oauth2/default',
//       responseType: ['id_token','token'],
//       display: 'page'
//     }
//   });
  
//   if (!signIn.token.hasTokensInUrl()) {
//     signIn.renderEl({el: '#widget-container'},
//       function() {},
//       function(err) { console.err(err) });
//   }
  
//   else {
//     signIn.token.parseTokensFromUrl(
//       function success(res) {
//         // Add the token to tokenManager to automatically renew the token when needed
//         signIn.tokenManager.add('id_token', res[0]);
//         signIn.tokenManager.add('access_token', res[1]);
//       },
//       function error(err) {
//         console.log('handle error', err);
//       }
//     );
//   }
  //Here is an example of some front-end code that could use this token:
  
//   function callMessagesApi() {
//     var accessToken = signIn.tokenManager.get('access_token');
  
//     if (!accessToken) {
//       // This means that the user is not logged in
//       return;
//     }
  
    // Make a request using jQuery
    // $.ajax({
    //   // Your API or resource server:
    //   url: 'http://localhost:8000/api/messages',
    //   headers: {
    //     Authorization: 'Bearer ' + accessToken.accessToken
    //   },
    //   success: function(response) {
    //     // Received messages!
    //     console.log('Messages', response);
    //   },
    //   error: function(response) {
    //     console.error(response);
    //   }
    // });
  //}

