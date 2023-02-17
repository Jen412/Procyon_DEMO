import { useContext } from "react";
import TreeContext from "../context/treeProvider";

const useTree = () =>{
    return useContext(TreeContext);
}

export default useTree;