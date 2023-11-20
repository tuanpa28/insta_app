import httpRequest from '~/utils/httpRequest';

const getPostTimeLine = async () => {
    try {
        const respon = await httpRequest.get('post/timeline/results?_order=desc');
        return respon;
    } catch (error) {
        console.log(error);
    }
};

export { getPostTimeLine };
