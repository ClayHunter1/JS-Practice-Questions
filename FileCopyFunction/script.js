const dateObject = new Date();

const file = {
    title: 'Example File Title',
    author: 'John Smith',
    created_date: dateObject,
    text: 'example text'
}

console.log(file)

const copyFile = (file) => {
    const oldFileName = file.title;
    const newFileName = `Copy of ${oldFileName}`
    const currentTime = dateObject.getTime();
    return [newFileName, currentTime];
};

console.log(copyFile(file))