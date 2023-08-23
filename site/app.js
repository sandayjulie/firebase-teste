const firebaseConfig = {
    apiKey: "AIzaSyCzQNQ1d__RazZCAqdvgYVFw0W_ZNc4bSY",
    authDomain: "projeto3emiateste-55f53.firebaseapp.com",
    projectId: "projeto3emiateste-55f53",
    storageBucket: "projeto3emiateste-55f53.appspot.com",
    messagingSenderId: "1040643709660",
    appId: "1:1040643709660:web:05fa4f7dd3ee7f07d5f219"
  };

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
 const email = emailField.value;
 const password = passwordField.value;
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});