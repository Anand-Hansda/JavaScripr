const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Anand"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "anandkh053@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Anand",
            lastname: "Hansda"
        }
    }
}

// console.log(regularUser);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {1: "a", 2: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}

// console.log(obj3);



// console.log(`Hay my name is ${regularUser.fullname.userfullname.firstname} ${regularUser.fullname.userfullname.lastname} and my email is ${regularUser.email}`);

// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Anand"

}


const {courseInstructor} = course
console.log(courseInstructor);


// const navbar = ({company}) => {

// }
// navbar(company = "Anand")
// console.log(navbar);



