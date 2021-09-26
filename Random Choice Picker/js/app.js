const tagsEl = document.querySelector(".tags");
const textArea = document.getElementById("textArea");

textArea.addEventListener("keyup", (e) => {
  createTag(e.target.value);

  if (e.key === "Enter") {
    e.target.value = "";
    selectRandomNum();
  }
});

function createTag(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  console.log(tags);

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
}

//select random tags
function selectRandomNum() {
  const time = 30;

  const interval = setInterval(() => {
    const randonNum = randomTag();

    highlightTag(randonNum);
    
    setTimeout(() => {
      unHighlightTag(randonNum);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randonNum = randomTag();
      highlightTag(randonNum);
    }, 100);
  }, time * 100);
}


//generate random numbers
function randomTag() {
  const tag = document.querySelectorAll(".tag");
  return tag[Math.floor(Math.random() * tag.length)];
}


//highlight thoes tags
function highlightTag(tag) {
  tag.classList.add("hightlight");
}


//unhighlight thoes tags
function unHighlightTag(tag) {
  tag.classList.remove("hightlight");
}
