const book = {
  contacts: [
    {
      name: "Artem",
      phone: "+380637999439",
      email: "user1@gmail.com",
    },
    {
      name: "Anton",
      phone: "+380638396487",
      email: "user2@gmail.com",
    },
    {
      name: "Yulia",
      phone: "+380637074923",
      email: "user3@gmail.com",
    },
  ],
  
  findContact(nameContact) {
    for(const key in book.contacts) {
        if(book.contacts[key].name == nameContact) console.log(book.contacts[key]);
    }
  },

  addContact(newContact) {
    book.contacts.push(newContact);
  }
};

book.findContact("Artem");

const newContact = {
    name: "Taras",
    phone: "+380637070343",
    email: "user4@gmail.com",
}
book.addContact(newContact);
