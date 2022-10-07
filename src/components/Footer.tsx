const Footer = () => {
  return (
    <footer className="footer">
        <div className="flex-container">            
            <div className="info">
                <h4>Come and meet us</h4>
                <p>Physical Point</p>
                <p>Argentina</p>
                <p>Avellaneda-Wilde</p>
                <p>Mitre 6480</p>
                <p>11 4227-5923</p> 
            </div>
            <div className="content-left">
                <h4>Social Media</h4>
                <p>Follow us on our social media to keep in touch</p>
                <ul>
                    <a href="https://es-la.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/?lang=es" target="_blank"><i className="fa-brands fa-twitter"></i>  </a>
                    <a href="https://www.instagram.com/?hl=es" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                </ul>                
            </div>
            <div>
                <div className="content-right">
                    <h4>Keep in touch to new arrivals</h4>
                    <input type="email" placeholder="Ingresa tu mensaje" />
                </div>
                
                <div className="info">
                    <h4>Create an account</h4>
                    <p>Do not hesitate to register to stay alert to our new content. All the time we are creating new promotions for you</p>
                </div>
            </div>                   
            
        </div>
        <div className="copyright">
            <p>Created by Juan Mosquella | All Rights Reserved | 2022</p>
        </div>      
        
    </footer>
  )
}
export default Footer