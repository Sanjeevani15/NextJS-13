import { Component } from "react";

export default function About() {
  return (
    <div className="min-h-screen">
      <h1>This is the about page</h1>
      <p>Rules abotut server and client component</p>
      <ol>
        <li>You cannot import a server component into a client component</li>
        <li>
          But you can pass a server component as a prop or a children to a
          client component
        </li>
        <ul>When to use server component or when to user client component </ul>

        <h3>Client:</h3>
        <li>You use React Hooks</li>
        <li>With event listeners such as onClick, onChange etc</li>
        <li>There are custom hooks that depend on state or effects.</li>

        <br />
        <br />
        <h3>Server:</h3>
        <li>Sensitive information needs to be stored(tokes, API keys, etc.)</li>
        <li>You need to access backend resources directly.</li>
        <li>There are large dependencies</li>
      </ol>
    </div>
  );
}
