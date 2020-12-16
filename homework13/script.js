const avatarContainer = document.querySelector('#smile');
const userForm = document.querySelector('#start-question');
let userData = ['Max', 'avatar'];
const questionBox = document.querySelector('#box-questions');
const questionForm = document.querySelector('.quiz-form');
const correctAnswers = ['B', 'D', 'B', 'A', 'C', 'B', 'B', 'A'];
const result = document.querySelector('.quiz__heading');
let timeSec = 0;
let timeMin = 0;

avatarContainer.addEventListener('click', function (e) {
  if (document.querySelectorAll('.show')) {
    document.querySelectorAll('.show').forEach(function (item) {
      item.className = 'item';
    })
  }

  if (e.target.tagName === 'INPUT') {
    e.target.previousElementSibling.firstElementChild.classList.add('show');
  }
  //e.preventDefault(); // отмена браузерных событий по умолчанию
})

function timer() {
  timeSec++;

  if (timeSec > 59) {
    timeMin++;
    timeSec -= 60;
  }

  if (result.classList.contains('quiz__heading')) {
    setTimeout(timer, 1000);
  }
}

userForm.addEventListener('submit', function (e) {
  const activeAvatar = document.querySelector('input[name="question2"]:checked');
  userData = [
    userForm.question1.value,
    activeAvatar.previousElementSibling.firstElementChild.src
  ]
  questionBox.classList.remove('quiz');
  userForm.classList.add('quiz');

  scrollingUp();

  e.preventDefault();

  timer();
})

questionForm.addEventListener('submit', function (e) {
  const userInfo = document.querySelector('.name__user');
  let count = 0;
  let startResult = 0;
  e.preventDefault();

  const userAns = [
    questionForm.q1,
    questionForm.q2,
    questionForm.q3,
    questionForm.q4,
    questionForm.q5,
    questionForm.q6,
    questionForm.q7,
    questionForm.q8
  ]

  const step = 100 / userAns.length;

  function addClass(value, className) {
    for (let i = 0; i < value.length; i++) {
      if (value[i].checked) {
        value[i].parentElement.classList.add(className);
      }
    }
  }

  userAns.forEach(function (item, index) {
    if (item.value === correctAnswers[index]) {
      count += step;
      addClass(item, 'correct');
    } else {
      addClass(item, 'wrong');
    }
  })

  scrollingUp();

  result.classList.remove('quiz__heading');
  userInfo.innerHTML = `${userData[0]} <img src="${userData[1]}" alt="user"> Your time : ${timeMin} min ${timeSec} sec, Your result: `;

  const getResult = setInterval(function () {
    userInfo.nextElementSibling.innerHTML = ` ${startResult}%`;
    if (startResult === count) {
      clearInterval(getResult);
    } else {
      startResult += step;
    }
  }, 20)
})

function btnEventListener(e) {
  const questArr = document.querySelectorAll('.quiz-form__quiz');
  let openQuest;
  let quest;

  questArr.forEach((v) => {
    if (!(v.classList.contains('hide'))) {
      openQuest = v;
    }
  });

  let numberOpenQuest = openQuest.dataset.questNumber;

  if (e.target.id === 'next-btn') {
    quest = document.querySelector(`[data-quest-number="${++numberOpenQuest}"]`);
  } else {
    quest = document.querySelector(`[data-quest-number="${--numberOpenQuest}"]`);
  }

  openQuest.classList.add('hide');
  quest.classList.remove('hide');

  if(numberOpenQuest > 1) {
    document.querySelector('#prev-btn').classList.remove('hide');
  } else {
    document.querySelector('#prev-btn').classList.add('hide');
  }

  if (numberOpenQuest === questArr.length) {
    document.querySelector('#next-btn').classList.add('hide');
    document.querySelector('#quest-submit').classList.remove('hide');
  } else {
    document.querySelector('#next-btn').classList.remove('hide');
    document.querySelector('#quest-submit').classList.add('hide');
  }
}

document.querySelector('#next-btn').addEventListener('click', btnEventListener);
document.querySelector('#prev-btn').addEventListener('click', btnEventListener);

function scrollingUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
