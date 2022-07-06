export const middlewareConfig = {
  interceptors: {
    request: [
      ({ getState, dispatch }, config) => {
        const newConfig = { ...config };
        const token = localStorage.getItem('token');
        console.log(token);

        if (getState().user && getState().user.access_token) {
          newConfig.headers.Authorization = `Bearer ${getState().user.access_token}`;
        } else if (token) {
          newConfig.headers.Authorization = `Bearer ${token}`;
        }

        return newConfig;
      },
    ],
    response: [({ getState }, response) => response,
    ],
  },
};
