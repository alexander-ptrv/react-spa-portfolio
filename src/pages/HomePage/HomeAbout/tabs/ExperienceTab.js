// List of work places
const data = [
    {
        title: "GY Web", 
        subtitle: "WordPress developer, UI/UX designer. June 2018 – July 2023",
        description: "Designed, developed and maintained more than 150 websites for UK-based businesses in a small team.",
        key: 0
    },
    {
        title: "Freelance", 
        subtitle: "Frontend developer, UI/UX designer. March 2017 – June 2018",
        description: "Worked with a variety of different languages, platforms, frameworks and met a lot of great people from all around the world.",
        key: 1
    },
    {
        title: "Online HoReCa",
        subtitle: "Content manager. November 2016 – February 2017", 
        description: "Worked as a marketplace website manager performing a range of various tasks from content management to search engine optimization.",
        key: 2
    }
]

const ExperienceTab = () => {
    return (  
        <div className="home-about__rows">
            {data.map((item) => (
                <div className="home-about__card" key={item.key}>
                    <h3 className="home-about__card-title">{item.title}</h3>
                    <p className="home-about__card-subtitle">{item.subtitle}</p>
                    <p className="home-about__tab-text">{item.description}</p>
                </div>  
            ))}
        </div>
    );
}
 
export default ExperienceTab;