import './AboutPage.css';
import Unversity from '../../assets/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg'

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="page-heading">About Our College</h1>
      <p className="page-subheading">A history of excellence, driven by a vision for the future.</p>
      
      <section className="about-section">
        <h2>Our History</h2>
        <div className='about-content'>
          <img src={Unversity} alt=""  className='about-image'/>
          <p>
         Our College is a leading educational institution committed to academic excellence, innovation, and student development. With modern facilities, experienced faculty, and diverse programs, the college provides a supportive environment that encourages learning, creativity, and personal growth. Through practical training, campus activities, and real-world exposure, students are prepared to become confident, skilled, and responsible professionals.
        </p>
        </div>
      </section>

      <section className="about-section mission-vision-section">
        <div className="mission-vision-grid">
          <div className="mv-box">
            <h2>Mission</h2>
            <p>Our mission is to offer quality education that helps students learn, grow, and build a strong future. We aim to create a supportive and inclusive environment where every student can develop skills and confidence. Through dedicated teaching and practical learning, we prepare students to succeed in life and contribute positively to society.</p>
          </div>
          <div className="mv-box">
            <h2>Vision</h2>
            <p>To become a leading institution known for excellence in education and student development. We aim to inspire innovation, promote lifelong learning, and create responsible, capable individuals who contribute positively to society.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className='mile'>Achievements & Milestones</h2> 
        <div className="achievements-timeline">
          <div className="timeline-item">
             <span className="year">2005</span>
            <p>Received 'A' Grade Accreditation from NAAC.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2012</span>
            <p>Launched the dedicated Incubation Center for student startups.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2018</span>
            <p>Secured top 5 ranking among all private technical institutions in the state.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2023</span>
            <p>Achieved 100% placement for CSE and IT departments for the fifth consecutive year.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;