import Link from 'next/link';
import { CSSProperties } from 'react';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={logoStyle}>
          <h1>ReachOut</h1>
        </div>
        <div style={navLinksStyle}>
          {/* Add other nav links if needed */}
        </div>
        <div style={buttonContainerStyle}>
          <Link href="/signup" legacyBehavior>
            <a style={buttonStyle}>Try ReachOut</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

const headerStyle: CSSProperties = {
  backgroundColor: '#1f1f1f',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky' as 'sticky',
  top: 0,
  zIndex: 1000,
};

const navStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};

const logoStyle: CSSProperties = {
  flex: 1,
};

const navLinksStyle: CSSProperties = {
  flex: 2,
  display: 'flex',
  justifyContent: 'center',
};

const buttonContainerStyle: CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
};

const buttonStyle: CSSProperties = {
  backgroundColor: '#0070f3',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Header;
