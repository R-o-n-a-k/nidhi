import {introduction} from "./_components/Data"

export default function Home() {
  return (
    <>
      <div className="section">
      <h1> {introduction.name}</h1>
      <br/>
      <h2>Hi There!</h2>
      
      <p>
      lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
    </>
  );
}
