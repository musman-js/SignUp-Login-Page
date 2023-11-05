    const firebaseConfig = {
    apiKey: "AIzaSyCVptzRRwGqQtkyfquqqMR4LdHBX47M4qg",
    authDomain: "signuppage-23ba3.firebaseapp.com",
    projectId: "signuppage-23ba3",
    storageBucket: "signuppage-23ba3.appspot.com",
    messagingSenderId: "4343270569",
    appId: "1:4343270569:web:425f20043da754d2ddedb8"
  };
  var firebase = firebase.initializeApp(firebaseConfig);


function getValue()
{
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var username  = document.getElementById("name")

   

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
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