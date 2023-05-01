console.log(`WARSZTAT - obsluga formularza 'Imię i nazwisko'`);

let form = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault();

    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');

    console.log(`Imię: ${firstName.value}, Nazwisko: ${lastName.value}`);
}

form.addEventListener('submit', submitForm);

console.log(form);

