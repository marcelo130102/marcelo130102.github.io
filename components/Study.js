const Study = ({name, age, description, i})=>(
    <li >
        <h3>{name}</h3>
        <h5>{age}</h5>
        <p>{description}</p>
    </li>
);

export default Study;