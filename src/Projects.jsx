import Project from "./components/Project";

export default function Projects(){
    const projects = [  {img: "/assets/projects/pawsitivity.png", alt: "pawsitivity", name: "Pawsitivity", desc: "Semester long group project developing a full stack application to support need management of a fake non-profit", contributions: ["Implemented User classes and functionality on backend with full coverage unit testing in Java", "Created a metrics dashboard displaying data about the user and need base using Angular", "Led the writing of comprehensive documentation and code review"]},
                        {img: "/assets/projects/amsterdam.png", alt: "site about amsterdam", name: "Visit Amsterdam", desc: "Class project to make a site promoting somewhere you have visited before", contributions: ["Wrote full content for site along and mapped out how pages would be connected", "Developed site over two iterations using html, php, css, and javascript", "Designed site layout and color scheme"]},
                        {img: "/assets/projects/audio-visualizer.png", alt: "audio visualizer site", name: "Audio Visualizer", desc: "Website that hosts a audio visualizer that has elements react to different audio elements", contributions: ["Made custom sprites using the canvas api that react to the bpm and volume of the song playing", "Used the web audio api to process the music's data and added ways to modify their values", "Formatted the site to have a consistent theme across the home and audio page using bulma css"]},
                        {img: "/assets/projects/mini-vend.png", alt: "mini-vend", name: "Mini Vend", desc: "Final project for web engineering class, a fullstack application that works like a vending machine", contributions: ["Created api calls using python and flask to take input from the front end and get data from the backend", "Built the front end using react", "Created options to add new items to the vending machine and handle edge cases"]},
                        {img: "/assets/projects/nutrikit.png", alt: "nutrikit", name: "Nutrikit", desc: "A nutrition tracking application that allows users to see the total and individual nutritional values of different food items", contributions: ["Built front end using react that shows different food items depending on selections", "Added the ability to add, edit, and delete food items from the collection of food items", "Created popup modals using bootstrap that showed complete nutrition information"]},
                        {img: "/assets/projects/peaceland.png", alt: "peaceland", name: "Peaceland", desc: "An ongoing Vertically Integrated Project at RIT teaching empathy through memory in a post-conflict environment", contributions: ["Created a website draft to promote the project and document its progress", "Created a video trailer for the game and organized its showcasing at ImagineRIT", "Assisted in the narrative design and dialogue for the games vertical slice"]},
                        {img: "/assets/projects/ritchies.png", alt: "ritchies", name: "Ritchie's Fast Food", desc: "A multipage application that simulates the ordering process for a fast food establishment", contributions: ["Worked with on a team of 6 to develop the app with C# and .NET MAUI", "Did the front and back end for the Checkout page", "Set up the order service to manage which items have been added or removed from the basket"]},
                        {img: "/assets/projects/state-park.png", alt: "NY State Park Buddy", name: "State Park Buddy", desc: "A map interface that shows state parks in NY with descriptions and a favoriting system", contributions: ["Dynamically generated state park icons from a json collection", "Styled application using bulma css", "Used local storage to keep track of favorited state parks for different users"]}]

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