// бургер кнопка
const burger = document.getElementById("burger");
const menu = document.getElementById("full-menu");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
});

const links = document.querySelectorAll(".full-menu__list a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("is-active");
    menu.classList.remove("is-active");
    overlay.classList.remove("is-active");
  });
});
overlay.addEventListener("click", () => {
  burger.classList.remove("is-active");
  menu.classList.remove("is-active");
  overlay.classList.remove("is-active");
});

// профиль
const editBtn = document.getElementById("editBtn");
const profileForm = document.getElementById("profileForm");
const cancelBtn = document.getElementById("cancelBtn");

const phoneText = document.getElementById("phoneText");
const emailText = document.getElementById("emailText");
const ageText = document.getElementById("ageText");
const birthText = document.getElementById("birthText");
const addressText = document.getElementById("addressText");

const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const birthInput = document.getElementById("birthInput");
const addressInput = document.getElementById("addressInput");

editBtn.addEventListener("click", () => {
  profileForm.classList.remove("hidden");

  phoneInput.value = phoneText.textContent;
  emailInput.value = emailText.textContent;
  ageInput.value = ageText.textContent;
  birthInput.value = birthText.textContent;
  addressInput.value = addressText.textContent.trim();
});

cancelBtn.addEventListener("click", () => {
  profileForm.classList.add("hidden");
});

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  phoneText.textContent = phoneInput.value;
  emailText.textContent = emailInput.value;
  ageText.textContent = ageInput.value;
  birthText.textContent = birthInput.value;
  addressText.textContent = addressInput.value;

  profileForm.classList.add("hidden");
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('toast--show');
  });

  setTimeout(() => {
    toast.classList.remove('toast--show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 3000);
}

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  phoneText.textContent = phoneInput.value;
  emailText.textContent = emailInput.value;
  ageText.textContent = ageInput.value;
  birthText.textContent = birthInput.value;
  addressText.textContent = addressInput.value;

  profileForm.classList.add("hidden");

  showToast('Данные успешно изменены!');
});


// корзина
function updateCartCount() {

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  const totalCount = cart.reduce((sum, item) => {
    return sum + item.qty;
  }, 0);

  const cartCount = document.getElementById('cart-count');

  // если элемента нет — выходим
  if (!cartCount) return;

  cartCount.textContent = totalCount;

  cartCount.style.display = totalCount > 0 ? 'flex' : 'none';
}
function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }


