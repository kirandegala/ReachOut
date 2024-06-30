import React from 'react';
import { CSSProperties } from 'react';

const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            {/* Empty header for now */}
        </header>
    );
};

const headerStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    padding: '1rem 2rem',
    backgroundColor: 'transparent',
};

export default Header;
