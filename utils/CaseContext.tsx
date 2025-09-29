import * as React from "react";
import { createContext, ReactNode, useContext, useState } from "react";

export type CaseType = {
    id: string | null
    status: 'Cancelled' | 'Active' | 'Done' | 'Open'
    caseName: string | null,
    patientIdentifier: string | null,
    assignedTo: string | null,
    description: string | null,
    timingStart: boolean,
    timingFinish: boolean,
}

const CaseContext = createContext<CaseType | undefined>(undefined);

export const useCase = () => {
    const context = useContext(CaseContext);
    if(!context) {
        throw new Error("useCase must be used within a CaseProvider")
    }
    return context;
}

type CaseProviderProps = {
    children: ReactNode;
}

export const CaseProvider: React.FC<CaseProviderProps> = ({ children }) => {
    const [cases, setCase] = useState<CaseType[]>([]);



    





    
    
    
    return <CaseContext.Provider value={null}></CaseContext.Provider>
}