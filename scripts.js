/* Use this area for pseudo - coding:



*/
// var name;
// var email;
var localContact;
// var allContacts = [];
// var theUsersInfo;
// Query selectors
var form = document.querySelector('form')
var displayBtn = document.getElementById('display-btn')



// Event listeners
var createContact = form.addEventListener('click', function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  saveContactToLocalStorage(name, email)
});

displayBtn.addEventListener('click', retrieveContactFromLocalStorage)




// Functions
function saveContactToLocalStorage(name,email) {
  var newContact = { contactName: `${name}`, contactEmail: `${email}`};
  var stringifiedNewContact = JSON.stringify(newContact);
  localContact = localStorage.setItem('theUsersInfo', stringifiedNewContact);
  // allContacts.push(localContact)
}

// function resetForm() {
//   if (localContact !== null) {
//     var form = document.querySelector('form');
//     form.reset()
//   }
// }

function retrieveContactFromLocalStorage() {
  var retrievedContact = localStorage.getItem('theUsersInfo');
  parsedContact = JSON.parse(retrievedContact);
  displayContact()
}

function displayContact() {
  const displayHtml = `
  <article class="displayer">
    <h2>Name: ${parsedContact.contactName}</h2>
    <h4>Email: ${parsedContact.contactEmail}</h4>
  </article>
  `
  document.querySelector('.display-area').innerHTML = displayHtml
}