// List of general info
const data = [
    {
        title: "Experience", 
        description: "7 years",
        key: 0
    },
    {
        title: "City", 
        description: "Moscow, Russia (GMT+3)",
        key: 1
    },
    {
        title: "Availability", 
        description: "Full-time",
        key: 2
    },
    {
        title: "Languages", 
        description: "English (B2), Russian (native)",
        key: 3
    }
]

const AboutTab = () => {
    return (  
        <>  
            <div className="home-about__tab-text">
                <p>
                    Hello! My name is Alexander, I'm a frontend developer and UI/UX designer, currently located
                    in Moscow, Russia. 
                </p>
                <p>
                    My interest in web development started back in 2004, when I read “HTML4 
                    For Dummies” book and created my first web page in notepad, listing my favorite 
                    video games. I took web development and design seriously much later, in 2016, on 4th 
                    year of financial university. Even though finance and economics is not what I want to 
                    do for living, university made me fall in love with analysing and putting to use various
                    data, which helps me a lot in design work.
                </p>
                <p>
                    At the time of writing this I helped more than 150 businesses to design, develop, 
                    maintain and promote their presence in the web, working both in small teams and as a 
                    freelancer. 
                </p>
            </div>
            <div className="home-about__grid">
                {data.map((item) => (
                    <div className="home-about__card" key={item.key}>
                        <h3 className="home-about__card-title">{item.title}</h3>
                        <p className="home-about__card-text">
                            {item.description}
                        </p>
                    </div>  
                ))}
            </div>
        </>
    );
}
 
export default AboutTab;