// import { ReactNode, createContext, useState } from "react";
// import { CountryType } from "../types/customTypes";

// interface CountriesContextType {
//     countries: CountryType[];
// }

// const initialContext = {
//     countries: [],
// };

// interface ProviderPropsType {
//     children: ReactNode,
// };


// export const CountriesContext = createContext<CountriesContextType>(initialContext);

// export const CountriesContextProvider = (props:ProviderPropsType) => {
//     console.log('props :>> ', props);



//     const [number, setNumber] = useState(1)

//     return (
//         <CountriesContext.Provider value={{}}>
//             {props.children}
//         </CountriesContext.Provider>
//     );
// };