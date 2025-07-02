import { Navigate } from "react-router-dom";

const Page404 = () => {
    return (
        // Redirige vers la page d'accueil
        <Navigate to="/" replace />
    );
}
export default Page404;