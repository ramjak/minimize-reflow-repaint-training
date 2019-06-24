function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createElementOneByOne(rootElement, data) {
  rootElement.innerHTML = '';
  for (let j = 0; j < 100; j++) {
    for (let i = 0; i < data.length; i++) {
      const newTr = document.createElement('tr');

      const newNoTd = document.createElement('td');
      newNoTd.innerText = data[i].No;
      newTr.appendChild(newNoTd);

      const newNameTd = document.createElement('td');
      newNameTd.innerText = data[i].Name;
      newTr.appendChild(newNameTd);

      const newAvatarTd = document.createElement('td');
      const newAvatarImg = new Image(50, 50);
      newAvatarImg.src = data[i].Avatar;
      newAvatarTd.appendChild(newAvatarImg);
      newTr.appendChild(newAvatarTd);

      rootElement.appendChild(newTr);
    }
  }
}

function createElementAllAtOnce(rootElement, data) {
  rootElement.innerHTML = '';
  const wrapperElement = document.createDocumentFragment();
  for (let j = 0; j < 100; j++) {
    for (let i = 0; i < data.length; i++) {
      const newTr = document.createElement('tr');

      const newNoTd = document.createElement('td');
      newNoTd.innerText = data[i].No;
      newTr.appendChild(newNoTd);

      const newNameTd = document.createElement('td');
      newNameTd.innerText = data[i].Name;
      newTr.appendChild(newNameTd);

      const newAvatarTd = document.createElement('td');
      const newAvatarImg = new Image(50, 50);
      newAvatarImg.src = data[i].Avatar;
      newAvatarTd.appendChild(newAvatarImg);
      newTr.appendChild(newAvatarTd);

      wrapperElement.appendChild(newTr);
    }
  }
  rootElement.appendChild(wrapperElement);
}

function replaceText(rootElement, data, prevData) {
  for (let j = 0; j < 100; j++) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== prevData[i]) {
        const children = rootElement.children[j * 10 + i].children;
        children[0].innerText = data[i].No;
        children[1].innerText = data[i].Name;
        children[2].firstChild.src = data[i].Avatar;
      }
    }
  }
}

function getOperationTime(cb) {
  const start = performance.now();
  cb();
  const end = performance.now();

  return end - start;
}

window.addEventListener('DOMContentLoaded', () => {
  const tableElement = document.getElementById('table');
  const tableBody = document.getElementById('data-table-body');
  const time = document.getElementById('time');
  const reButton = document.getElementById('re');
  const hreButton = document.getElementById('hre');
  const rtButton = document.getElementById('rt');
  const doEmptyButton = document.getElementById('doEmpty');
  const doFixedLayoutInput = document.getElementById('do-fixed-layout');
  let prevData = data;

  time.innerText = getOperationTime(() => createElementOneByOne(tableBody, data));

  doEmptyButton.addEventListener('click', () => {
    tableBody.innerHTML = '';
  });

  reButton.addEventListener('click', () => {
    const newData = shuffle([...data]);
    time.innerText = getOperationTime(() => createElementOneByOne(tableBody, newData));
    prevData = newData;
  });


  hreButton.addEventListener('click', () => {
    const newData = shuffle([...data]);
    time.innerText = getOperationTime(() => createElementAllAtOnce(tableBody, newData));
    prevData = newData;
  });

  rtButton.addEventListener('click', () => {
    const newData = shuffle([...data]);
    time.innerText = getOperationTime(() => replaceText(tableBody, newData, prevData));
    prevData = newData;
  });

  doFixedLayoutInput.addEventListener('change', (e) => {
    tableElement.style.tableLayout = e.target.checked ? 'fixed' : 'auto';
  });
});
