const postBtn = document.getElementById("post-btn");
const postInput = document.getElementById("post-input");
const feed = document.getElementById("feed");

// Load saved posts from browser
let posts = JSON.parse(localStorage.getItem("posts")) || [];
renderPosts();

postBtn.addEventListener("click", () => {
  const content = postInput.value.trim();
  if (content) {
    const post = { content, time: new Date().toLocaleString() };
    posts.unshift(post); // newest on top
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
    postInput.value = "";
  }
});

function renderPosts() {
  feed.innerHTML = posts.map(p => `<p>${p.content} <small>${p.time}</small></p>`).join("");
}
