import { toRaw } from "vue";
import {
  DAY_IN_MILLISEC,
  TAG_SEPARATOR,
  MONTH_IN_SEC,
  YEAR_IN_SEC,
  DAY_IN_SEC,
  HOUR_IN_SEC,
  MINUTE_IN_SEC,
} from "./constants";
import timeStatuses from "./enums/timeStatuses";
import taskStatuses from "./enums/taskStatuses";

// функция принимает строку с метками и разделять её на массив по определённому идентификатору:
export const getTagsArrayFromString = (tags) => {
  const array = tags.split(TAG_SEPARATOR);
  return array.slice(1, array.length);
};

// функция будет получать первым параметром срок выполнения задачи (дедлайн), сравнивать его с текущим временем и возвращать статус задачи по времени.
export const getTimeStatus = (dueDate) => {
  if (!dueDate) {
    return "";
  }
  const currentTime = +new Date();
  const taskTime = Date.parse(dueDate);
  const timeDelta = taskTime - currentTime;
  if (timeDelta > DAY_IN_MILLISEC) {
    return "";
  }
  return timeDelta < 0 ? timeStatuses.DEADLINE : timeStatuses.EXPIRED;
};

// Для работы нам также понадобится функция для нормализации задач, которые приходят с сервера.
// Нормализация — это преобразование структуры из одного формата в другой.
export const normalizeTask = (task) => {
  return {
    ...task,
    status: task.statusId ? taskStatuses[task.statusId] : "",
    timeStatus: getTimeStatus(task.dueDate),
  };
};

export const getImage = (image) => {
  // https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};

export const getTargetColumnTasks = (toColumnId, tasks) => {
  return tasks
    .filter((task) => task.columnId === toColumnId)
    .map((task) => toRaw(task));
};

export const addActive = (active, toTask, tasks) => {
  const activeIndex = tasks.findIndex((task) => task.id === active.id);
  if (~activeIndex) {
    tasks.splice(activeIndex, 1);
  }

  tasks.sort((a, b) => a.sortOrder - b.sortOrder);

  if (toTask) {
    const toTaskIndex = tasks.findIndex((task) => task.id === toTask.id);
    tasks.splice(toTaskIndex, 0, active);
  } else {
    tasks.push(active);
  }
  return tasks;
};

//  Функция создания даты в удобном для пользователя формате
export const getTimeAgo = (date) => {
  // Проверяем, если дата приходит в корректном формате
  if (isNaN(Date.parse(date))) {
    return "... время не указано ...";
  }
  const seconds = Math.floor((new Date() - Date.parse(date)) / 1000);
  function getFinalString(number, pronounce) {
    return `${number} ${pronounce} назад`;
  }
  // Определяем правильное окончание
  function getPronounce(number, single, pluralTwoFour, pluralFive) {
    return number === 1
      ? single
      : number > 1 && number < 5
      ? pluralTwoFour
      : pluralFive;
  }
  // Проверяем, если задача создана более года назад
  let interval = seconds / YEAR_IN_SEC;
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, "год", "года", "лет");
    return getFinalString(number, pronounce);
  }
  // Проверяем, если задача создана более месяца назад
  interval = seconds / MONTH_IN_SEC;
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, "месяц", "месяца", "месяцев");
    return getFinalString(number, pronounce);
  }
  // Проверяем, если задача создана более дня назад
  interval = seconds / DAY_IN_SEC;
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, "день", "дня", "дней");
    return getFinalString(number, pronounce);
  }
  // Проверяем, если задача создана более часа назад
  interval = seconds / HOUR_IN_SEC;
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, "час", "часа", "часов");
    return getFinalString(number, pronounce);
  }
  // Проверяем, если задача создана более минуты назад
  interval = seconds / MINUTE_IN_SEC;
  if (interval > 1) {
    const number = Math.floor(interval);
    const pronounce = getPronounce(number, "минуту", "минуты", "минут");
    return getFinalString(number, pronounce);
  }
  return "сейчас";
};

// Эта функция получит дату в необработанном формате и вернёт в читаемом формате: dd.mm.yyyy.
export const getReadableDate = (date) => {
  if (isNaN(Date.parse(date))) return "";
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  return `${day}.${month + 1}.${year}`;
};

// Функция для создания уникального ID
export const createUUIDv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const createNewDate = () => {
  return new Date(new Date().setHours(23, 59, 59, 999));
};
