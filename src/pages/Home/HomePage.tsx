import React from 'react';

const HomePage = () => {
    const handleLoginGoogle = () => {
        const popupWidth = 500;
        const popupHeightPercentage = 75; // Chiều cao là 75% của chiều cao màn hình
        const screenWidth = window.innerWidth;
        const screenHeight = screen.availHeight;
        const popupHeight = (screenHeight * popupHeightPercentage) / 100;
        const left = (screenWidth - popupWidth) / 2;
        const top = (screenHeight - popupHeight) / 2;

        // Mở cửa sổ popup và lưu trạng thái cửa sổ trong biến authWindow.
        const authWindow = window.open(
            'http://localhost:8080/api/auth/google',
            '_blank',
            `width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`,
        );
        const authenticationSuccessUrl = 'http://localhost:3000/home';

        if (authWindow) {
            window.addEventListener('message', function (event) {
                if (event.data === 'success') {
                    // Chuyển hướng hoặc thực hiện các hành động cần thiết
                    window.location.href = authenticationSuccessUrl;
                }
            });
        }
    };

    return (
        <>
            <button onClick={handleLoginGoogle}>Login Google</button>
        </>
    );
};

export default HomePage;
