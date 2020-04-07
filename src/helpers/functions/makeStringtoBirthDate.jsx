export default function makeStringtoBirthDate(birthDateString) {
  var birthday =
    birthDateString.slice(0, 4) +
    '-' +
    birthDateString.slice(4, 6) +
    '-' +
    birthDateString.slice(6, 8);
  return birthday;
}
