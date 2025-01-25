import React from 'react';

const NameOverlay = ({ opacity }) => {
  return (
    <div 
      className="name-overlay"
      style={{
        opacity: opacity,
        position: 'fixed',
        top: '50px',
        left: 0,
        width: '100%',
        transform: 'none',
        height: 'auto',
        color: '#FFFFFF',
        fontSize: 'min(8vw, 8em)',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '1px 1px 1px rgba(0,0,0,0.3)',
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: 'none',
        lineHeight: '1.2',
        whiteSpace: 'pre-line',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 'min(20px, 4vw)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width: 768px)': {
          fontSize: '6vw',
          top: '50px',
        }
      }}
    >
      {'Hossein Younesian\nFarid'}
    </div>
  );
};

export default NameOverlay;