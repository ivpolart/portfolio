import img01 from "../images/img-01.webp"
import Button from '../components/Button';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="title-block">
                    <h3>ABOUT ME</h3>
                </div>
                <div className="columns-block">
                    <div className="left-column">
                    <div className="post-holder">
                        <p>
                        I'm a web developer with over 5 years of experience, including a strong background working at a digital agency specializing in email marketing, landing pages, and marketing solutions.<br/><br/>
                        I build websites and web applications using clean, responsive HTML, CSS, JavaScript. I have commercial experience working with Vanilla JS and React,&nbsp;and I’m comfortable handling both layout and more complex frontend functionality. I also have a good understanding of databases — both SQL and NoSQL.<br/><br/>
                        I regularly work with design tools like Figma, Photoshop, and Illustrator, and I'm experienced in using CMS platforms such as WordPress, HubSpot, Marketo, Pardot.<br/><br/>
                        I'm always learning and keeping up with the latest web development trends&nbsp;and best practices. I strive to write clean, maintainable code, reflect on my work, and continuously improve. I'm open to new challenges and always looking for opportunities to grow professionally and contribute to meaningful projects.
                        </p>
                    </div>
                    <div className="btn-holder">
                        <Button href="/files/ivan-cv.pdf">Download CV</Button>
                    </div>
                    </div>
                    <div className="right-column">
                    <div className="img-holder">
                        <img src={img01} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;