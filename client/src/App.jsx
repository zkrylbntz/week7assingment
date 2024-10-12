// App should be our parent top-level component

// My advice is that you set up your route in App

// import Posts from "./components/Posts";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <h1>ReviewBook</h1>
      {/* <Posts /> */}
      <Form />
      {/* <Routes>
        <Route/>
    </Routes> */}
    </>
  );
}
