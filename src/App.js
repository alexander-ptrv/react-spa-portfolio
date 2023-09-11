import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutTab from "./pages/HomePage/HomeAbout/tabs/AboutTab";
import SkillsTab from "./pages/HomePage/HomeAbout/tabs/SkillsTab";
import ExperienceTab from "./pages/HomePage/HomeAbout/tabs/ExperienceTab";
import SingleProject from "./pages/SingleProject/SingleProject";
import Curtain from "./components/Curtain/Curtain";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import FormOverlay from "./components/FormOverlay/FormOverlay";

const App = () => {
    return (  
        <BrowserRouter>
            <FormOverlay />
            <Header />
            <Curtain />
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route path="/" element={<AboutTab />} />
                    <Route path="/skills" element={<SkillsTab />} />
                    <Route path="/experience" element={<ExperienceTab />} />
                </Route>
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<SingleProject />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default App;