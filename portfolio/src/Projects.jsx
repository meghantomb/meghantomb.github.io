import Project from "./components/Project";

export default function Projects(){
    const projects = [  {img: "/assets/projects/pawsitivity.png", alt: "pawsitivity", name: "Pawstivity", desc: "Semester long group project developing a full stack application to support need managment of a fake non-profit", contributions: ["Implemented User classes and functionality on backend with full coverage unit testing in Java", "Created a metrics dashboard displaying data about the user and need base using Angular", "Led the writing of comprehensive documentation and code review"]},
                        {img: "/assets/amsterdam.png", alt: "site about amsterdam", name: "Visit Amsterdam", desc: "Class project to make a site promoting somewhere you have visited before", contributions: ["thing one", "thing two", "thing three"]},
                        {img: "/assets/galaxy.jpg", alt: "fake project 3", name: "fake project 3", desc: "this is a fake project", contributions: ["thing one", "thing two", "thing three"]},
                        {img: "/assets/galaxy.jpg", alt: "fake project 4", name: "fake project 4", desc: "this is a fake project", contributions: ["thing one", "thing two", "thing three"]},
                        {img: "/assets/galaxy.jpg", alt: "fake project 5", name: "fake project 5", desc: "this is a fake project", contributions: ["thing one", "thing two", "thing three"]},
                        {img: "/assets/galaxy.jpg", alt: "fake project 6", name: "fake project 6", desc: "this is a fake project", contributions: ["thing one", "thing two", "thing three"]}]

    return(
        <section>
            <h3>Featured Projects</h3>
            <div className="projects">
                {projects.map((item, idx) => (
                    <Project key={idx} img={item.img} alt={item.alt} name={item.name} desc={item.desc} contributions={item.contributions}/>
                ))}
            </div>
        </section>
    );

}