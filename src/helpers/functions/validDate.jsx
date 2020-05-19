const makeStringtoDate = birthDateString => {
  var birthday =
    birthDateString.slice(0, 4) +
    '-' +
    birthDateString.slice(4, 6) +
    '-' +
    birthDateString.slice(6, 8);
  return birthday;
};
import calculateAge from '../functions/calculateAge.jsx';
export default function isValidDate(birthDateString) {
  var dateString = makeStringtoDate(birthDateString);

  var regEx = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
  if (dateString.match(regEx)) {
    var validDate = dateString.match(regEx);
    let age = calculateAge(validDate[0]);
    if (age > 140 || age < 18) {
      return 'Not valid age';
    } else {
      return validDate[0];
    }
  } else {
    return 'Not valid date';
  }
}
