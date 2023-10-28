import React from 'react';
import './GlobalStyles.module.scss';

interface IGlobalStyles {
    children: React.ReactNode;
}

const GlobalStyles = ({ children }: IGlobalStyles) => {
    return children;
};

export default GlobalStyles;
