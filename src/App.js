import React, {Component} from 'react';
import homer1 from './images/homer-1.svg';
import homer2 from './images/homer-2.svg';
import homer3 from './images/homer-3.svg';
import homerQuotes from './quotes.json';
import './App.css';

class App extends Component {
  state = {
    bgColor: '#659FD5',
    quote: this.newQuote()
  }

  homerClick = () => {
    let homer = document.querySelector('.footer-image');
    homer.src = homer3;
    setTimeout(function(){
      homer.src = homer1;
    }, 1000); 
  }

  quoteClick = () => {
    //homer image
    let homer = document.querySelector('.footer-image');
    homer.src = homer2;
    setTimeout(function(){
      homer.src = homer1;
    }, 1000); 
    //bg transistion
    let bgColors = ['#659FD5', '#EC385D', '#00BCC8', '#F8BEAA', '#F59209'];
    let randomNum = Math.floor((Math.random() * 5));
    let randomBg = bgColors[randomNum];
    while (randomBg === this.state.bgColor) {
      randomNum = Math.floor((Math.random() * 5));
      randomBg = bgColors[randomNum];
    }
    document.body.style.backgroundColor = randomBg;
    //buttons transition
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = randomBg;
    }
    //text transition
    document.getElementById('author').style.color = randomBg;
    document.querySelector('.quote-symbol').style.fill = randomBg;

    let newQuote = this.newQuote();

    while (this.state.quote === newQuote) {
      newQuote = this.newQuote();
    }

    document.body.style.pointerEvents = 'none';
    setTimeout(function() {
      document.querySelector('.quote-text').style.display= 'block';
      document.querySelector('.quote-text').innerHTML = newQuote;
      document.body.style.pointerEvents = 'initial';
    },1000);

    //setstate
    this.setState({
      bgColor: randomBg,
      quote: newQuote
    }) 
  }

  tweetClick = (e) => {
    let link = e.target.parentNode;
    link.setAttribute('href', "http://www.twitter.com/intent/tweet" + "?text=" + "\"" + this.state.quote + "\" - Homer Simpson");
    console.log(e.target.parentNode);
  }

  newQuote() {
    //quote text show
    let randomNum = Math.floor((Math.random() * homerQuotes.length));

    return(homerQuotes[randomNum]['quote'])
  }

  render() {
    return (
      <div className="App">
        <div className="container content-container">
          <div className="content">
            <div id="quote-box">
            <svg className="quote-symbol noselect">
              <path d="M20.7,26.1c0,2.4-1.3,3.6-4,3.6c-1.8,0-5-3.7-9.7-11C2.4,11.4,0.1,6.6,0,4.2
              C-0.1,1.5,0.9,0.1,2.9,0c1-0.1,2.4,0.8,4,2.6c1.2,1.3,3.2,4.5,6.2,9.6c1.8,3,3.9,6.5,6.2,10.5C20.1,24.1,20.6,25.2,20.7,26.1z
              M38.6,21.1c0,0.9-0.6,1.7-1.7,2.3c-1.1,0.6-2.2,1-3.3,1c-0.8,0.1-2.5-1.6-5.3-5c-3.1-3.8-4.7-7.2-4.7-10c0-1.4,1-2.2,2.9-2.4
              c1,0,3.3,2.1,6.7,6.2C36.5,17.4,38.4,20,38.6,21.1z"/>
            </svg>
            <div id="text"><p className="quote-text">{this.state.quote}</p></div>
            <div id="author"><p>- Homer Jay Simpson</p></div>
            <a id="tweet-quote" href="http://www.twitter.com/intent/tweet" onClick={this.tweetClick} target="_blank">
              <button className="btn">Tweet</button>
            </a>
            <div id="new-quote">
              <button className="btn" onClick={this.quoteClick}>New Quote</button>
            </div>
          </div>
            <img src={homer1} alt="Homer Simpson" className="footer-image noselect" onClick={this.homerClick} />
            <footer>
              <div className="footer-content container noselect">
                by swoodo
              </div>
            </footer>
          </div>
          
        </div>
      </div>
    );
  }
}


export default App;
