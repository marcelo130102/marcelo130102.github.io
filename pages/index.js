import Link from "next/link";
import Layout from "../components/Layout";
import { skills, study, portafolio } from "../profile";
import Skill from "../components/Skill";
import Study from "../components/Study";
import Proyecto from "../components/Portafolio";

const Index = ()=>(
    <Layout>
        {/** Header Card */}
        <header className="row">
            <div className="col-12">
                <div className="card card-body bg-secondary text-ligth">
                    <div className="row">
                        <div className="col-4">
                            <img className = "img-fluid"src = "perfil.jpg" alt = "Foto Marcelo"/>
                        </div>
                        <div className="col-8">
                            <h1>Marcelo Surco</h1>
                            <h3>Student and Front End developer</h3>
                            <p>Hola soy Marcelo Surco y este es mi portafolio
                            Hola soy Marcelo Surco y este es mi portafolio
                            Hola soy Marcelo Surco y este es mi portafolio
                            Hola soy Marcelo Surco y este es mi portafolio
                            Hola soy Marcelo Surco y este es mi portafolio
                            Hola soy Marcelo Surco y este es mi portafolio
                            Hola soy Marcelo Surco y este es mi portafolio
                            Hola soy Marcelo Surco y este es mi portafolio
                            </p>
                            <Link href="/hireme">
                               <a>Hire Me</a>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Conocimientos</h1>
                        {
                            skills.map((skill, i)=>(
                                <Skill 
                                    name={skill.name} 
                                    percentaje={skill.percentaje} 
                                    key={i}
                                    />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light mb-3">
                    <div className="card-body">
                        <h1>Estudios</h1>
                        <ul>
                            {
                                study.map((study, i)=>(
                                    <Study 
                                        name={study.name} 
                                        age={study.age} 
                                        description={study.description}
                                        key={i}
                                        />
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="card bg-light mb-3">
                    <div className="card-body">
                        <h1>Experiencia</h1>
                        <h3>En busca de mi primer empleo</h3>
                    </div>
                </div>
            </div>
        </div>

        {/**Portafolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-light">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">Portafolio</h1>
                        </div> 
                            {
                                portafolio.map((proyecto, i)=>(
                                    <Proyecto
                                        img={proyecto.img}
                                        name={proyecto.name}
                                        description={proyecto.description}
                                        link={proyecto.link}
                                        key={i}
                                    />
                                )) 
                            } 
                        </div>
                        <div className="text-center mt-4">
                                <Link href="/portafolio">
                                    <a className="btn btn-outline-dark">Más proyectos</a>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>

    </Layout>
);

export default Index;