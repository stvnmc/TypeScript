import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";

function App() {
  const { title, count, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );
  const { increment, getPosts, clearStore, multiply } = useCounterStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>
        {title},{count}
      </h1>
      <button
        onClick={() => {
          increment(10);
        }}
      >
        incremente
      </button>

      <button onClick={() => clearStore()}>clear</button>
      <button onClick={() => multiply(2)}>multiply 2</button>

      <hr />
      {JSON.stringify(posts)}
    </div>
  );
}

export default App;
