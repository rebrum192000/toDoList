let todoList = [
	"Бильярд","Боулинг","Веревочный парк","Тир","Коньки","Картинг","Сквош","Танцы","Йога/Медитация","Большой теннис","Настольный теннис","Бадминтон","Лыжи","Аэротруба","Скалолазание","Стрельба из лука","Велосипеды","Батуты","Теннис","Аренда танцевальных залов","Аренда музыкальных студий","Игры в Gaga","Планетарий","Кино","Концерт группы","Музей","Инструментальный концерт","Спектакль","Выставка","Лекции","Мастер","Парк аттракционов","Настольные игры","Походы в кафе/рестораны","Отель","Массаж","Самостоятельная фотосессия","Совместная готовка (торт, пельмени)","Читать книги по ролям","Прогулка по ТРЦ","Макияж друг другу (+ аквагрим)","Игры в PS4","Рыбалка","Пикник с корзинкой и скатертью","Рассвет и закат в красивом месте","Дуэт в караоке","В лес за грибами и ягодами","Лодка в парке","Конная прогулка","Пойти на футбол, хоккей и тд","Путешествие на выходные","Готовка варенья, консервации","Совместный спорт","Изучение ин. Языка","Картина по номерам","Спа","Принять ванную с пеной","Посмотреть сериал","Совместная беседа","Баня/Сауна","Плавание на лодке","Шашлыки","Походы с палаткой","Походы в горы","Шитье/вязание","Игра на муз. Инструментах / пение","Лепка/Скульптура","Озвучивание видео и фильмов","Поделки по дереву/Выжигание","Валяние/Канзаши/Изографика/Квиллинг","Торты/Конфеты/Шоколад","Мыло/Свечи ручной работы","Бисероплетение/Печворкинг/Амигуруми","Бижутерия","Мебель","Написание книги","Дизайн одежды/интерьера/архитектура","Каллиграфия","Составление букетов/Гербарий","Пазлы","Балансировка камней","Анимация","Рисование песком","Садоводство/Строительство","Косплей","Ролики","Ночные прогулки","Путешествия (Европа, Россия, горы, море)","Водный трамвайчик/Экскурсии по городу","Водоход/Автобусный тур/Паром","Участия во флешмобах (ролики, бег, вел)","Посиделки с семьей/друзьями","Участие в соревнованиях, конкурсах","Красота и уход","Работа в коворкинге/кафе","Знакомство с парочками","Переезд на месяц/более","Посещать крутые места","Жечь костер/печку/камин","Купить собаку/кошку","Моделирование и шитье одежды","Психология, НЛП","Участие в благотворительных проектах","Изучение культуры других стран","Археологические раскопки","Сбор клбуники, урожая у фермеров","Фотошоп, дизайн, компьютерная графика","Игра в театре, сценическое искусство","Конструирование","Рисование красками/карандашами"
];

function getTodo() {
	let uniqueArr = [...chooseTodo()];

	const todoDivs = document.querySelectorAll('.todoDiv');	

	for (let i = 0; i < todoDivs.length; i++) {
		todoDivs[i].textContent = uniqueArr[i];
	}
	
};

function chooseTodo() {

	let setFromTodoList = new Set();
	for (let i = 0; i < 15; i++) {
		setFromTodoList.add(todoList[Math.floor(Math.random() * todoList.length)]);
	}
	return setFromTodoList;
}

const todoButton = document.querySelector('.todoButton');
todoButton.addEventListener('click', getTodo);


let toggleBtn = document.querySelector('.allActivities_toggleBtn');
const allActivities = document.querySelector('.allActivities');	
let buttonsDiv = document.querySelector('.buttons');
let hideBtn = document.createElement('button');
let showBtn = document.createElement('button');
let liked = document.querySelector('.liked');

toggleBtn.addEventListener('click', function() {
	let olElem = document.createElement('ol');
	allActivities.appendChild(olElem);

	for (let elem of todoList) {
		let liElem = document.createElement('li');
		olElem.appendChild(liElem);
		liElem.innerText = elem;	
		
		liElem.addEventListener('click', function() {
			liked.appendChild(liElem);
		})
	}

	toggleBtn.style.display = 'none';

	buttonsDiv.appendChild(hideBtn);
	hideBtn.innerText = 'Скрыть все активности';

	buttonsDiv.appendChild(showBtn);
	showBtn.innerText = 'Показать все активности';
	showBtn.style.display = 'none';


}, {once: true})

hideBtn.addEventListener('click', function() {
	allActivities.style.display = 'none';
	showBtn.style.display = 'block';
	hideBtn.style.display = 'none';
})

showBtn.addEventListener('click', function() {
	allActivities.style.display = 'block';
	showBtn.style.display = 'none';
	hideBtn.style.display = 'block';

})

