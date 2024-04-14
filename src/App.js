import './App.css';
import logo from './logo.svg';
import CardComponent from'./component/card';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <span>
          <label htmlFor='filter'>Filter by: </label> 
          <input className='filter--input' placeholder='Choose a number between 10 and 30' name='filter' type='number'></input>         
        </span>      
        <div className='card--display'>
          <CardComponent
            title="test 1"
            siteUrl="https://www.google.com"
            img={logo}
          />
          <CardComponent
            title="test 1"
            siteUrl="https://www.google.com"
            img={logo}
          />
            <CardComponent
            title="test 1"
            siteUrl="https://www.google.com"
            img={logo}
          />
          <CardComponent
            title="test 1"
            siteUrl="https://www.google.com"
            img={logo}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
