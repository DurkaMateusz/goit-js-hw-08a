import throttle from 'lodash.throttle';

const emailForm = document.querySelector('[name="email"]');
const messageForm = document.querySelector('[name="message"]');
const formInformations = document.querySelector('form');
const sendForm = document.querySelector('[type="submit"]');
const storeValue = {};
const inputFill = throttle(() => {
  storeValue.email = emailForm.value;
  storeValue.message = messageForm.value;
  storage(storeValue);
}, 500);
formInformations.addEventListener('input', inputFill);
const storage = function (data) {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};
window.addEventListener('DOMContentLoaded', () => {
  const storedValue = localStorage.getItem('feedback-form-state');
  if (storedValue) {
    try {
      const parsedValue = JSON.parse(storedValue);
      if (parsedValue.email == undefined) {
        emailForm.value = '';
      } else {
        emailForm.value = parsedValue.email;
      }
      if (parsedValue.message == undefined) {
        messageForm.value = '';
      } else {
        messageForm.value = parsedValue.message;
      }
    } catch (error) {
      console.error('Error parsing stored value:', error);
    }
  }
});
sendForm.addEventListener('click', eve => {
  eve.preventDefault();
  console.log(`Email: ${emailForm.value}`);
  console.log(`Message: ${messageForm.value}`);
  localStorage.removeItem('feedback-form-state');
  formInformations.reset();
});