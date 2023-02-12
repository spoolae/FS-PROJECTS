const user = {
  id: 1,
  privateInfo: {
    fname: "Brad",
    sname: "Pitt",
    bday: {
      day: 18,
      month: 12,
      year: 1963,
    },
    children: ["Helen", "Alex", "Georg", "Anna"],
  },
  contactInfo: {
    phone: {
      work: "123-12-45",
      mobile: "005-002-003",
    },
    adress: {
      town: "ZP",
      street: "12 Avenu",
      house: 45,
    },
    mail: "brad@gmail.com",
  },
  profession: "Actor",
};

const {
  id,
  privateInfo: {
    fname,
    sname,
    bday: { day: birthDay, month: birthMonth, year: birthYear },
    children,
  },
  contactInfo: {
    phone: { work: workPhone, mobile: mobilePhone },
    adress: { town, street, house },
    mail,
  },
  profession,
} = user;

console.log("Id: " + id);
console.log("First name: " + fname);
console.log("Surname: " + sname);
console.log("Birthday: " + birthDay + "/" + birthMonth + "/" + birthYear);
console.log("Children: " + children.join(", "));
console.log("Work phone: " + workPhone);
console.log("Mobile phone: " + mobilePhone);
console.log("Adress: " + town + ", " + street + ", " + house);
console.log("Email: " + mail);
console.log("Profession: " + profession);
