const setup = () => {
    let student = {};
    student.firstName = "John";
    student.LastName = "Doe";
    student.age = new Date(2000,1,1);
    student.eyeColor = "blue";

    console.log(student.firstName);
    //betere versie!
    let student1 = {
        firstName: "John",
        LastName: "Doe",
        age: new Date(2000,1,1),
        eyeColor: "blue"
    }

    console.log(student1.firstName);

    let tekst = JSON.stringify(student);
    console.log(tekst);

    //uitbreiding
    let student2 = {
        firstName: "John",
        lastName: "Doe",
        adress: {
            zipCode: 8500,
            city: "Kortrijk"
        }
    }

    let text = JSON.stringify(student2);
    console.log(text);
}
window.addEventListener("load", setup);