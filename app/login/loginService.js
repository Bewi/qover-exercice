import config from '../config';
import credentialsService from './credentialsService';
import history from '../history';

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
            .then((response) => {
                if (response.status !== 200) {
                    reject({ status: response.status, statusText: response.statusText });
                }

                resolve(response);
            })
            .catch(reject);
    });
};

const logout = () => {
    credentialsService.clear();
    history.push('/login');
};

export default {
    login,
    logout,
};
