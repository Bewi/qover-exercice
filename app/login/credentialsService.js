import Moment from 'moment';

const localStorageKey = 'credentials';

const store = (username, password) => {
    const object = { value: btoa(`${username}:${password}`), expirationDate: new Moment().add(1, 'day') };
    localStorage.setItem(localStorageKey, JSON.stringify(object));
};

const clear = () => {
    localStorage.removeItem(localStorageKey);
};

const get = () => {
    const credentials = localStorage.getItem(localStorageKey);
    if (credentials) {
        const parsedCredentials = JSON.parse(credentials);
        if (new Moment().isBefore(new Moment(parsedCredentials.expirationDate))) {
            return parsedCredentials.value;
        }

        clear();
    }

    return null;
};

export default {
    store,
    clear,
    get,
};
