const Proyecto = ({img, name, description, link, i})=>(
    <div className="col-md-4 p-2" >
        <div className="card h-100" >
            <div className="overflow">
                <a href={link}>   
                    <img src={img} alt={name} className="card-img-top"/>
                </a>
             
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={link}>View more</a>
            </div>
        </div>
    </div>
);

export default Proyecto;