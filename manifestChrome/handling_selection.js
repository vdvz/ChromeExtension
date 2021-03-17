let answers = new Map();
let target = [];

let savedHtmlFooter = "";
let present = false;
let targetHTMLel;

initMap();

document.addEventListener("keydown", function onPress(e){
	
	if(e.ctrlKey && e.keyCode == 67){		
		getSelectionText();
	}
	
	if(e.ctrlKey && e.shiftKey){
		showAnswers();
	}
	
	if(e.ctrlKey && e.altKey){
		hideAnswers();
	}
	
});

function initMap(){
	targetHTMLel = document.getElementsByTagName("header");
	if(targetHTMLel.length == 0){
		targetHTMLel = document.getElementsByTagName("footer")[0];
	}else{
		targetHTMLel = document.getElementsByTagName("header")[0];
	}
	
	answers.set(["за", "какое", "количество", "обращений", "к", "диску", "можно", "найти", "запись", "в", "файле", "с", "организацией", "в", "виде", "в-дерева", "", "если", "известно", "что"],'За какое количество обращений к диску можно найти запись в файле с организацией в виде "В-дерева", если: основной файл состоит из n = 70 000 записей, блок основного файла содержит е = 7 записей, блок индексного файла содержит d = 10 записей | 4');
	answers.set(["отметьте", "термины", "относящиеся", "к", "логическим", "компонентам", "вычислительной", "системы"], 'Термины, относящиеся к логическим компонентам вычислительной системы | ОC,Вирт.память,Диспетчер логических томов,ФC');
	answers.set(["отметьте", "набор", "характеристик", "свойственных", "raid", "1+0"], 'Отметьте набор характеристик, свойственных RAID 1+0 | Мин. кол-во дисков = 4, Нет диска четности, Массив восстанавливается при потере 2 дисков (из одной половины зеркала), Массив восстанавливается при потере 1 диска, Для каждой операции записи нового блока нужно 4 обращения к дискам');
	answers.set(["отметьте", "базовые", "понятия", "модели", "внешней", "памяти"],'Отметьте базовые понятия модели внешней памяти | запись, ключ, файл, блок, поле');
	answers.set(["отметьте", "этапы", "оптимизации", "запросов"],'Отметьте этапы оптимизации запросов | Преобразование запроса во внутреннюю форму,Преобразование в каноническую форму,Выбор потенциальных низкоуровневых процедур,Генерация планов вычисления запроса и выбор плана с наименьшими затратами');
	answers.set(["какую", "структуру", "называют", "вторичным", "индексом", "по", "некоторому", "полю", "записи"],'Какую структуру называют вторичным индексом по некоторому полю записи | Структура, устанавливающая связь между значениями домена и множеством записей файла');
	answers.set(["отметьте", "способы", "хранения", "записей", "с", "переменной", "длинной"],'Отметьте способы хранения записей с переменной длинной | Метод зарезервированного пространства, Метод указателей, Комбинированный метод');
	answers.set(["отеметьте", "методы", "повышения", "эффективности", "дисковых", "операций"],'Отеметьте методы повышения эффективности дисковых операций | Группирование данных по цилиндрам диска,Использование нескольких дисковых устройств,Создание зеркальных копий дисков,Применение алгоритма лифта,Предварительное считывание');
	answers.set(["какой", "алгоритм", "используется", "при", "поиске", "записи", "в", "файле", "разреженный", "индекс"],'Какой алгоритм используется при поиске записи в файле "Разреженный индекс" | дихотомия');
	answers.set(["чем", "характеризуется", "программное", "обеспечение", "как", "услуга"],'Чем характеризуется программное обеспечение как услуга | Приложения, предоставляемые по модели SaaS, работают в облаке и обычно не требуют установки на конечных устройствах., Пользователь не может управлять базовой облачной инфраструктурой, Пользователь может ограниченно влиять на пользовательские настройки конфигурации приложений');
	answers.set(["выберите", "оптимальный", "вариант", "реализации", "запроса", "select", "bc", "from", "r", "s", "where", "a&gt;100", "and", "c=d", "где", "r", "и", "s", "-", "отношения", "r(ab)", "s(cd)"],'Select B,C_FROM R, S_WHERE A>100 AND C=D_где R и S - отношения, R(A,B),  S(C,D) | .B,C (.A>100 (R) . .C=D (S))');
	answers.set(["отметьте", "набор", "характеристик", "которые", "не", "соответствуют", "raid", "5"],'Отметьте набор характеристик, которые не соответствуют RAID 5 | Минимальное количество дисков = 4, Минимальное количество дисков = 2, Имеется выделенный диск четности, Массив восстанавливается при потере 2 дисков, Для каждой операции записи нового блока нужно 2 обращения к дискам');
	answers.set(["за", "какое", "максимальное", "количество", "обращений", "к", "диску", "можно", "найти", "запись", "в", "индексном", "файле", "если", "известно", "что", "файл", "содержит", "64", "блока"],'За какое максимальное количество обращений к диску можно найти запись в индексном файле, если известно, что файл содержит 64 блока | 6');
	answers.set(["поставьте", "в", "соответствие", "соединения", "и", "протокол", "используемый", "для", "этого", "соединения"],'Поставьте в соответствие соединения и протокол, используемый для этого соединения | Высокоскоростное соединение между вычислительной системой и системой хранения → FC, Соединение CPU -> RAM → PCI, Соединение для подключения жестких и оптических дисков  → IDE/ATA');
	answers.set(["отметьте", "термины", "относящиеся", "к", "стратегиям", "оптимизации", "запросов"],'Отметьте термины относящиеся к стратегиям оптимизации запросов | Выполнять операции селекции по возможности раньше, Сортировка файлов перед операцией соединения, Индексирование файлов перед операцией соединения, Собирать в каскады селекции и проекции');
	answers.set(["укажите", "основные", "компоненты", "центров", "обработки", "данных"]	,'Укажите основные компоненты ЦOД | Мониторинг, Отчетность, Выделение ресурсов, Планирование, Обслуживание');
	answers.set(["отметьте", "набор", "характеристик", "свойственных", "raid", "1"],'Отметьте набор характеристик, свойственных RAID 1 | Минимальное количество дисков = 2, Нет диска четности, Массив восстанавливается при потере 1 диска, Для каждой операции записи нового блока нужно 2 обращения к дискам');
	answers.set(["отметьте", "ключевые", "характеристики", "центра", "обработки", "данных"],'Отметьте ключевые характеристики центра обработки данных | Доступность, Безопасность, Емкость, Масштабируемость, Производительность, Целостность данных, Управляемость');
	answers.set(["сопоставьте", "набор", "характеристик", "и", "наименование", "вычислительной", "платформы"],'Сопоставьте набор характеристик и наименование вычислительной платформы |  вторая вычислительная платформа → Распределенная архитектура приложений, клиент- серверное взаимодействие с вычислителем., первая вычислительная платформа → Централизованное размещение приложений и баз данных Вычислители - мейнфреймы, подключение к вычислителям через терминалы., третья вычислительная платформа → Облачные хранилища и вычислительные услуги, большие данные, мобильные технологии и социальные сети');
	answers.set(["укажите", "цифрой", "число", "бит", "которое", "нужно", "отвести", "под", "контрольную", "сумму", "чтобы", "вероятность", "незамеченной", "ошибки", "была", "равна", "1/128"],'Укажите цифрой число бит, которое нужно отвести под контрольную сумму, чтобы вероятность незамеченной ошибки была равна 1/128 | 7');
	answers.set(["отметьте", "типы", "устройств", "используемых", "для", "долговременного", "хранения", "данных"],'Отметьте типы устройств, используемых для долговременного хранения данных | Магнитный диск,Твердотельный диск,Магнитный ленточный накопитель,Оптический диск');
	answers.set(["в", "каком", "порядке", "осуществляется", "доступ", "к", "файлу", "куча", "при", "редактировании", "записи"],'В каком порядке осуществляется доступ к файлу "КУЧА" при редактировании записи | последовательно');
	answers.set(["укажите", "уровни", "ит", "инфраструктуры", "центра", "обработки", "данных"],'Укажите уровни ИТ инфраструктуры центра обработки данных | Физические компоненты, Виртуальные компоненты, Программно-определяемые компоненты, Оркестрация, Услуги');
	answers.set(["укажите", "методы", "поиска", "по", "неключевым", "полям"],'Укажите методы поиска по неключевым полям | Формирование множественных вторичных индексов, Применение функций раздельного хэширования');
	answers.set(["за", "какое", "максимальное", "количество", "обращений", "к", "диску", "можно", "найти", "запись", "в", "хэш", "файле", "если"],'За какое максимальное количество обращений к диску можно найти запись в "ХЭШ файле", если таблица участков умещается в оперативной памяти,каждый участок, содержит не более 3 блоков | 4');		
	
}

function showAnswers(){
	if(!present){
		targetHTMLel.getElementsByTagName("div")[0].innerHTML = savedHtmlFooter;
		present = true;
	}
}

function hideAnswers(){
	if(present){
		savedHtmlFooter = targetHTMLel.getElementsByTagName("div")[0].innerHTML;
		targetHTMLel.getElementsByTagName("div")[0].innerHTML = "";
		present = false;
	}
}

function getSelectionText() {
	var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
		
	if(text == "") return;
	
	let arrStr = text.replace(/\s+/g, ' ').replace(/[,\.?"]/g ,'')
	.toLowerCase().trim().split(' ');

	clearTarget();
	
	answers.forEach((value, key) => {
		if(arrStr.every((a1=element) => key.some( (a2 = element) => a2.includes(a1))
		)){
			target.push(value);
		}
	})

	createFooter();
}

function createFooter(){
	present = true;
	let final_str = ""
	target.forEach((value) => {
		final_str+=value + '<br>';
	})
	
	targetHTMLel.getElementsByTagName("div")[0].innerHTML = final_str;
	console.log(final_str);
}

function clearTarget(){
	target = [];
}