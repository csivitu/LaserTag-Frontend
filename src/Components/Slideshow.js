

import ImageSlider from "./ImageSlider";
import './../css/App.css';

const Slideshow = () => {
  const slides = [
    { url: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/6eetog61ec16aftpms3reuu2jtz9_shutterstock_1458739901.jpg", title: "slide1" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMyZDFQUyvo6yl-jY3yvRUXA9ENt1RX4d2Q&usqp=CAU", title: "slide2" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WtlBuyfXXp5dmbSGrYTS56LT0uLWQXYC7w&usqp=CAU", title: "slide3" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ht3IU9wX3ep3r4R4ecwIOQCi75enlUO4DQ&usqp=CAU", title: "slide4" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Gp1zu73rfQbu-Q1kM75Z8CxFZeg46DlEVA&usqp=CAU", title: "slide5" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>

      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slideshow;