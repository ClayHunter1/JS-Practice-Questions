const janeRecords = {
	name: 'Jane Doe',
    grade_level: 4,
    grades:  {
	    math: 100,
	    science: 90,
	    english: 75
    }
}

const johnRecords = {
	name: 'John Doe',
    grade_level: 5,
    grades:  {
	    math: 80,
	    science: 75,
	    english: 95
    }
}

const peterRecords = {
	name: 'Peter Griffin',
    grade_level: 6,
    grades:  {
	    math: 60,
	    science: 75,
	    english: 45
    }
}

const allRecords = [janeRecords, johnRecords, peterRecords];

const mathGrades = allRecords.map((record) => {
    return record.grades.math;
})

const scienceGrades = allRecords.map((record) => {
    return record.grades.science;
})

const englishGrades = allRecords.map((record) => {
    return record.grades.english;
})

function average(numbers) {
    let sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    let avg = sum / numbers.length;
    return avg;
}

const gradeLevelSix = grades.filter();

function printStats() {
    console.log(`Math Average: ${mathAverage}`, `Science Average: ${scienceAverage}`, `English Average: ${englishAverage}`)

    console.log()
}