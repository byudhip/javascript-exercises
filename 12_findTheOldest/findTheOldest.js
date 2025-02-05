const findTheOldest = function (people) {
    return people.reduce((oldest, person) => {
        let currentYear = new Date().getFullYear();
        let personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
