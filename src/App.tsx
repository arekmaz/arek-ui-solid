import { createEffect, createSignal } from "solid-js";
import { Card } from "./components/ui/card";
import { Buttons } from "./demo/button.stories";

function App() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log(`count ${count()}`);
  });

  return (
    <>
      <p class="text-red-500" onClick={() => setCount((a) => a + 1)}>
        <Card>
          <Card.Header>
            <Card.Title>title</Card.Title>
          </Card.Header>
          <Card.Content>
            <Buttons />
          </Card.Content>
        </Card>
      </p>
    </>
  );
}

export default App;
