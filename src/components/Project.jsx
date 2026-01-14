

export default function Project({img, alt, name, desc, contributions}) {

    return(
        <div className="project">
            <div className="project-photo"><img src={img} alt={alt}></img></div>
            <h1>{name}</h1>
            <p>{desc}</p>
            <div>
                <h2>My Contributions</h2>
                <ul>
                    {contributions.map((cont, key) => (
                        <li key={key}>{cont}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

}