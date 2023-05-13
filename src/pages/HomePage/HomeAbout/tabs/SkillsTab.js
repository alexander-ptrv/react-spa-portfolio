// List of skills
const data = [
    {
        title: "HTML5/CSS3", 
        description: "SCSS, Flex, Grid, BEM, Bootstrap",
        key: 0
    },
    {
        title: "UI/UX design", 
        description: "Wireframing, prototyping, sitemaps, user flows",
        key: 1
    },
    {
        title: "WordPress", 
        description: "Custom themes, WooCommerce, WP Headless, 3rd party integrations",
        key: 2
    },
    {
        title: "JavaScript", 
        description: "React, Next, REST API, jQuery",
        key: 3
    },
    {
        title: "Tools", 
        description: "VS Code, Photoshop, Figma, Git",
        key: 4
    },
    {
        title: "Other", 
        description: "SEO, Google Ads, Yandex Direct",
        key: 5
    },
]

const SkillsTab = () => {
    return (  
        <>
            <div className="home-about__tab-text">
                <p>
                    For the last 6 years I mostly designed and developed for CMS WordPress, 
                    creating my own custom themes from scratch or modifying existing ones. 
                    These days my main focus is creating accessible experiences with React JS.
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
 
export default SkillsTab;