/* Стаите в планера. Направен с admin.html. Сложи този файл до Hideout-Planner.html. */
window.ROOMS_CONFIG={
 "version": 1,
 "rooms": [
  {
   "id": "base",
   "name": "Скривалищна База",
   "size": 3,
   "limit": 1,
   "boost": true,
   "gen": false,
   "desc": "Произвежда монети. Нивото ѝ определя максималното ниво на другите стаи и колко суперлепило и зеронит можеш да държиш.",
   "cat": "core"
  },
  {
   "id": "gen",
   "name": "Генераторна стая",
   "size": 1,
   "limit": 3,
   "boost": false,
   "gen": true,
   "desc": "Зарежда стаите вляво и вдясно от себе си: повече продукция и по-голям склад.",
   "cat": "gen"
  },
  {
   "id": "glue",
   "name": "Фабрика за Супер Лепило",
   "size": 1,
   "limit": 3,
   "boost": true,
   "gen": false,
   "desc": "Произвежда суперлепило, единият от двата ресурса за строеж.",
   "cat": "res"
  },
  {
   "id": "stone",
   "name": "Мина за зеронит",
   "size": 1,
   "limit": 3,
   "boost": true,
   "gen": false,
   "desc": "Добива зеронит, другият ресурс за строеж.",
   "cat": "res"
  },
  {
   "id": "xp",
   "name": "Стая на безкрайното познание",
   "size": 2,
   "limit": 2,
   "boost": true,
   "gen": false,
   "desc": "Произвежда опит (XP).",
   "cat": "res"
  },
  {
   "id": "work",
   "name": "Работилница",
   "size": 2,
   "limit": 1,
   "boost": true,
   "gen": false,
   "desc": "Изработва модификации за екипировката.",
   "cat": "prod"
  },
  {
   "id": "forge",
   "name": "Героична Ковачница",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Изработва предмети с ресурси от скривалището.",
   "cat": "prod"
  },
  {
   "id": "atk",
   "name": "Атак-о-бото Фабрика",
   "size": 1,
   "limit": 2,
   "boost": true,
   "gen": false,
   "desc": "Произвежда атакуващи ботове за нападения на чужди скривалища.",
   "cat": "war"
  },
  {
   "id": "def",
   "name": "Защит-о-бото Фабрика",
   "size": 1,
   "limit": 1,
   "boost": true,
   "gen": false,
   "desc": "Произвежда защитни ботове, които пазят скривалището.",
   "cat": "war"
  },
  {
   "id": "post",
   "name": "Защитен пост",
   "size": 2,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Защитава скривалището заедно със защитните ботове.",
   "cat": "war"
  },
  {
   "id": "store",
   "name": "Роботен Склад",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Увеличава колко атакуващи и защитни бота можеш да имаш.",
   "cat": "war"
  },
  {
   "id": "cbu",
   "name": "Подобрител на Бойни Бот Единици",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Вдига нивото и атрибутите на бойните ботове.",
   "cat": "war"
  },
  {
   "id": "robot",
   "name": "Подобрител на Работни Роботи",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Ускорява работния робот, който строи и разширява стаите.",
   "cat": "sup"
  },
  {
   "id": "spec",
   "name": "Брокерен център",
   "size": 2,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Намалява цената в монети за подобряване на стаите.",
   "cat": "sup"
  },
  {
   "id": "trade",
   "name": "Заменителна стая",
   "size": 2,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Обменя зеронит за суперлепило и обратното. На по-високите нива се обменят повече ресурси.",
   "cat": "sup"
  },
  {
   "id": "r42",
   "name": "Стая 42.0 Бета",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Повишава ефективността на Стаята на безкрайното познание.",
   "cat": "sup"
  },
  {
   "id": "cyber",
   "name": "Кибер Изследователска Лаборатория",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Подобрява основните умения и атрибутите на новите предмети.",
   "cat": "sup"
  },
  {
   "id": "troph",
   "name": "Трофейна зала",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Увеличава наградите от дуели и лигата.",
   "cat": "sup"
  },
  {
   "id": "club",
   "name": "Частен боен клуб",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Увеличава куража (дуели) и адреналина (лига).",
   "cat": "sup"
  },
  {
   "id": "bar",
   "name": "Спортен бар",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Увеличава опита от мисиите.",
   "cat": "sup"
  },
  {
   "id": "scout",
   "name": "Скаутски Център",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Увеличава наградите в монети от мисиите.",
   "cat": "sup"
  },
  {
   "id": "hq",
   "name": "Щаб на отбора",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Отключва отборни стаи.",
   "cat": "cus"
  },
  {
   "id": "room1",
   "name": "Плантация за дини",
   "size": 2,
   "limit": 1,
   "boost": true,
   "gen": false,
   "desc": "Произвежда дини, които можеш да ползваш за мятане по време на отборни битки.",
   "cat": "cus"
  },
  {
   "id": "room2",
   "name": "Централа за отборно състезание",
   "size": 1,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Събира фрагмени от Con точки",
   "cat": "cus"
  },
  {
   "id": "room3",
   "name": "Фабрика за медицински комплекти",
   "size": 2,
   "limit": 1,
   "boost": true,
   "gen": false,
   "desc": "Произвежда медицински комплекти",
   "cat": "cus"
  },
  {
   "id": "room4",
   "name": "Фитнес",
   "size": 2,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Намалява цената за точка умение във фитнеса с % в сравнение с покупката на точка за умение.",
   "cat": "cus"
  },
  {
   "id": "room5",
   "name": "Фабрика за ракетни бустери",
   "size": 2,
   "limit": 1,
   "boost": true,
   "gen": false,
   "desc": "Произвежда ракетни бустери от предмети, които вече не ти трявбат",
   "cat": "cus"
  },
  {
   "id": "room6",
   "name": "Продукция с дубльор за каскади",
   "size": 2,
   "limit": 1,
   "boost": false,
   "gen": false,
   "desc": "Произвежда дубльори за каскади",
   "cat": "cus"
  }
 ]
};
