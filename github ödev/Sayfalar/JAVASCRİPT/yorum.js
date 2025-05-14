document.getElementById("submitComment").addEventListener("click", function() {
  const commentText = document.getElementById("commentText").value.trim();

  if (!commentText) {
    alert("Lütfen bir yorum yazın.");
    return;
  }

  const username = localStorage.getItem("loggedInUser");

  if (!username) {
    alert("Yorum yapabilmek için giriş yapmalısınız.");
    return;
  }

  // yorum eklenmesi
  const comment = {
    username: username,
    comment: commentText,
    timestamp: new Date().toLocaleString()
  };

  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));

  displayComments(); // yeniden yükle
  document.getElementById("commentText").value = ''; // temizle
});

// yorumları gösterme
function displayComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const commentsSection = document.getElementById("commentsSection");
  commentsSection.innerHTML = ''; // yorumları temizle

  comments.forEach(comment => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");

    const commentContent = `
      <p><strong>${comment.username}</strong> - ${comment.timestamp}</p>
      <p>${comment.comment}</p>
    `;
    commentElement.innerHTML = commentContent;
    commentsSection.appendChild(commentElement);
  });
}

// yorumları göster
window.onload = displayComments;
