const login = (username, password) => (
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
);

export default {
    login,
};
