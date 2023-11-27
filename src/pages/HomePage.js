import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>
          مرحبا بكم في موقع <p>ChatConnect</p>
        </h1>
        <h2>
          .إنها تقنية رائعة تسمح لك ببناء واجهات مستخدم ديناميكية وقابلة للتوسع
        </h2>
        <h2>..استمتع بتطوير تطبيقات ويب رائعة باستخدام</h2>
      </div>
      <FaHome/>
    </div>
  );
};

export default HomePage;
