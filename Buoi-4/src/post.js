// 2 cách khai báo hàm
// cach 1: function tenHam(tham_so) { code xu ly}

// cách 2 Arrow function: Trong TH hàm có 1 thamn số thì có thể bỏ cặp dấu ()
//  const tenHam = (tham_so) => { code xu ly }

// DOM
const postsContainer = document.querySelector(".posts-container");
const postForm = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const imagePathInput = document.querySelector("#image-path");

// chuyển đổi dữ liệu thành giao diện
const renderPostList = (postList) => {
  // postList mảng các post
  if (postList) {
    // postList.map(function (postItem) {

    // })
    let htmls = postList.map((postItem) => {
      // literial string
      return `
        <div class='post-item m-[12px] w-full rounded-lg flex'>
          <div class="w-2/3">
            <h3 class='post-title'>${postItem.title}</h3>
            <p>${postItem.content}</p>
          </div>
          <img class='class="w-1/3"' src='${postItem.image_path}'>
        </div>
      `;
    });

    console.log(htmls);
    postsContainer.innerHTML = htmls.join("");
  }
};

// Gửi yêu cầu với phương thức GET lên server
// Server sẽ trả về dữ liệu dạng JSON (Dữ liệu nhận được ở đây là biến posts)
const handleGetPostList = () => {
  fetch("https://65ed290d0ddee626c9b13189.mockapi.io/api/v1/posts")
    .then((data) => {
      return data.json();
    })
    .then((posts) => {
      console.log(posts);

      // render posts
      renderPostList(posts);
    })
    .catch((error) => {
      console.warn(error);
    });
};

handleGetPostList();

// Hàm gửi dữ liệu lên server
// Phương thức: POST
// 1 request với phương thức POST thì sẽ có thành phần là body để chứa dữ liệu cần đẩy lên
const handlePushData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return response.json(); // parses JSON response into native JavaScript objects
};

const addPost = (event) => {
  event.preventDefault()

  let title = titleInput.value;
  let content = contentInput.value;
  let imagePath = imagePathInput.value;

  let post = {
    title,
    content,
    imagePath,
  }

  handlePushData("https://65ed290d0ddee626c9b13189.mockapi.io/api/v1/posts", post).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

  handleGetPostList();
};

postForm.addEventListener('submit', function(event) {
  addPost(event)
})
