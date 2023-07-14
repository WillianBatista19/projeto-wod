// import { useEffect } from 'react';

// const StickyNav = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector('.header');
//       const headerOffsetTop = header.offsetTop;

//       if (window.pageYOffset >= headerOffsetTop) {
//         header.classList.add('background-black');
//       } else {
//         header.classList.remove('background-black');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return null; // Retorna null para não renderizar conteúdo adicional
// };

// export default StickyNav;
