import { repoPath } from "../js/deploy";
import { Link } from "react-router-dom";

export default function Start() {
    return (
        <>

            <h1>Abinash</h1>
            <Link to={repoPath('/set-location')}>Set Location</Link>
        </>
    )
}