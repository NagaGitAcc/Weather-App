import hotBg from "./asserts/hot.jpg";
import coldBg from "./asserts/cold.jpg";
import Description from "./components/Description";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City..." />
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img
                src="https://openweathermap.org/img/wn/02d@2x.png"
                alt="weatherIcon"
              />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 °C</h1>
            </div>
          </div>
          {/* Bottom Description */}
          <Description />
          <small>min</small>
          <h2>32 °C</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
