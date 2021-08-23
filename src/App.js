import Header from './components/header'
import Headline from './components/headline';
import './App.scss';

function App() {
  return (
    <div className="App">
    <Header />
    <section className='main'>
    <Headline header="post for programming" desc="click the button to render post" />

    </section>
    </div>
  );
}

export default App;
