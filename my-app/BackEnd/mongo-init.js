db.createUser({
    user: 'root',
    pwd: 'password',
    roles: [
        {
            role: 'dbOwner',
            db: 'Persons',
        },
    ],
});

db.createCollection("persons")
