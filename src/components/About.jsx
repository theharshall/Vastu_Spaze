import aboutImage from "..//assets/about.webp"

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
         <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">About</h2>
         <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20"></div>
         <div className='mb-8 lg:mb-0'>
            <img src={aboutImage} alt="About VastuSpaze" className="w-full h-auto" />
         </div>
         <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8"> 
         At VastuSpaze, we belive in transforming houses into dream homes.with a passion for design and a commitment to quality, our team of skilled professionals has been dedecated to delivering exceptonal renovation services for over a decade. we specialize in creatig  beautiful, functional spaces that reflect our clients unique tastes and lifestyles.from modern kitchesns and luxuruios bathrooms to serene outdoor living areas and cozy home office,we bring our experties to every project, ensuring easch renovations is tailored to meet your specific need and desires.Our mission is to enc=hance the beauty and functionality of your home,making is a place where you can truly thrive.   
         </p>
    </section>
  )
}

export default About



  
  
      
  