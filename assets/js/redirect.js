
const demoForm = document.getElementById("demo-form");

demoForm.addEventListener("submit", function(e) {
e.preventDefault();

  name = encodeURIComponent(demoForm.name.value);
  email = encodeURIComponent(demoForm.email.value);
  company = encodeURIComponent(demoForm.company.value);
  budget = encodeURIComponent(demoForm.budget.value);

  data = [name, email, company, budget];
  console.log(data);

  if (demoForm.budget.value != 'Under $1000') {
    redirectURL = "https://stewiethepro.github.io/form-test/booking-page.html?soskip=1&name=" + name + "&email=" + email + "&company=" + company + "&budget=" + budget
    console.log(redirectURL)
    window.open(redirectURL, '_blank')
  }
  else {
    redirectURL = "https://stewiethepro.github.io/form-test/discover-our-product.html?soskip=1&name=" + name + "&email=" + email + "&company=" + company + "&budget=" + budget
    console.log(redirectURL)
    window.open(redirectURL, '_blank')
  };
});
