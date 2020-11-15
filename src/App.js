
import PropTypes from "prop-types";

function Fruit({fav}){
  return <h3>I like {fav}</h3>
}

Fruit.propTypes = {
  fav : PropTypes.string.isRequired
};

const arr = [
  {name : "byungwook"},
  {name : "wook"},
]

function App() {
  var a = "ASD";

  return (
    <div className="App">
      prop값 전달하기
      <Fruit fav = "apple"/>
      변수 선언해서 아래와 같은방법으로도  값 전달 가능
      <Fruit fav={a}/>
      map함수 활용해서 동적으로 html생성하기
      {arr.map(function(current){
        return <Fruit key = {current.name} fav = {current.name}/>
      })}

      
    </div>
  );
}

export default App;
