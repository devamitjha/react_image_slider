import ImageSlider from "./Components/Slider";
import "./css/App.css"
function App() {
  return (
    <div className="container mt-5 carousel">
      <h1 className="slider_title">React Image Carousel</h1>
      <ImageSlider />
    </div>
  );
}

export default App;

//npm install react-slick --save
//npm install slick-carousel (this is for slick-carousel for css and font)