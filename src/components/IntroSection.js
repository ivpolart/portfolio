import bg01 from "../images/bg-01.jpg"

const IntroSection = () => {
    return (
        <section className="intro-section" style={{backgroundImage: `url(${bg01})`}}>
            <div className="container">
                <div className="post-block">
                    <h1>Hello!</h1>
                    <p>
                        I`m <mark>Ivan Polozkov</mark><br/>
                        Front-end Developer
                    </p>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;