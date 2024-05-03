import Link from "next/link";
import Layout from "../components/Layout";
import { skills, study, portafolio } from "../profile";
import Skill from "../components/Skill";
import Study from "../components/Study";
import Proyecto from "../components/Portafolio";

const Index = () => (
    <Layout>
        {/** Header Card */}
        <header className="row">
            <div className="col-12">
                <div className="card card-body bg-secondary text-ligth">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-fluid" src="perfil.jpg" alt="Foto Marcelo" />
                        </div>
                        <div className="col-8">
                            <h1>Marcelo Surco</h1>
                            <h3>Software Engineer</h3>
                            <h6>Portafolio in NextJs</h6>
                            <p>I'm a tech enthusiast and a problem solver, constantly seeking new challenges and learning opportunities. I love solving problems and sharing my knowledge with others.
                            </p>

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
                        <h3>Skills</h3>
                        {
                            skills.map((skill, i) => (
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
                        <h3>Studies</h3>
                        <ul>
                            {
                                study.map((study, i) => (
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
        <h2>Experience</h2>
        
        <div>
            <h5>Lead Software Engineer at Simplicar (February 2023 - present)</h5>
            <p>Leading the development of the main product, implementing new projects and features of the startup's web app.</p>
        </div>
        
        <div>
            <h5>EdTech at Inter Silabuz (October 2022 - February 2023)</h5>
            <p>In charge of theoretical and practical material offered by the backend developer bootcamp given by Silabuz and MTPE.</p>
        </div>
        
        <div>
            <h5>Freelance Front End Developer at SalvaJama (August 2022)</h5>
            <p>I worked in the development of a web application for the update of the supplier, for the correct functioning of an ordering application.</p>
        </div>
        
        <div>
            <h5>Full Stack Developer at Compsust UTEC (June 2022 - July 2022)</h5>
            <p>I developed a complete web application for a museum, improving the user experience and facilitating the efficient management of information by administrators.</p>
        </div>
        
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
                            portafolio.map((proyecto, i) => (
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
                </div>
            </div>
        </div>

    </Layout>
);

export default Index;