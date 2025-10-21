import React from 'react';
import logo from '../../assets/logo.png';


// Logo.jsx para React + Vite
// Vite permite importar imágenes directamente con 'import'


export default function Logo({ size, alt = 'Edge Runners logo', className = '' }) {
const style = typeof size === 'number' ? { width: `${size}px`, height: 'auto' } : { width: size, height: 'auto' };


return (
<div className={`inline-block ${className}`} style={style}>
<img
src={logo}
alt={alt}
style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '80px' }}
draggable={false}
/>
</div>
);
}