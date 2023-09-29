import { Timestamp } from "firebase/firestore";

export interface CountryType {
    name: NameType;
    capital: [string];
    flag: string;
    region: string;
    languages: {[key: string]: string};
    currencies: { [key: string]: { name: string, symbol: string } };
    population: 0;
    maps: { OpenStreetMaps: string};
};

export interface NameType {
    common: string;
};

export interface RouteErrorType {
    data: string;
    error: {
        message: string;
    };
    status: number;
    statusText: string;
};

export interface User {
    userName: string;
    email: string;
};

export interface ReviewsType {
    author: string;
    text: string;
    country: string;
    cities: string;
    date: Timestamp | Date;
    traveldates: string;
};