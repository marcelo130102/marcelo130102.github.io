import Navbar from './Navbar'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';

const Layout = ({children, footer = true})=>{

    const router = useRouter();

    useEffect(()=>{
        const handleRouteChange = url => {
            nProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange);

        router.events.on('routeChangeComplete', ()=>nProgress.done());
        return () =>{
            router.events.off('routeChangeStart', handleRouteChange);   
        }
    }, [])

    return(
        <>
            <Navbar/>
            
            <main className="container py-4">
                {children}
            </main>

            {
                footer && (
                    <footer className="bg-light text-dark text-center">
                        <div className="container p-4">
                            <h4>&copy; Portafolio de Marcelo Surco</h4>
                            <p>2022 - {new Date().getFullYear()}</p>
                            <p>All rights Reserved.</p>
                        </div>
                    </footer>
                )
            }
        </>
    );
}

export default Layout;