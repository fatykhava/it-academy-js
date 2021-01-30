import {getAllRadio} from "../utils/getDataMusic";

const createRadioList = async () => {
    const dataItems = await getAllRadio();
    /* console.log(dataItems); */
    let list = '';
  
    dataItems.forEach((item, index) => {
      list += `
            <li>
            <a href="#/${item.id}">
            <div class="item__playing" href="#/${item.id}">
              <div>
                <i class="material-icons large item__play">library_music</i>
                <div class="play__tumbler">
                  <i class="material-icons large item__play__music">play_arrow</i>
                </div>
              </div>
            </div>
  
            <p>${item.title}</p>
            </a>
          </li>
      `
    })

    return list;
  }


export {createRadioList};