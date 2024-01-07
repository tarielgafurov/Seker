import './App.css';
import ImagePicker from './components/UI/ImagePicker';
import MainImageSlider from './layout/MainImageSlider';

function App() {
  return (
    <div className="App">
      <MainImageSlider/>
      <ImagePicker/>
    </div>
  );
}

export default App;
