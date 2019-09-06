export const getNoteTitle = body => {
  if (body.length <= 10) {
    return body;
  }
  return `${body.substr(0, 10)}...`;
};

export const searchInNotesArray = (array, keyword) =>
  array.filter(item => item.body.toLowerCase().includes(keyword.toLowerCase()));

export const deleteFromArray = (array, itemId) =>
  array.filter(item => item.id !== itemId);

export const filterCategoryItems = (array, item) =>
  array.filter(i => i.categoryId === item.id);

export const updateArray = (array, object) =>
  array.map(item => {
    if (item.id === object.id) {
      item = { ...item, ...object };
    }
    return item;
  });

export const getNow = () => {
  const now = new Date();
  let day = now.getDate();
  let month = now.getMonth() + 1; //January is 0!
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return `${year}-${month}-${day} ${hour}:${minute}`;
};
