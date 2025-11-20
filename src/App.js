// import './App.css';
import Cards  from "./components/Cards";
import Navbar from "./components/Navbar";
function App() {
  
    return (
      <>
      <Navbar/>
      <div className="d-flex gap-4 justify-content-center pt-5">
        
      <Cards
        title="Javascript"
        src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
        prag="As a client-side programming language, JavaScript's most common use is front-end web development, improving the user interface and interactivity for websites. Application developers may also use JavaScript beyond the web, to develop games."
      />
      <Cards
        title="ReactJS"
        src="https://miro.medium.com/v2/resize:fit:1400/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg"
        prag="js or ReactJS, is a JavaScript library known for its flexibility and efficiency in creating interactive user interfaces (UIs) for both web and native applications. With its component-based architecture, developers can create UI elements like buttons or search bars." 
      />
      <Cards
        title="Nodejs"
        src="https://potomac.edu/wp-content/uploads/2020/12/benefits-of-coding-e1606911064541.jpg"
        prag="Node. js lets developers use JavaScript to write command line tools and server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser."
      />
      </div>
      </>
    );
    
}
 

export default App;
