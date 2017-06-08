import config from '../config';
import credentialsService from '../login/credentialsService';

const computePrice = (driverName, car, price) => {
    const credentials = credentialsService.get();

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Basic ${credentials}`,
        },
    };

    return new Promise((resolve, reject) => {
        fetch(`${config.apiUrl}/quickQuote?driverName=${driverName}&car=${car}&price=${price}`, options)
            .then((response) => {
                if (response.status === 422) {
                    response.json().then(data => reject({
                        status: response.status,
                        statusText: response.statusText,
                        data,
                    }));
                } else if (response.status !== 200) {
                    reject({ status: response.status, statusText: response.statusText });
                } else {
                    response.json().then(data => resolve(data));
                }
            })
            .catch(reject);
    });
};

export default {
    computePrice,
};
