import Diagram from "../components/Diagram";
import Header from "../components/Header";
import useTree from "../Hooks/useTree";

const Index = () => {
    const {cargando} = useTree();
    return (
        <div className="container">
            <Header/>
            {cargando && <Diagram/>}
        </div>
    )
}

export default Index