// // // import React, { useEffect, useState } from "react";
// // // import "./carousel.scss";
// // // import Button from "react-bootstrap/Button";
// // // import { sliderData } from "../../slider-data";

// // // const Carousel = ({ images }) => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   // // setInterval(function () {
// // //   // //   currentIndex === images.length
// // //   // //     ? setCurrentIndex(0)
// // //   // //     : setCurrentIndex(currentIndex + 1);
// // //   // //   console.log("first");
// // //   // // }, 3000);

// // //   console.log("second");
// // //   const handlePrevClick = () => {
// // //     if (currentIndex === 0) {
// // //       setCurrentIndex(images.length - 1);
// // //     } else {
// // //       setCurrentIndex(currentIndex - 1);
// // //     }
// // //   };

// // //   const handleNextClick = () => {
// // //     if (currentIndex === images.length - 1) {
// // //       setCurrentIndex(0);
// // //     } else {
// // //       setCurrentIndex(currentIndex + 1);
// // //     }
// // //   };
// // //   const [currentSlide, setCurrentSlide] = useState(0);
// // //   const slideLength = sliderData.length;

// // //   const autoScroll = true;
// // //   let slideInterval;
// // //   let intervalTime = 5000;

// // //   const nextSlide = () => {
// // //     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
// // //     console.log("next");
// // //   };

// // //   const prevSlide = () => {
// // //     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
// // //     console.log("prev");
// // //   };

// // //   function auto() {
// // //     slideInterval = setInterval(nextSlide, intervalTime);
// // //   }

// // //   useEffect(() => {
// // //     setCurrentSlide(0);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (autoScroll) {
// // //       auto();
// // //     }
// // //     return () => clearInterval(slideInterval);
// // //   }, [currentSlide]);

// // //   return (
// // //     <div className="slider">
// // //       {/* <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
// // //       <AiOutlineArrowRight className="arrow next" onClick={nextSlide} /> */}
// // //       {sliderData.map((slide, index) => {
// // //         return (
// // //           <div
// // //             className={index === currentSlide ? "slide current" : "slide"}
// // //             key={index}
// // //           >
// // //             {index === currentSlide && (
// // //               <div>
// // //                 <img src={slide.image} alt="slide" className="image" />
// // //                 <div className="content">
// // //                   <h2>{slide.heading}</h2>
// // //                   <p>{slide.desc}</p>
// // //                   <hr />
// // //                   <button className="--btn --btn-primary">Get Started</button>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         );
// // //       })}

// // //       {/* //   <div className="carousel-container">
// // //       <div
// // //         className="carousel-image"
// // //         style={{ backgroundImage: `url(${images[currentIndex]})` }}
// // //       ></div>
// // //       <div className="description">
// // //         <p>
// // //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut magni
// // //           non quas aliquam odit atque ducimus? Tempora similique mollitia . book
// // //           you wedding todas aliquam odit atque ducimus? Tempora similique
// // //           mollitia . book you wedding today and get 20% OFF!!!
// // //         </p>

// // //         <div className="col-md-12 text-center mb-2">
// // //           <Button
// // //             type="submit"
// // //             // variant="dark"
// // //             className="btn-warning"
// // //             onClick={(event) => (window.location.href = "#contact")}
// // //           >
// // //             Book here!
// // //           </Button>
// // //         </div>
// // //       </div> */}

// // //       <button className="carousel-prev" onClick={handlePrevClick}>
// // //         &#10094;
// // //       </button>
// // //       <button className="carousel-next" onClick={handleNextClick}>
// // //         &#10095;
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Carousel;

// // import { useState, useEffect } from "react";
// // import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// // import { sliderData } from "../../slider-data";
// // import "./Slider.scss";

// // const Slider = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const slideLength = sliderData.length;

// //   const autoScroll = true;
// //   let slideInterval;
// //   let intervalTime = 50000;

// //   const nextSlide = () => {
// //     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
// //     console.log("next");
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
// //     console.log("prev");
// //   };

// //   function auto() {
// //     slideInterval = setInterval(nextSlide, intervalTime);
// //   }

// //   useEffect(() => {
// //     setCurrentSlide(0);
// //   }, []);

// //   useEffect(() => {
// //     if (autoScroll) {
// //       auto();
// //     }
// //     return () => clearInterval(slideInterval);
// //   }, [currentSlide]);

// //   return (
// //     <div className="slider">
// //       <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
// //       <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
// //       {sliderData.map((slide, index) => {
// //         return (
// //           <div
// //             className={index === currentSlide ? "slide current" : "slide"}
// //             key={index}
// //           >
// //             {index === currentSlide && (
// //               <div>
// //                 <img src={slide.image} alt="slide" className="image" />
// //                 <div className="content">
// //                   <h2>{slide.heading}</h2>
// //                   <p>{slide.desc}</p>
// //                   <hr />
// //                   <button className="--btn --btn-primary">Get Started</button>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default Slider;
// import React, { useState } from "react";
// // import { Carousel } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { sliderData } from "./sliderData";
// import Carousel from "react-bootstrap/Carousel";
// import "./carousel.scss";

// const Slider = () => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel>
//       {sliderData.map((slide, index) => {
//         return (
//           <Carousel activeIndex={index} onSelect={handleSelect}>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={slide.src}
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3>{slide.caption}</h3>
//                 <p>{slide.desc}</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         );
//       })}
//     </Carousel>
//   );
// };

// export default Slider;
