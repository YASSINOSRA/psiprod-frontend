import React from 'react'; 
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';

const team = [
  { name: 'وليد العسيري', role: 'رئيس مجلس الإدارة', img: img3 },
  { name: 'عبد الصمد بنبو', role: 'الرئيس التنفيذي', img: img5 },
  { name: 'آمنة بنبو', role: 'مدير العمليات الرئيسي', img: img9 },
  { name: 'سومية طكية', role: 'مديرة الموارد البشرية', img: img12 },
  { name: 'عبد الرحيم بنيو', role: 'مدير مشروع', img: img1 },
  { name: 'عبد الصمد طكية', role: 'مدير فني', img: img7 },
  { name: 'زكرياء الغزاي', role: 'محاسب', img: img6 },
  { name: 'جواد الهدين', role: 'مدير الإنتاج والتواصل', img: img10 },
  { name: 'أيوب قرواش', role: 'مصمم إبداعي', img: img4 },
  { name: 'سعد دحنون', role: 'مصمم غرافيك', img: img2 },
  { name: 'عبد الهادي البحري', role: 'مساعد تقني', img: img8 },
  { name: 'عادل المياني', role: 'تقني', img: img11 },
];

function Team() {
  return (
    <section id="team" className="team">
      <div className="containerteam">
        <h1>فريقنا</h1>
        <div className="team-grid">
          {team.reverse().map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
