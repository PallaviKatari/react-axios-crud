
import './App.css';
import Get from './components/Get';
import Post from './components/Post';
import Put from './components/Put';
import Delete from './components/Delete';
import { Products } from './components/Products';
function App() {
  return (
    <div>
    <Get/>
    <hr>
    </hr>
    <Post/>
    <hr>
    </hr>
    <Put/>
    <hr>
    </hr>
    <Delete/>
    <hr>
    </hr>
    <Products/>
    </div>
  );
}

export default App;
