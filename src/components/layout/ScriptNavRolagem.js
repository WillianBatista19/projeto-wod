// // StickyNav.js
// import { useEffect } from 'react';

// function StickyNav() {
//   useEffect(() => {
//     const navbar = document.querySelector('.header');
//     const stickyOffset = navbar.offsetTop;

//     function handleStickyNav() {
//       if (window.pageYOffset >= stickyOffset) {
//         navbar.classList.add('is-sticky');
//       } else {
//         navbar.classList.remove('is-sticky');
//       }
//     }

//     window.addEventListener('scroll', handleStickyNav);

//     return () => {
//       window.removeEventListener('scroll', handleStickyNav);
//     };
//   }, []);

//   return null;
// }

// export default StickyNav;
