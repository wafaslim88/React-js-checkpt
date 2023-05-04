
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <p>welcome to react js</p>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" class="form-control"></input>
        </div>
        <div class="form-group">
          <label for="email">Name</label>
          <input type="text" id="email" class="form-control">Email</input>
        </div>
        <button type="submit" class="btn btn-danger">Submit</button>
      </form>
    </div>
  );
}

export default App;
