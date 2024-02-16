import React, { createContext, useContext, useReducer } from "react";

// Define your reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "SET_PROPERTIES":
			//reducer needs to save the properties in localStorage.
			localStorage.setItem("properties", JSON.stringify(action.payload));
			return { ...state, properties: action.payload };
		default:
			return state;
	}
};

const initialState = {
	properties: JSON.parse(localStorage.getItem("properties")) || {}, //check local storage
};

const PropertyContext = createContext();

export const useProperties = () => useContext(PropertyContext);

const PropertyProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<PropertyContext.Provider
			value={{ properties: state.properties, dispatch }}>
			{children}
		</PropertyContext.Provider>
	);
};

export default PropertyProvider;
