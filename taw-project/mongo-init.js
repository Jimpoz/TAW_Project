db.createUser({
    user: 'user',
    pwd: 'password',
    roles: [{
        role: 'readWrite',
        db: 'taw-project'
    }]
})

db.auth('user', 'password')
db = new Mongo().getDB('taw-project')