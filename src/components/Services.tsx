
import {IoIosFitness} from 'react-icons/io'
import {MdDirectionsBike} from 'react-icons/md'
import {FaSolarPanel} from 'react-icons/fa'

 const services = [
    {
        title: 'Custom Routines',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eligendi vel sint consequatur aliquam exercitationem!",
        icon: <IoIosFitness />
    },
    {
        title: 'Spinning Sessions',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eligendi vel sint consequatur aliquam exercitationem!",
        icon: <MdDirectionsBike />
    },
    {
        title: 'Sunbed',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eligendi vel sint consequatur aliquam exercitationem!",
        icon: <FaSolarPanel />
    }
 ]

const Services = () => {
  return (
    <section>
        <div className="services-container">
            
            <div className="services-wrapper">
                {services.map(service => (
                    <div key={service.title} className="service-item">
                        <i>{service.icon}</i>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        
                    </div>
                ))}
            </div>
            
        </div>

    </section>
  )
}
export default Services