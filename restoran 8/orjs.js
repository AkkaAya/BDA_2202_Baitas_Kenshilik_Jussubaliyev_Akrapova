let formData = {
  name: '',
  phoneNumber: '',
  dateTime: '',
  gender: '',
  city: '',
  region: '',
  address: '',
  message: ''
};

const nameInput = document.querySelector('input[type="text"]');
nameInput.addEventListener('input', function(event) {
  formData.name = event.target.value;
});

const phoneNumberInput = document.querySelector('input[type="number"]');
phoneNumberInput.addEventListener('input', function(event) {
  formData.phoneNumber = event.target.value;
});

const dateTimeInput = document.querySelector('input[type="datetime-local"]');
dateTimeInput.addEventListener('input', function(event) {
  formData.dateTime = event.target.value;
  console.log(formData);
});

const genderInputs = document.querySelectorAll('input[name="gender"]');
genderInputs.forEach(function(input) {
  input.addEventListener('change', function(event) {
    formData.gender = event.target.value;
  });
});

const citySelect = document.querySelector('select');
citySelect.addEventListener('change', function(event) {
  formData.city = event.target.value;
});

const regionInput = document.querySelector('input#region');
regionInput.addEventListener('input', function(event) {
  formData.region = event.target.value;
});

const addressInput = document.querySelector('input#address');
addressInput.addEventListener('input', function(event) {
  formData.address = event.target.value;
});

const messageInput = document.querySelector('textarea');
messageInput.addEventListener('input', function(event) {
  formData.message = event.target.value;
});

$(document).ready(function() {
  $('input[type="text"]').on('input', function(event) {
    formData.name = $(this).val();
  });

  $('input[type="number"]').on('input', function(event) {
    formData.phoneNumber = $(this).val();
  });

  $('input[type="datetime-local"]').on('input', function(event) {
    formData.dateTime = $(this).val();
  });

  $('input[name="gender"]').on('change', function(event) {
    formData.gender = $(this).val();
  });

  $('select').on('change', function(event) {
    formData.city = $(this).val();
  });

  $('input#region').on('input', function(event) {
    formData.region = $(this).val();
  });

  $('input#address').on('input', function(event) {
    formData.address = $(this).val();
  });

  $('textarea').on('input', function(event) {
    formData.message = $(this).val();
  });

  $('.form').on('submit', function(event) {
    event.preventDefault();
    
    console.log(formData);
  });
});
