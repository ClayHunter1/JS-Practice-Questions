# JS Practice Questions

## Question 1

### The file copy function

Say that our database stores files in the following object format:
Const file = {
	title: ‘Example File Title’,
author: ‘John Smith’,
created_date: JS Date Object,
text: ‘example text’
}

Your goal is to:
- Write an arrow function named copyFile
- copyFile should accept (file) as it’s parameter
- You can expect file to be an object in the format specified above
- copyFile should return a file with the following changes:
- copyFile should change the title to be: ‘Copy of <original title name>’
- copyFile should update the created_date to be the current time.
- Write a file that creates some test data, runs the copy function on the test data, and then log both the original and copied file to ensure that the   function worked how you expected.

## Question 2

### The class statistics function

Say that our database stores academic records for middle school in the following format:
{
	name: ‘Jane Doe’,
grade_level: 4,
grades:  {
	math: 100,
	science: 90,
	english: 75
}
}

- The options for grade_level will be 4,5,6.
- Write a function that accepts an array of academic records
- The function should console.log the following statistics
Average score for each course
Overall
By grade_level
- Write test data to test this function
- Write a file that creates the test data, and then runs the function. Ensure that the values are correct!
