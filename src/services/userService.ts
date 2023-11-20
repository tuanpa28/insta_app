import httpRequest from '~/utils/httpRequest';

const search = async (q: string) => {
    try {
        const respon = await httpRequest.get('user/search/results', {
            params: {
                q,
            },
        });
        return respon;
    } catch (error) {
        console.log(error);
    }
};

const getUsersSuggested = async () => {
    try {
        const respon = await httpRequest.get('user/suggested/results');
        return respon;
    } catch (error) {
        console.log(error);
    }
};

export { search, getUsersSuggested };
