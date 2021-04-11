import React, {useEffect, useState} from 'react';
import './App.css';

const GIFS = ['https://media3.giphy.com/media/ES4Vcv8zWfIt2/giphy.gif?cid=ecf05e47kz3o0vbj72jpayiig7x94dq6wk7sww7yv3z12x26&rid=giphy.gif',
              'https://media3.giphy.com/media/q1MeAPDDMb43K/giphy.gif?cid=ecf05e47kz3o0vbj72jpayiig7x94dq6wk7sww7yv3z12x26&rid=giphy.gif']
const DIF_GIFS = ['https://media3.giphy.com/media/13CoXDiaCcCoyk/giphy.gif?cid=ecf05e47ws49x2bcbl1hupdnl5s3qgrvx9lwm3bbvudzu55k&rid=giphy.gif',
                  'https://media0.giphy.com/media/WXB88TeARFVvi/giphy.gif?cid=ecf05e47j9ljtw4zndocjv3z0lywus5b3adtdx9nzr5a0ok5&rid=giphy.gif']
function App() {
  const [gifs, setGifs] = useState(GIFS)
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(gif => <img src={gif}/>)
        }
      </section>
    </div>
  );
}

export default App;
