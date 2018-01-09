describe('Address Book', () => {
    var addresBook,
        thisContact;
    beforeEach(() => {
        addresBook = new AddressBook();
        thisContact = new Contact();
    });
    it('should be able to add a contact', () => {
        addresBook.addContact(thisContact);

        expect(addresBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', () => {
        addresBook.addContact(thisContact);
        addresBook.deleteContact(thisContact);

        expect(addresBook.getContact(0)).not.toBeDefined();
    });
});

describe('Async Address Book', () => {
    var addresBook = new AddressBook();

    beforeEach((done) => {
        addresBook.getInitialContacts(() => {
            done();
        })
    });

    it('should grab initial contacts', (done) => {
        expect(addresBook.initialComplete).toBe(true);
        done(); // [OPTIONAL] If you are testing async, you do not need to pass in and call `done`.
    });
});