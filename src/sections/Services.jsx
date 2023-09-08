import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
{services.map((servce, index)=> (
  <ServiceCard key={index} {...servce} />
))}
    </section>
  )
}

export default Services