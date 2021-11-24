import type { ActionFunction } from "remix";

export let action: ActionFunction = () => {
  throw new Error("SOMETHING WENT WRONG");
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div className="remix__page">
      <form method="post">
        <input type="hidden" value="asdf" />
        <button type="submit">Press this button to see error</button>
      </form>
    </div>
  );
}

export function ErrorBoundary() {
  return <h1>Error happened</h1>;
}
