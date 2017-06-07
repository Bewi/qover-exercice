(function () {
    const conn = new Mongo();
    const db = conn.getDB('qover');

    db.users.insert({ userName: 'contact@qover.me', password: 'guest' });
})();
