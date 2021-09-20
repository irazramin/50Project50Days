const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem('notes'));

console.log(notes)
if(notes){
    notes.forEach(note => createNewNote(note));
}
addBtn.addEventListener("click", () => createNewNote("hello world"));

function createNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
        <button class="edit" id="edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete" id="delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="main ${text ? " " : "hidden"}"></div>
      <textarea class="${text ? "hidden" : " "}"></textarea>
    `;
  const deleteBtn = note.querySelector("#delete");
  const editBtn = note.querySelector("#edit");
  const textArea = note.querySelector("textarea");
  const main = note.querySelector(".main");

  textArea.value = text;
  main.innerHTML = marked(text);
  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateNotes()
  });

  editBtn.addEventListener("click", () => {
    textArea.classList.toggle("hidden");
    main.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateNotes()
  });
  document.body.appendChild(note);
}

function updateNotes(){
    const noteText = document.querySelectorAll('textarea');

    const notes = []

    noteText.forEach(note => notes.push(note.value));

    console.log(notes)
    localStorage.setItem('notes',JSON.stringify(notes))
}