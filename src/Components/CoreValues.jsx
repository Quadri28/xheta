import React from "react";
import './CoreValues.css'


const CoreValues = () => {

const values=[
    {
        number: '01',
        header: 'Accessibility',
        body: 'We believe that education should be accessible to all, regardless of geographical location, socioeconomic status, or physical ability.'
    },
    {
        number: '02',
        header: 'Excellence',
        body: 'We are committed to delivering excellence in education through high-quality content, innovative technology, and continuous improvement.'
    },
    {
        number: '03',
        header: 'Empowerment',
        body: 'We empower learners to take control of their education, pursue their passions, and unlock their full potential.'
    },
    {
        number: '04',
        header: 'Inclusivity',
        body: 'We celebrate diversity and embrace inclusivity, fostering an environment where every voice is valued and respected.'
    },
    {
        number: '05',
        header: 'Collaboration',
        body: 'We believe in the power of collaboration and teamwork, both within our organization and with our partners and stakeholders.'
    },
    {
        number: '06',
        header: 'Transformation',
        body: 'Our vision is to revolutionize education by harnessing the power of technology to empower learners worldwide.'
    },
]

  return (
    <section className="container my-5 px-3">
      <h4 className="text-center header mb-2">Core Values</h4>
      <p className="text-center mb-3" style={{color:'#303642', lineHeight:'19.2px', fontWeight:'400'}}>
        At XHETA, our aim is to balance physical education with online education
        and make learning accessible to all. Whether you’re a student preparing
        for exams, an adult seeking to acquire new skills, or an educator
        looking to enhance your teaching methods, XHETA has something for
        everyone. 
      </p>
      <div className="value-cards ">
        {
            values.map((value)=>(
            <div className="px-3 py-2 card value-card" key={value.number}>
                <h4 className="number">{value.number}</h4>
                <h3>{value.header}</h3>
                <p>{value.body}</p>
            </div>
            ))
        }
       
      </div>
    </section>
  );
};

export default CoreValues;
