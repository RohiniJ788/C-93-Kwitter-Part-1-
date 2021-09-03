
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyB6VTR7DICm8TuMjlESHhYnQLvo_BJK7Dg",
      authDomain: "kwitter-13ee0.firebaseapp.com",
      projectId: "kwitter-13ee0",
      storageBucket: "kwitter-13ee0.appspot.com",
      messagingSenderId: "36097163555",
      appId: "1:36097163555:web:455b621e453fa48f8a4c96",
      measurementId: "G-E648M98MRX"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
   // const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
