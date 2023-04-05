import { Link } from "@mui/material";
import React from "react";
import { Box } from "../Ui";

const Impressum: React.FC = () => (
    <Box style={{ flexDirection: 'column' }}>
        <h1>Impressum</h1>
        <h2 style={{ marginBottom: "0" }}>Organisation</h2>
        <p style={{ marginBottom: "0" }}>
            Thea Ebert & Thabea Buck
        </p>
        <p style={{ marginBottom: "0" }}>
            <Link href={"mailto:festival.tanzwiese@gmail.com"}>festival.tanzwiese@gmail.com</Link>
        </p>

        <h2 style={{ marginBottom: "0" }}>Technisch</h2>
        <p style={{ marginBottom: "0" }}>
            Alexander Mührenberg
        </p>
        <p style={{ marginBottom: "0" }}>
            <Link href={"mailto:alexander@muehrenberg.de"}>alexander@muehrenberg.de</Link>
        </p>
    </Box>
)

export default Impressum
