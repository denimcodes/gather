import React from "react";
import { Box } from "./components/Box";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
import OrbisProvider from "./context/OrbisContext";
import { globalStyles } from "./styles/global";

const Gather = () => {
	globalStyles();

	return (
		<OrbisProvider>
			<Navbar />
			<MainLayout />
		</OrbisProvider>
	);
};

export default Gather;
