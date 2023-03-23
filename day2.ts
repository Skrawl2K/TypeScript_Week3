//! -------------------------------------- Aufgabe 1 & 2 ---------------------------------
// Define a type "NameBirthday1" which is an array of two values, first a string name and second a Date object containing the birthdate
type NameBirthday1 = [name: string, birthday: Date];

// Define a function "daysUntil2" that takes in a "NameBirthday1" parameter and returns a number specifying how many milliseconds are left until the next birthday
function daysUntil1(nameBirthday1: NameBirthday1): number {
    // Array destructuring to extract the 'name' and 'birthday' variables from the tuple
    const [name, birthday] = nameBirthday1;

    // Create a new Date object representing today's date
    const today = new Date();

    // Create a new Date object representing the next birthday by setting the year to be the current one if the birthday hasn't passed yet, otherwise we set it to be the next year
    const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    // Calculate the number of milliseconds per day
    const msPerDay = 1000 * 60 * 60 * 24;

    // Calculate the number of milliseconds until the next birthday by finding the difference between the two dates using getTime() method
    const msUntil = nextBirthday.getTime() - today.getTime();

    // Return the calculated value (in milliseconds)
    return msUntil;
}

// Call the "daysUntil2" function passing in an array of ["Kevin", new Date("1992-08-10")] as argument 
console.log("Aufgabe 2: ", daysUntil1(["Kevin", new Date("1990-08-10")]));


//! -------------------------------------- Aufgabe 3 --------------------------------------

// Define a type "NameBirthday" which is an array of two values, first a string name and second a Date object containing the birthday
type NameBirthday2 = [name: string, birthday: Date];

// Define a function "daysUntil" that takes in a "NameBirthday" parameter and returns a number specifying how many milliseconds are left until the next birthday
function daysUntil2(nameBirthday: NameBirthday2): number {
    // Array destructuring to extract the 'name' and 'birthday' variables from the tuple
    const [name, birthday] = nameBirthday;

    // Create a new Date object representing today's date
    const today = new Date();

    // Create a new Date object representing the next birthday by setting the year to be the current one if the birthday hasn't passed yet, otherwise we set it to be the next year
    const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    // Calculate the number of milliseconds per day
    const msPerDay = 1000 * 60 * 60 * 24;

    // Calculate the number of milliseconds until the next birthday by finding the difference between the two dates using getTime() method
    const msUntil = nextBirthday.getTime() - today.getTime();

    // Return the calculated value (in milliseconds)
    return msUntil;
}

// Define an array of "NameBirthday" objects
const nameBirthdays: NameBirthday2[] = [
    ["Kevin", new Date("1990-08-10")],
    ["Alice", new Date("1995-12-05")],
    ["Bob", new Date("1998-03-20")]
];

// Create an empty array to store the results
const results: { name: string, msUntil: number }[] = [];

// Call the "daysUntil" function for each "NameBirthday" object and store the result in the "results" array
for (const [name, birthday] of nameBirthdays) {
    const msUntil = daysUntil2([name, birthday]);
    results.push({ name, msUntil });
}

// Display the results
console.log("Aufgabe 3: ", results);

//! -------------------------------------- Aufgabe 3 --------------------------------------
// Definieren eines Typs für NameBirthday-Tupel
type NameBirthday3 = {
    name: string;
    birthday: Date;
};

// Die Funktion nimmt ein Array von NameBirthday-Tupeln entgegen und gibt den Namen der Person zurück, die als nächstes Geburtstag hat
function getNextBirthdayName(persons: NameBirthday3[]): string | null {
    // Erstellen eines Date-Objekts für den heutigen Tag
    const today = new Date();
    // Initialisieren von Variablen für das nächste Geburtsdatum und den Namen der Person mit den Standardwerten null
    let closestBirthday: Date | null = null;
    let closestName: string | null = null;

    // Durchlaufen der übergebenen Personen
    for (const { name, birthday } of persons) {
        // Erstellen eines Date-Objekts für das nächste Geburtsdatum unter Berücksichtigung des aktuellen Jahres
        const nextBirthday = new Date(birthday);
        nextBirthday.setFullYear(today.getFullYear());
        // Wenn das nächste Geburtsdatum bereits in der Vergangenheit liegt, wird es um ein Jahr verschoben
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        // Vergleichen des aktuellen nächstes Geburtsdatums mit dem bisher am nächsten zum heutigen Tag liegenden Geburtsdatum
        if (!closestBirthday || nextBirthday < closestBirthday) {
            // Wenn das aktuelle nächste Geburtsdatum näher am heutigen Tag liegt, werden das nächste Geburtsdatum und der Name der Person aktualisiert
            closestBirthday = nextBirthday;
            closestName = name;
        }
    }

    // Rückgabe des Namens der Person mit dem nächsten Geburtstag oder null, wenn keine Person im Array vorhanden ist
    return closestName;
}

const persons: NameBirthday3[] = [
    { name: 'Alice', birthday: new Date('1990-04-15') },
    { name: 'Bob', birthday: new Date('1985-11-21') },
    { name: 'Charlie', birthday: new Date('2000-01-01') },
];

const nextBirthdayName = getNextBirthdayName(persons);
console.log(`Aufgabe 4 : The next birthday is for ${nextBirthdayName}`);





export { }