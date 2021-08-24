import Header from './components/header'
import Headline from './components/headline';
import SharedButton from './components/button'
import {connect} from 'react-redux'
import { fetchPosts } from './actions';
import './App.scss';
import ListItem from './components/listItem';

const tempArr = [{
  fName:'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 33,
  onlineStatus: true
}]
 
function App(props) {
const {posts} = props;

function fetch(){
  console.log('app hits')
   props.fetchPosts()
 }
const configButton={
  buttonText:'Get posts',
  emitEvent: ()=>fetch()
}
  return (
    <div className="App">
    <Header />
    <section className='main'>
    <Headline header="post for programming" desc="click the button to render post" tempArr={tempArr} />
    <SharedButton {...configButton} />
    {posts.length > 0 && 
    <div>
      {posts.map((post,index)=>{
        const {title,body} = post;
        const configListItem = {
          title,
          desc: body
        }
        return(
          <ListItem key={index} {...configListItem} />
        )
      })}
    </div>
    }
     </section>
    </div>
  );
}
const mapStateToProps=(state)=>{
 return{
  posts:state.posts
 }
}

export default connect(mapStateToProps,{fetchPosts})(App);
