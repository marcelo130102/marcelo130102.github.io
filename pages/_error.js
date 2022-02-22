import Link from "next/link";
import Layout from "../components/Layout";

const _error = ()=>{
    return(
        <Layout>
            <p className="text-center">No se pudo cargar tu página 
                <Link href="/">
                    <a className="text-center">Home</a>
                </Link>
            </p>
            
        </Layout>
    )
}

export default _error;