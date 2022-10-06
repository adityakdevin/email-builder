import dynamic from "next/dynamic";
import EmailBuilder from "../components/EmailBuilder";
import {useEffect, useState} from "react";

export default function Home() {
    const [isLoaded,setIsLoaded] =useState(false);
    return (
        <>
            {
                isLoaded &&  <EmailBuilder/>
            }
        </>
    )
}
