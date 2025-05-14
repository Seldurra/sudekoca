// giriş
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("user_" + username));

    if (!storedUser) {
      alert("Böyle bir kullanıcı bulunamadı.");
      return;
    }

    if (storedUser.password === password) {
      // başarılı giriş
      alert("Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz.");
      localStorage.setItem("loggedInUser", username);
      window.location.href = "../../Sayfalar/index.html";
    } else {
      alert("Şifre hatalı.");
    }
  });
}
