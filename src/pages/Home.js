  import React from 'react';
  import './Home.css';
  import image1 from '../assets/img/1.jpg';
  import image2 from '../assets/img/2.jpg';
  import image3 from '../assets/img/3.jpg';


  function Home() {
    return (
      <div className="home-container">
        <h2>ยินดีต้อนรับ</h2>
        <h1>สู่สาขาเทคโนโลยีสารสนเทศ</h1>
        <p>
          เรามีเป้าหมายในการผลิตและพัฒนาบุคลากรทางด้านเทคโนโลยีสารสนเทศที่มีคุณภาพ 
          และมีวินัย พร้อมด้วยทักษะที่จำเป็นในการประกอบอาชีพ
        </p>

        <div className="philosophy-section">
          <h3>ปรัชญาของสาขา</h3>
          <p>*มุ่งสู่ความเป็นเลิศด้านเทคโนโลยี สร้างคนดีสู่สังคม*</p>
        </div>

        <div className="activities-section">
          <h3>กิจกรรมของเรา</h3>
          <div className="activity-images">
            {/* Replace with actual image URLs */}
            <div className="activity-images">
              <img src={image1} alt="กิจกรรมที่ 1" />
              <img src={image2} alt="กิจกรรมที่ 2" />
              <img src={image3} alt="กิจกรรมที่ 3" />
            </div>
          </div>
        </div>

        <div className="enrollment-section">
          <h2>พร้อมที่จะเรียนรู้ไปกับเราหรือยัง?</h2>
          <p>สามารถสมัครเรียนผ่านช่องทางออนไลน์ได้เลย</p>
          <button className="enroll-button">สมัครเรียนตอนนี้</button>
        </div>
      </div>
    );
  } 

  export default Home;
