"use client"
import { CircularProgress } from "@mui/material";

export default function Loading(){
    return (
        <div className="loading">
            <CircularProgress color="primary" size={150} />
            <h1 className="font-inter text-gray-100">Carregando...</h1>
        </div>
    )
}