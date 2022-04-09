// We rely on HTML5 e-mail validation and the :invalid pseudo selector for displaying the message.
// All we need to do is add the .--submitted class to the <form>
const form = document.getElementById('form');

form.submit.addEventListener('click', (e) => {
  form.classList.add("--submitted");
});