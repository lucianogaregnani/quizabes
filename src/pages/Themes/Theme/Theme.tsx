import { useParams } from "react-router-dom";

function Theme() {
    const { tema } = useParams()

    return (
        <section>
            <h1>aa{tema}</h1>
        </section>
    );
}

export default Theme;