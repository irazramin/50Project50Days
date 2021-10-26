const filter = document.getElementById('filter');
const postContainer = document.getElementById('post-container');
const loader = document.querySelector('.loader');

let limit = 5;
let page = 1;

async function getPostApi() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = res.json();

  return data;
}

// filter post
function filerPost(e){
    const term = e.target.value.toUpperCase();

    const posts =  document.querySelectorAll('.post')

    posts.forEach(post =>{
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();


        if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = `flex`
        }
        else{
            post.style.display = `none`
        }
    })
    
}

async function showData() {
  const posts = await getPostApi();

  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
        <div class="post-title">
            <h2>${post.title}</h2>
        </div>
        <div class="post-body">${post.body}</div>
    </div>
    
    `;
    postContainer.appendChild(postEl);
});
}

// show loading and fetch more data
function showLoading() {
  loader.classList.add('show');
  setTimeout(() => {
    loader.classList.remove('show');
    setTimeout(() => {
      page++;
      showData();
    }, 300);
  }, 1000);
}

// show data
showData();

// add scrolling
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight  } = document.documentElement;


    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
      }
});


// input listener

filter.addEventListener('input',filerPost);