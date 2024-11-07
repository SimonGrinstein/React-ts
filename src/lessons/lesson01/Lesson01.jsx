import './lesson01.css';
// import myImage from '../img/sg.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">Simon Grinstein</header>
      <main>
        <div><img className="sg" src="http://www.grinstein.de/images/page3_img1.jpg" alt="sg" /></div>
        {/* <img className="sg" src={myImage} alt="sg" /> */}
        
        <h4 className="App-h4">Hobbys</h4>
        <div>
          <li>Badminton</li>
          <li>Snooker</li>
          <li>Kino</li>
        </div>
      </main>
    </div>
  );
}

export default App;
