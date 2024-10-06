// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Swiper default styles
// import 'swiper/swiper.min.css'; // More Swiper default styles
// import SwiperCore, { Pagination, Autoplay } from 'swiper';

// // Import Swiper modules
// SwiperCore.use([Pagination, Autoplay]);

// const Story = () => {
//   const images = [
//     './images/img (1).jpg',
//     './images/img (2).jpg',
//     './images/img (3).jpg',
//     './images/img (4).jpg',
//     './images/img (5).jpg',
//     './images/img (6).jpg',
//     './images/img (7).jpg',
//     './images/img (8).jpg',
//     './images/img (9).jpg',
//     './images/img (10).jpg',
//     './images/img (11).jpg',
//     './images/img (12).jpg',
//     './images/img (13).jpg',
//     './images/img (14).jpg',
//     './images/img (15).jpg',
//     './images/img (16).jpg',
//     './images/img (17).jpg',
//     './images/img (18).jpg',
//     './images/img (19).jpg',
//     './images/img (20).jpg',
//   ];

//   // Inline styles
//   const containerStyle = {
//     width: '80%',
//     margin: '0 auto',
//     padding: '20px',
//   };

//   const swiperStyle = {
//     borderRadius: '15px',
//     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//   };

//   const imageStyle = {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '15px',
//   };

//   return (
//     <div style={containerStyle}>
//       <Swiper
//         pagination={{ clickable: true }} // Enables pagination
//         autoplay={{ delay: 3000, disableOnInteraction: false }} // Automates the swiper
//         loop={true} // Loop through the slides
//         spaceBetween={50} // Space between slides
//         slidesPerView={1} // Show one slide at a time
//         style={swiperStyle}
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Story;
