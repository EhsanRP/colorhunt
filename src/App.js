import Navbar from "./components/navbar/Navbar";
import Body from "./components/Body";
import LikeContextProvider, {LikeContext} from "./context/LikeContext";

function App() {
    return (
        <div>
            <LikeContextProvider>
                <Navbar/>
                <Body/>
            </LikeContextProvider>
        </div>
    );
}

export default App;
