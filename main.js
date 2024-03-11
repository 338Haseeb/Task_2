const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const user = document.querySelector('#users');

myform.addEventListener('submit',onSubmit)


function onSubmit(e) {
e.preventDefault();
if( nameInput.value === ''|| emailInput.value ==='')

{  msg.classList.add('error');
    msg.innerHTML = 'please enter all fields';
    setTimeout(()=>msg.remove(),3000)
}
else
{
    const newList = document.createElement('li');
    // Set its text content to the name and email values
    newList.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    // Append the new item to the users list
    user.appendChild(newList);
    // Clear the form fields
    nameInput.value = '';
    emailInput.value = '';
    // Log success
    console.log('User added successfully');
}

}