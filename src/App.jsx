import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

export default function App() {
    return(
        <>
            <Hero />
            <main>
                <About />
                <Projects />
            </main>
        </>
    );
}