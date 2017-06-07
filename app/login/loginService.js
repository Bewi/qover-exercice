import config from '../config';
import credentialsService from './credentialsService';

const login = (username, password) => {
    credentialsService.store(username, password);
    const credentials = credentialsService.get();

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Basic ${credentials}`,
        },
    };

    return new Promise((resolve, reject) => {
        fetch(`${config.apiUrl}/login`, options)
            .then(resolve)
            .catch(reject);
    });
};

export default {
    login,
};
