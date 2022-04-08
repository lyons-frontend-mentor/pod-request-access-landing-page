// We rely on HTML5 e-mail validation and the :invalid pseudo selector for displaying the message.
// All we need to do is add the .--submitted class to the <form>
const form = document.getElementById('form');

form.submit.addEventListener('click', (e) => {
  // 'minlength="1"' doesn't work 
  if (form.email.value.length === 0) {
    e.preventDefault();
    form.classList.add("--empty");
  }
  else {
    form.classList.remove("--empty");
  }
  form.classList.add("--submitted");
});
form.email.addEventListener('input', (e) => {
  if (e.target.value.length !== 0) form.classList.remove("--empty");
  else if (form.classList.contains("--submitted")) form.classList.add("--empty");
});