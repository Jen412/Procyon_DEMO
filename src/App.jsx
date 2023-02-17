import {Route, BrowserRouter, Routes} from "react-router-dom";

import Index from "./pages/Index";
import {TreeProvider} from "./context/treeProvider";
function App() {
    return (
        <BrowserRouter>
            <TreeProvider>
                <Routes>
                    <Route path="/" element={<Index/>}></Route>
                </Routes>
            </TreeProvider>
        </BrowserRouter>
    );
}
export default App

