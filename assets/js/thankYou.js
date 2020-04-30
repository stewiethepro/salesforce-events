function thankYou(){

  var url_string = window.location.href;
  var decoded = decodeURI(url_string);
  var url = new URL(decoded);

  var name = url.searchParams.get("Name");
  var email = url.searchParams.get("Email");
  var company = url.searchParams.get("company");

  var nameString = name.split(" ");
  var firstName = nameString[0];

  const thankYouMessageHeading = document.querySelector('#thank-you-message-heading');

  thankYouMessageHeading.innerHTML =
  `
  <h1 class="display-4 text-center mb-3">
    Thanks ${firstName}.
  </h1>
  `

  const thankYouMessageBody = document.querySelector('#thank-you-message-body');

  thankYouMessageBody.innerHTML =
  `
  <p class="text-muted text-center mb-5">
    We've sent a confirmation email to <strong class="text-white">${email}</strong>.
    <br>
    Looking forward to learning more about your needs at ${company}.
  </p>
  `
};

thankYou();
