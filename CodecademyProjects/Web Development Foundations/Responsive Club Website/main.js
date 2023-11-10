const howOld = (age, year) => {
  let currentYear = new Date();
  currentYear = currentYear.getFullYear();
  
  let yearDifference = year - currentYear;
  let newAge = age + yearDifference;
  let birthDate = currentYear - age;
  
  if (newAge > age) {
    console.log(`You will be ${newAge} years in the year ${year}`);
  } else if (newAge < 0) {
    console.log(`In the year ${year} it took ${-newAge} years for you to be born`);
  } else if (birthDate === year) {
    console.log(`You were born in the year ${year}`);
  } else {
    console.log(`You were ${newAge} in the year ${year}`);
  }
};

howOld(19, 2025);