// kayıt işlemi
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const gender = document.getElementById("registerGender").value;

    if (!username || !password || !email || !gender) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    const userData = {
      password: password,
      email: email,
      gender: gender
    };

    // kullanıcı verilerini JSON formatına dönüştür
    localStorage.setItem("user_" + username, JSON.stringify(userData));

    alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
    window.location.href = "../HTML/giris.html";
// giriş yapıldığında kullanıcıyı sessionStorage'a kaydet
function loginUser(username) {
  sessionStorage.setItem("loggedInUser", username);

  alert("Giriş başarılı!");
  window.location.href = "../../Sayfalar/index.html"; // ana sayfaya yönlendir
}




  });
}
