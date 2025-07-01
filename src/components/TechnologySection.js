import { technologies } from "../data/technologyImages";

const TechnologySection = () => {
    return (
        <section className="technology-section">
            <div className="container">
                <div className="title-block">
                    <h3>TECHNOLOGY WHAT I USE</h3>
                </div>
                <div className="technology-grid">
                    {technologies.map((technology, index) => (
                        <div className="card" key={index}>
                            <div className="img-holder">
                                <img src={technology.image} alt="{technology.name}" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;