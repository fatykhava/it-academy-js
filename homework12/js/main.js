const dragOver = (e) => {
  e.preventDefault();
}

const dragEnter = (e) => {
  if (e.target.firstElementChild !== null) return;
  e.target.classList.add('hover');
}

const dragLeave = (e) => {
  e.target.classList.remove('hover');
}

const dragStart = (e) => {
  e.target.classList.add('hide');
  e.dataTransfer.setData("img", e.target.id);
}

const dragEnd = (e) => {
  e.target.classList.remove('hide');
}

const drop = (e) => {
  const dragElem = e.dataTransfer.getData("img");
  e.target.append(document.getElementById(dragElem));
  e.target.classList.remove('hover');
}

document.querySelectorAll('.drag-container').forEach((container) => {
  container.addEventListener('dragover', dragOver);
  container.addEventListener('dragenter', dragEnter);
  container.addEventListener('dragleave', dragLeave);
  container.addEventListener('dragstart', dragStart);
  container.addEventListener('dragend', dragEnd);
  container.addEventListener('drop', drop);
})