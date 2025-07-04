function Skills() {
    let skill = [
        { name: "ReactJS", imagePath: "/images/react.svg" },
        { name: "Angular", imagePath: "/images/angular.svg" },
        { name: "NodeJS", imagePath: "/images/nodejs.svg" },
        { name: "ExpressJS", imagePath: "/images/expressjs.svg" },
        { name: "Redux", imagePath: "/images/redux.svg" },
        { name: "JavaScipt", imagePath: "/images/javascript.svg" },
        { name: "TypeScipt", imagePath: "/images/typescript.svg" },
        { name: "Java", imagePath: "/images/java.svg" },
        { name: "HTML5", imagePath: "/images/html5.svg" },
        { name: "CSS3", imagePath: "/images/css3.svg" },
        { name: "MaterialUI", imagePath: "/images/materialUI.png" },
        { name: "TailwindCSS", imagePath: "/images/tailwindCSS.png" },
        { name: "Bootstrap", imagePath: "/images/bootstrap.svg" },
        { name: "MySQL", imagePath: "/images/mysql.svg" },
        { name: "MongoDB", imagePath: "/images/mongodb.svg" },
        { name: "Mongoose", imagePath: "/images/mongoose.svg" },
        { name: "Git", imagePath: "/images/git.svg" },
        { name: "Jira", imagePath: "/images/jira.svg" },
        { name: "Postman", imagePath: "/images/postman.svg" },
        { name: "Socket", imagePath: "/images/socket.svg" },
    ]
    return (
        <>
            <article className="blog active" data-page="blog">
                <header>
                    <h2 className="h2 article-title">Skills</h2>
                </header>
                <section className="wrapper">
                    {skill.map((sk, index) => (
                        // console.log("name", sk.name);
                        // console.log("image URL", sk.imagePath);
                        <div className="SkillContainer" key={index}>
                            <img className="skillImage" src={sk.imagePath} alt={sk.name}/>
                            <h4>{sk.name}</h4>
                        </div>
                    ))}
                    {/* <div className="SkillContainer">
                        <img className="skillImage" src="/images/react.svg"/>
                        <h4 className="h4 timeline-item-title">React</h4>
                    </div> */}
                </section>
            </article>
        </>
    )
}

export default Skills;