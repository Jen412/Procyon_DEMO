import { createContext, useState , useEffect} from "react";

const TreeContext = createContext();

const TreeProvider = ({children}) => {
    const [nodes, setNodes] = useState([]);
    const [node, setNode] = useState({});
    const [cargando, setCargando] = useState(false);
    const [contNodes, setContNodes] = useState(1);
    
    class Node {
        constructor(id, nombre, color, loc, links){
            this.id =id;
            this.nombre=nombre;
            this.color=color;
            this.loc=loc;
            this.links=links;
        }
    }



    const agregarNodo = (datos) =>{
        const {nombre, color, loc, links} = datos;
        let nodo = new Node(contNodes, nombre, color, loc, links);
        setNodes([...nodes, nodo]);
        setContNodes(contNodes + 1);
    }

    const generateTree = (nodos) =>{
        let nodeDataArray=[];
        let linkDataArray=[];
        for (let i=0; i<nodos.length; i++){
            nodeDataArray.push({
                key: parseInt(nodos[i].id), text: nodos[i].nombre, color: nodos[i].color, loc: nodos[i].loc
            });
        }
        let cont=0;
        nodos.forEach(nodo => {
            for(let i=0; i<nodo.links.length; i++){
                linkDataArray.push({
                    key: cont, from: parseInt(nodo.id), to: parseInt(nodo.links[i])
                });
                cont++;
            }
        });
        return {nodeDataArray, linkDataArray};
    }

    return(
        <TreeContext.Provider
            value={{
                nodes,
                node,
                setNode,
                generateTree,
                agregarNodo,
                cargando,
                setCargando,
                contNodes
            }}
        >
            {children}    
        </TreeContext.Provider>
    );
}

export {
    TreeProvider
}

export default TreeContext