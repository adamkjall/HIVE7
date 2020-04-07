const calculateBirthdate = birthday => {
  var ageInMilliSeconds = new Date() - new Date(birthday).getTime();
  var milliSecondsInYear = 3.15576e10;

  const age = Math.floor(ageInMilliSeconds / milliSecondsInYear);

  return age;
};

export default function Age(birthDateString) {
  return calculateBirthdate(birthDateString);
}
