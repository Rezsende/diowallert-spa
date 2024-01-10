import { useParams } from "react-router-dom";

export default function NewTransaction()
{
    const {type} = useParams();
    return <p>{type}</p>
}