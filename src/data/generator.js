import { categories, priorities, texts } from './constants';

function getRandom(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

function generateNotification() {
  const category = categories[getRandom(0, categories.length - 1)];
  const priority = priorities[getRandom(0, priorities.length - 1)];
  const text = texts[getRandom(0, texts.length - 1)];

  return { category, priority, text };
}

function generateReadNotification() {
  const unreadNotification = generateNotification();
  return { ...unreadNotification, isRead: true, readOn: new Date() };
}

function generateNotifications(count) {
  const notificationsBuffer = [generateNotification()];

  for (let i = 0; i < count - 1; i += 1) {
    if (Math.random() > 0.5) {
      notificationsBuffer.push(generateReadNotification());
    } else {
      notificationsBuffer.push(generateNotification());
    }
  }

  return notificationsBuffer;
}

export default generateNotifications;
