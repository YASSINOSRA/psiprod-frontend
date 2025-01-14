import React from 'react';
import saudiFlag from '../assets/sa.png';
import moroccoFlag from '../assets/ma.png';

function ContactUs() {
  return (
    <section id="contact" className="contact">
      <h1 className="maintitle">تواصل معنا</h1>
      <div className="containercontact">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-card-header">
              <h3>المملكة المغربية</h3>
              <img src={moroccoFlag} alt="Morocco" className="flag" />
            </div>
            <p>
              46. الطابق الثاني، شارع الزرقطوني، حي المعاريف<br /> الدار البيضاء 20500 - المغرب<br />
              +212 661-488052 - info@psiprod.ma<br />
              السجل التجاري : 392243
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-card-header">
              <h3>المملكة العربية السعودية</h3>
              <img src={saudiFlag} alt="Saudi Arabia" className="flag" />
            </div>
            <p>
            7742، سلمة بنت ثابت 3814 حي المنار، جدة  <br />المملكة العربية السعودية<br />
              +966 536-353136 - info@psiprod.sa<br />
              السجل التجاري : 704251958
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
