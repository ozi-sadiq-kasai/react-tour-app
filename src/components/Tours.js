import Title from './Title'
import {tours} from '../data'
const Tours = () => {
  return (
    <>
        <section className="section" id="tours">
          <Title title='Feautered' subTitle='Tours'/>

      <div className="section-center featured-center">
        {tours.map((tour)=>{
          const {id,image,date,info,details,days,country,price}=tour
          return(
            <article key={id} className="tour-card">
          <div className="tour-img-container">
            <img src={image} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{info}</h4>
            </div>
            <p>{details}</p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {country}
              </p>
              <p>{days}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
          )
        })}
      </div>
    </section>
    </>
  )
}
export default Tours