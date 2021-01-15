const GENRE = '../data/genre.json';
const RADIO = '../data/radio.json';

const getResource = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Error code ${res.status}`)
	}

	return res.json()
}

const getAllGenre = async () => {
	const res = await getResource(GENRE);

	return res.data.map(_transformGenre).slice(1,10)
}

const _transformGenre = (item) => {
	return {
		title: item.name,
		picture: item.picture
	}
}

const getAllRadio = async () => {
	const res = await getResource(RADIO);

	return res.data.map(_transformRadio)
}

const _transformRadio = (item) => {
	return {
		title: item.title
	}
}

const createGenreList = async () => {
	const dataItems = await getAllGenre();
	const radioList = await getAllRadio();

	dataItems.forEach((item, index) => {
		document.querySelector('.icons__play').innerHTML += `
        <li class="genre">
          <div> <img src="${item.picture}" alt="genre-pic"> </div>
          <p>${item.title}</p>
          <ul class="radio__list hide"></ul>
        </li>`;

		let genreItem = item;
		let genreIndex = index;

		radioList.forEach((item) => {
      let radioListAll = document.querySelectorAll('.radio__list');
      console.log(radioListAll);
			if (genreItem.title === item.title) {
				radioListAll[genreIndex].innerHTML +=`
            <li>
              <p>${item.title}</p>
            </li>`;
			}
		})
	})

	document.querySelectorAll('.genre').forEach((item) => {
		item.addEventListener('click', () => {
      item.querySelector('.radio__list').classList.toggle('hide');
		})
	})
}

createGenreList();
