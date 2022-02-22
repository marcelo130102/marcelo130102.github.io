import Layout from "../components/Layout";
import Error from "./_error";

const GitHub = ({user, statusCode})=>{
    if(statusCode){
        return <Error/>
    }

    return(    
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h3>{user.name}</h3>
                        <img src={user.avatar_url} alt={user.name} className="circular--square"/>
                        <p className="my-3">{user.bio}</p>
                        <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">Mi Blog</a>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary">Ir a mi GitHub</a>
                    </div> 
                </div>
            </div>
        </Layout>);
};

export async function getServerSideProps(){
    const res = await fetch('https://api.github.com/users/marcelo130102');
    const data = await res.json();
    const statusCode = res.status > 200 ? res.status : false;


    return{
        props:{
            user: data,
            statusCode
        }
    }
}

export default GitHub;