import { useEffect, useState } from "react";
import useTree from "../Hooks/useTree";
const Header = () => {
    const {agregarNodo,setCargando,contNodes, nodes} = useTree();
    //const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState("");
    const [locX, setLocX] = useState("");
    const [locY, setLocY] = useState("");
    const [links, setLinks] = useState([]);
    const [link, setLink] = useState("");
    const [nodosActivos, setNodosActivos] = useState("");
    const [linksA, setLinksA]=useState("");

    useEffect(()=>{
        // if (nodes.length >0) {
        //     let nodosAc="";
        //     nodes.foreach(nodo =>{
        //         nodosAc+= `id: ${nodo.id} nombre: ${nodo.nombre} \n`;
        //     });
        //     setNodosActivos(nodosAc);
        // }
    }, [])
    
    const agregarLink = ()=>{
        setLinks([...links, link]);
        setLinksA(`${link} \n`+ linksA);
        setLink("");
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const loc= `${locX} ${locY}`;
        agregarNodo({nombre,color , loc, links});
        setNodosActivos(`id: ${contNodes} nombre: ${nombre} \n`+ nodosActivos);
        setNombre("");
        setColor("");
        setLocX("");
        setLocY("");
        setLink("");
        setLinks([]);
        setLinksA("");
    }

    return (
        <div className="container">
           <h2 className="font-bold text-2xl text-left ml-14">Agregar Nodo</h2>
           <div className="flex gap-2">
                <form onSubmit={handleSubmit} className="ml-10 bg-gray-100 border shadow-md flex flex-col w-4/5">
                    {/* <div className="w-1/4 ml-5">
                        <label htmlFor="" className="block font-bold">Id</label>
                        <input 
                            type="number" 
                            className="border border-slate-500 rounded-md w-full"
                            value={id}
                            onChange={e=>setId(e.target.value)}
                        />
                    </div> */}
                    <div className="w-1/4 ml-5">
                        <label htmlFor="" className="block font-bold">Nombre</label>
                        <input 
                            type="text" 
                            placeholder="Nombre: ejem AWS"
                            className="border border-slate-500 rounded-md w-full"
                            value={nombre}
                            onChange={e=>setNombre(e.target.value)}
                        />
                    </div>
                    <div className="w-1/4 ml-5">
                        <label htmlFor="" className="block font-bold">Color</label>
                        <select 
                            className="border border-slate-500 rounded-md w-full"
                            value={color}
                            onChange={e=>setColor(e.target.value)}    
                        >
                            <option value="">--Seleccione Color--</option>
                            <option value="gray">Gris</option>
                            <option value="orange">Naranja</option>
                            <option value="lightblue">Azul Claro</option>
                            <option value="lightpink">Rosa Claro</option>
                            <option value="lightgreen">Verde Claro</option>
                        </select>
                    </div>
                    <div className="ml-5">
                        <label htmlFor="" className="block font-bold">Locacalización</label>
                        <div className="w-1/4 flex gap-3">
                            <input 
                                type="number" 
                                className="w-1/2 border border-slate-500 rounded-md" 
                                placeholder="X"
                                value={locX}
                                onChange={e=>setLocX(e.target.value)}
                            />
                            <input 
                                type="number" 
                                className="w-1/2 border border-slate-500 rounded-md" 
                                placeholder="Y"
                                value={locY}
                                onChange={e=>setLocY(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-1/4 ml-5 flex flex-col">
                        <label htmlFor="" className="block font-bold">Enlace</label>
                        <input 
                            type="text" 
                            className="border border-slate-500 rounded-md w-full mb-3"
                            value={link}
                            onChange={e=>setLink(e.target.value)}
                        /> 
                        <textarea 
                            name="" 
                            id="" 
                            disabled 
                            className="block w-full h-32 bg-slate-300 rounded-md"
                            value={linksA}
                        ></textarea>
                        <button onClick={e=>agregarLink()} type="button" className="border text-white bg-slate-700 font-bold uppercase p-2 rounded-md mt-3 hover:bg-slate-900 self-end">Agregar Enlace</button>
                    </div>
                    <input type="submit" value="Agregar" className="border text-white bg-slate-500 font-bold uppercase p-2 rounded-md mt-3 hover:bg-slate-800 w-1/12 self-end mr-5 mb-3"/>
                </form> 
                <textarea 
                    name="" 
                    id="" 
                    className="w-1/5 bg-slate-50" 
                    disabled
                    value={nodosActivos}
                ></textarea>
            </div>
            <button onClick={e=>setCargando(true)} type="button" className="border text-white bg-sky-500 font-bold uppercase p-2 rounded-md mt-3 hover:bg-sky-900 self-end">Crear Diagrama</button>
        </div>
    )
}

export default Header