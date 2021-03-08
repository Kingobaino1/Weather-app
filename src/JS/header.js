const head = () => {
  const containerDiv = document.createElement('div');
  containerDiv.className = 'd-flex justify-content-between m-5';

  const title = document.createElement('h1');
  title.className = 'text-white font-weight-bold';
  title.textContent = 'WEATHER APP';

  const search = document.createElement('div');
  search.className = 'd-flex';

  const text = document.createElement('input');
  text.setAttribute('type', 'search');
  text.setAttribute('placeholder', 'City name');
  text.className = 'text_head align';
  const span = document.createElement('span');
  const searchIcon = document.createElement('i');
  searchIcon.className = 'fas fa-search text-dark m-4';

  const toggle = document.createElement('div');
  toggle.className = 'd-flex m-2';

  const switchLabel = document.createElement('label');
  switchLabel.className = 'switch';

  const switchBtn = document.createElement('input');
  switchBtn.setAttribute('type', 'checkbox');

  const div = document.createElement('div');
  div.className = 'slider round';

  span.appendChild(searchIcon);
  switchLabel.append(switchBtn, div);
  toggle.append(switchLabel);
  search.append(span, text);
  containerDiv.append(title, search, toggle);

  return {
    containerDiv,
    switchBtn,
    text,
  };
};

export default head;
