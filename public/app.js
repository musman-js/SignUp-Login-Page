var firebaseConfig = {
  apiKey: "AIzaSyCVptzRRwGqQtkyfquqqMR4LdHBX47M4qg",
  authDomain: "signuppage-23ba3.firebaseapp.com",
  projectId: "signuppage-23ba3",
  storageBucket: "signuppage-23ba3.appspot.com",
  messagingSenderId: "4343270569",
  appId: "1:4343270569:web:425f20043da754d2ddedb8"
};
  var app = firebase.initializeApp(firebaseConfig);


  // ====signUp auth====
function signUp()
{
    var email = document.getElementById("email");
    var password = document.getElementById("password");

   
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

}

  //  ====Login auth====
function login()
{
  var email = document.getElementById("userEmail");
  var password = document.getElementById("userPassword");

   firebase.auth().signInWithEmailAndPassword(email.value, password.value)
   .then((userCredential) => {
     // Signed in
     var user = userCredential.user;
    console.log(user)
   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log(errorMessage)
   });
}


// ===login with Google===
function loginWithGoogle()
{
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    
  });
}

// ====login with Github====
function loginWithGithub()
{
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user)

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    
  });

}

function newAcc()
{
  window.location.href = "index.html"
}