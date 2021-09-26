const button = document.getElementById("show-noti");
const notification = document.getElementById("toasts");

button.addEventListener("click", () => showNotification());

const randomNotiText = [
  "Show Notification 1",
  "Show Notification 2",
  "Show Notification 3",
  "Show Notification 4",
];
function showNotification() {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  toast.innerText = getRandomNotif();

  notification.appendChild(toast);

  setTimeout(() =>{
     toast.remove();
  },3000)
}

function getRandomNotif() {
  return randomNotiText[Math.floor(Math.random() * randomNotiText.length)];
}
