import { createEffect, createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log(`count ${count()}`);
  });

  return (
    <>
      <p class="text-red-500" onClick={() => setCount((a) => a + 1)}>
        test {count()}
      </p>
    </>
  );
}

export default App;
