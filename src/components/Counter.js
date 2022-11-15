import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

  const show = useSelector(state => state.showCounter)

  function incrementHandler() {
    dispatch({type: 'increment'})
  }

  function increaseHandler(){
    dispatch({type: 'increase', amount: 10})
  }

  function decrementHandler(){
    dispatch({type: 'decrement'})
  }


  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
