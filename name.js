const profileForm = document.querySelector(".js-profileForm"),
  profileForm_form = profileForm.querySelector("form"),
  profile = document.querySelector(".js-profile"),
  profile_span = profile.querySelector("span"),
  profile_btn = profile.querySelector("input");

const USER = "user";
const SHOW = "show";

function printProfile(name) {
  profileForm.classList.remove(SHOW);
  profile.classList.add(SHOW);
  profile_span.innerText = name;
  profile_btn.addEventListener("click", () => {
    localStorage.removeItem(USER);
    askProfile();
  });
}

function askProfile() {
  profile.classList.remove(SHOW);
  profileForm.classList.add(SHOW);
  profileForm_form.addEventListener("submit", onSubmit);
}

function onSubmit(e) {
  e.preventDefault();
  const name = profileForm_form.name.value;
  localStorage.setItem(USER, name);
  printProfile(name);
}

function init() {
  const user = localStorage.getItem(USER);
  if (user) {
    printProfile(user);
  } else {
    askProfile();
  }
}

init();
