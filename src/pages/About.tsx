

const About = () => {
  return (
    <section className="nosotros" >
            <div className="container-left" data-aos="fade-right" data-aos-duration="1000">
                <img src="../img/about.jpg"  alt="sport" />
            </div>            
            <div className="container-right" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" >
                <span className="span">About Us:</span>
                <h2 className="heading">Every day is a little bit <span>easier</span></h2>
                <p>We are the largest gym in the southern zone, equipped with the latest implementations in terms of strength, cardiovascular and crossfit training.</p>
                <div className="container-box">
                    <div className="box">
                        <h3><i className="fas fa-check" ></i>Healthy life</h3>
                        <p>This is a way of living</p>
                    </div>
                    <div className="box">
                        <h3><i className="fas fa-check" ></i>Muscular strength</h3>
                        <p>Your body will thank you later</p>
                    </div>
                    <div className="box">
                        <h3><i className="fas fa-check" ></i>Body building</h3>
                        <p>Change the sizes of your muscles</p>
                    </div>
                    <div className="box">
                        <h3><i className="fas fa-check" ></i>Constancy</h3>
                        <p>We teach you to never give up</p>
                    </div>                    
                    
                </div>
                <button className="btn" >Read more</button>               

            </div>
        </section>
  )
}
export default About