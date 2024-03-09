import { createContext, useState } from "react";


export const ReactContext = createContext('');

const ReactAuthProvider = ({ children }) => {

    // hooks
    const [number, setNumber] = useState(0);



    const contextInfo = { number, setNumber };


    return <ReactContext.Provider value={contextInfo}>
        {children}
    </ReactContext.Provider>;
};

export default ReactAuthProvider;