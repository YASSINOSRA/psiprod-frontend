import React from 'react';

const services = [
  { 
    title: 'إنتاج الصور والفيديو', 
    description: `
      تصوير إعلانات، فيديوهات ترويجية، وأفلام قصيرة.
      إنتاج محتوى لمنصات التواصل الاجتماعي.
      خدمات البث المباشر وتصوير الفعاليات.
      معالجة الصور وتصميم الجرافيك للمطبوعات الرقمية.
    ` 
  },
  { 
    title: 'تسجيل وإنتاج الموسيقى', 
    description: `
      تسجيل الأغاني والبودكاست.
      إنتاج موسيقى الخلفية والتوزيع الموسيقي.
      إعداد المؤثرات الصوتية للألعاب والمشاريع الرقمية.
      توفير خدمات إعادة التوزيع الموسيقي (Remixes).
    `
  },
  { 
    title: 'إنتاج الأفلام والوثائقيات', 
    description: `
      إنتاج أفلام روائية ووثائقية.
      توفير خدمات تحرير الفيديو وكتابة السيناريو.
      إنتاج مقاطع الفيديو التدريبية والتعليمية.
      المونتاج وإعداد المؤثرات الخاصة للأفلام.
    `
  },
  { 
    title: 'تنظيم المهرجانات والفعاليات', 
    description: `
      تنظيم حفلات موسيقية وفعاليات ثقافية.
      إدارة الفعاليات من التخطيط إلى التنفيذ.
      توفير خدمات التصميم والإخراج الفني للفعاليات.
      إنتاج وتجهيز الإعلانات الترويجية للمهرجانات.
    `
  }
];


function Services() {
  return (
    <section id="services" className="services">
      <div className="containerservices">
        <h1>خدماتنا</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;