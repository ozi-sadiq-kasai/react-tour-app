import Title from './Title'
import {elements} from '../data'
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
          <Title title='Our' subTitle='Services'/>
      <div className="section-center services-center">
        {elements.map((element) =>{
          const{id,title,icon,text}=element
          return(
              <article  key={id} className="service">
                  <span className="service-icon"><i className={icon}></i></span>
                  <div className="service-info">
                    <h4 className="service-title">{title}</h4>
                    <p className="service-text">
                      {text}
                    </p>
                  </div>
                </article>
          )
        })}
      </div>
    </section>
    </>
  )
}
export default Services