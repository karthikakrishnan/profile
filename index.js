 
function myFunction() {
    var personalInfo = {
        firstName: 'Mahima',
        lastName: 'Dhomane',
        age: '21',
        city: 'Chennai',
    }
    var nomineeInfo = {
        firstName: 'Karthika',
        lastName: 'Krishnan',
        age: '31',
        city: 'Chennai',
    }
    // Before destructuring
    console.log(personalInfo.firstName)
    console.log(personalInfo.lastName)
    console.log(personalInfo.age)
    console.log(personalInfo.city)

    // Object destructuring
    const { firstName, lastName, age, city } = personalInfo
    console.log(lastName)
    console.log(firstName)
    console.log(age, city)

    // Object alias name. renaming properties.
    const { firstName:nomineeFirstName, lastName:nomineeLastName } = nomineeInfo 
    console.log(nomineeFirstName)
    console.log(nomineeLastName)
}

function checkScope() {
    const contactInfo = {
        phNo: '7708187365',
        email: 'kk@gmail.com'
    }
    // Trying to access a variable outside of its scope.
    console.log(personalInfo)
}