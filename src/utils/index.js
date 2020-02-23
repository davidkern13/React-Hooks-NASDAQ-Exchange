/*
* createStringFromObject Return string of quotes
* @param {obj} - object of checked items
* @return {string} - string of quotes to request
*/
export const createStringFromObject = (obj) => {
     return Object.keys(obj).reduce((result, item, key, arr) => {
            const string = arr.length - 1 === key ? item : item + ',';
            return obj[item] ? result += string : result;
     }, "");
}