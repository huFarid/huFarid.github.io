import React from 'react';

const NameOverlay = ({ opacity }) => {
  return (
    <div 
      className="name-overlay"
      style={{
        opacity: opacity,
        position: 'fixed',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '40%',
        color: '#FFFFFF',
        fontSize: '8em',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '1px 1px 1px rgba(0,0,0,0.3)',
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: 'none',
        lineHeight: '1.2',
        whiteSpace: 'pre-line',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: '20px 40px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {'Hossein Younesian\nFarid'}
    </div>
  );
};

export default NameOverlay;