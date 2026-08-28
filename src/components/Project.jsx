import github from "../../public/assets/github.svg";

export default function Project({img, alt, name, desc, contributions, link}) {

    return(
        <div className="project">
            <div className="project-photo">
                {link ? (
                    <a href={link} target="_blank" rel="noreferrer">
                        <img className="photo" src={img} alt={alt} />
                    </a>
                ) : (
                    <img className="photo" src={img} alt={alt} />
                )}
                {/* <img className="github" src={github} alt={"github logo"}></img> */}
            </div>
            <h1>{name}</h1>
            <p>{desc}</p>
            <div>
                <h2>Contributions</h2>
                <ul>
                    {contributions.map((cont, key) => (
                        <li key={key}>{cont}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

}