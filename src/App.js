import Header from './components/header'
import Headline from './components/headline';
import './App.scss';

const tempArr = [{
  fName:'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 33,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
    <Header />
    <section className='main'>
    <Headline header="post for programming" desc="click the button to render post" tempArr={tempArr} />

    </section>
    </div>
  );
}

export default App;
