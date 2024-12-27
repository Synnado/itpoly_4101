import React from 'react';
import './Courses.css';

function Courses() {
  return (
    <div className="courses-container">
      <h2>หลักสูตรที่เปิดสอน</h2>

      {/* Vocational Certificate Section */}
      <div className="course-section">
        <h3>ระดับประกาศนียบัตรวิชาชีพ (ปวช.)</h3>
        <p>
          หลักสูตรเน้นพัฒนาทักษะพื้นฐานด้านเทคโนโลยีสารสนเทศ เช่น การพัฒนาโปรแกรมคอมพิวเตอร์ 
          การจัดการเครือข่าย และการแก้ไขปัญหาเทคนิคพื้นฐาน นักศึกษาจะได้รับความรู้ด้าน:
        </p>
        <ul>
          <li>การเขียนโปรแกรมพื้นฐาน (Basic Programming)</li>
          <li>การติดตั้งและดูแลระบบเครือข่ายคอมพิวเตอร์ (Networking Basics)</li>
          <li>การออกแบบเว็บไซต์ (Web Design)</li>
        </ul>
        <a href="https://drive.google.com/file/d/16Dn3jtNG2FaLIZA3eZaVv7Vk13sDF1G0/view" className="download-link" target="_blank" rel="noopener noreferrer">
          ดาวน์โหลดหลักสูตร ปวช. (PDF)
        </a>
      </div>

      {/* Higher Vocational Certificate Section */}
      <div className="course-section">
        <h3>ระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</h3>
        <p>
          หลักสูตรนี้มุ่งเน้นความเชี่ยวชาญเฉพาะด้านเพื่อเตรียมความพร้อมสำหรับการทำงานในอุตสาหกรรม 
          หรือการศึกษาต่อในระดับปริญญาตรี นักศึกษาจะได้รับความรู้ในหัวข้อที่ลึกซึ้งกว่า เช่น:
        </p>
        <ul>
          <li>การพัฒนาซอฟต์แวร์ขั้นสูง (Advanced Software Development)</li>
          <li>การจัดการระบบฐานข้อมูล (Database Management)</li>
          <li>ความปลอดภัยทางไซเบอร์ (Cybersecurity)</li>
          <li>การวิเคราะห์ข้อมูล (Data Analytics)</li>
        </ul>
        <a href="https://drive.google.com/file/d/1lCW9E3T-7VDFeZtJ3xV1Iq4c5vNGtdo9/view" className="download-link" target="_blank" rel="noopener noreferrer">
          ดาวน์โหลดหลักสูตร ปวส. (PDF)
        </a>
      </div>
    </div>
  );
}

export default Courses;
