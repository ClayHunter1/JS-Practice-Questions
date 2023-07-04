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

const mathScores = [janeRecords.grades.math,johnRecords.grades.math,peterRecords.grades.math]
const scienceScores = [janeRecords.grades.science,johnRecords.grades.science,peterRecords.grades.science]
const englishScores = [janeRecords.grades.english,johnRecords.grades.english,peterRecords.grades.english]

function average(numbers) {
    let sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    let avg = sum / numbers.length;
    return avg;
}

const mathAverage = average(mathScores);
const scienceAverage = average(scienceScores);
const englishAverage = average(englishScores);

function printStats() {
    return
    [math = mathAverage,science = scienceAverage,english = englishAverage]
}