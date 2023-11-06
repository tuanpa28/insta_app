import httpRequest from '~/utils/httpRequest';

const searchUser = (q: string) => {
    try {
        return httpRequest.get('user/search/results', {
            params: {
                q,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export default searchUser;
