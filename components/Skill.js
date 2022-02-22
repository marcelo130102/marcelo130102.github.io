const Skill= ({name, percentaje, i})=>(
    <div className ="py-2">
        <h5>{name}</h5>
        <div className="progress">
            <div 
                className="progress-bar" 
                role = "progressbar" 
                style={{width:`${percentaje}%`}}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                >
            </div>
        </div>
    </div>
);

export default Skill;