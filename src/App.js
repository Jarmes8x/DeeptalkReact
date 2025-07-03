import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, Moon, Sun, Rainbow, Smile, Coffee, Music, ArrowLeft, RefreshCw, Brain, Camera, Lightbulb } from 'lucide-react';
import './App.css';

const CuteLandingPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [floatingElements, setFloatingElements] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentQuestion, setCurrentQuestion] = useState('');

  const questions = {
    love: [
      "คุณเชื่อในรักแรกพบไหม? ทำไม?",
      "คุณเคยรักใครโดยไม่มีเหตุผลไหม?",
      "คุณกลัวการตกหลุมรักอีกครั้งหรือเปล่า?",
      "ความรักที่ดีสำหรับคุณคืออะไร?",
      "คุณเคยยอมเปลี่ยนตัวเองเพราะความรักไหม?",
      "คุณคิดว่าความรักควรมีเงื่อนไขไหม?",
      "อะไรทำให้คุณรู้สึกว่าคุณถูกรักจริง ๆ?",
      "คุณเคยรักใครแต่ต้องปล่อยเขาไปไหม?",
      "คุณกลัวการสูญเสียคนที่คุณรักมากแค่ไหน?",
      "ความแตกต่างระหว่างการชอบกับการรักสำหรับคุณคืออะไร?",
      "คุณเคยเจ็บปวดเพราะความรักขนาดไหน?",
      "คุณให้อภัยคนรักได้แค่ไหน?",
      "คุณคิดว่าเวลาสำคัญกับความรักไหม?",
      "คุณเคยเสียคนดี ๆ ไปเพราะความรักไหม?",
      "ความรักครั้งไหนที่คุณอยากย้อนเวลากลับไปแก้ไข?",
      "อะไรที่ทำให้คุณรู้สึกปลอดภัยในความรัก?",
      "คุณเคยรักตัวเองจริง ๆ ไหม?",
      "คุณเชื่อในรักแท้ตลอดชีวิตไหม?",
      "คุณเคยรู้สึกไม่สมควรได้รับความรักไหม?",
      "คุณนิยามความรักในประโยคเดียวได้อย่างไร?",
      "ความรักควรเป็นเรื่องของโชคชะตาหรือการเลือก?",
      "ถ้าความรักทำให้เจ็บ คุณยังอยากรักอีกไหม?",
      "คุณเชื่อว่าความรักเปลี่ยนคนได้ไหม?",
      "อะไรที่คุณอยากให้คนรักรับรู้เกี่ยวกับคุณมากที่สุด?",
      "คุณเคยรักใครที่รักไม่ได้หรือเปล่า?",
      "ถ้าต้องเลือกระหว่างความรักกับความฝัน คุณจะเลือกอะไร?",
      "คุณคิดว่าความรักต้องใช้เวลาไหม?",
      "ความรักที่ไม่สมหวังเคยสอนอะไรคุณบ้าง?",
      "คุณรู้สึกปลอดภัยไหมเมื่อมีคนรักอยู่ข้าง ๆ?",
      "คุณเคยเจอความรักที่เหมือนในฝันบ้างไหม?"
    ],

    memories: [
      "ความทรงจำไหนที่คุณไม่เคยลืมเลย?",
      "คุณอยากลบความทรงจำไหนออกจากชีวิต?",
      "ช่วงเวลาที่คุณมีความสุขที่สุดในชีวิตคือเมื่อไหร่?",
      "ใครเป็นคนที่อยู่ในความทรงจำของคุณเสมอ?",
      "คุณคิดว่าเวลาเปลี่ยนความทรงจำของเราได้ไหม?",
      "คุณเคยเสียดายที่ไม่ได้ทำบางอย่างในอดีตไหม?",
      "ความทรงจำไหนที่ทำให้คุณยิ้มทุกครั้งที่นึกถึง?",
      "คุณมีที่ไหนที่มีความทรงจำพิเศษไหม?",
      "คุณคิดถึงตัวเองในวัยเด็กบ่อยไหม?",
      "ความทรงจำไหนที่ทำให้คุณร้องไห้จนลืมไม่ลง?",
      "ถ้าคุณย้อนเวลาได้ คุณจะกลับไปแก้ไขอะไร?",
      "อดีตเคยสอนอะไรคุณบ้าง?",
      "คุณเคยกลัวที่จะลืมคนสำคัญไหม?",
      "ถ้าความทรงจำหายไป คุณจะกลัวไหม?",
      "ความทรงจำไหนที่คุณอยากแชร์ให้คนอื่นฟังที่สุด?",
      "คุณรู้สึกอย่างไรเมื่อความทรงจำเริ่มจางลง?",
      "คุณเก็บความทรงจำในรูปแบบไหน (ภาพถ่าย/ของ/เพลง)?",
      "คุณเชื่อว่าความทรงจำมีผลต่ออนาคตของเราหรือไม่?",
      "ความทรงจำไหนทำให้คุณกลายเป็นคุณในวันนี้?",
      "ถ้าชีวิตคุณเป็นหนัง คุณอยากย้อนกลับไปดูฉากไหนมากที่สุด?",
      "คุณเคยสร้างความทรงจำที่คุณรู้ว่าจะไม่มีวันลืมไหม?",
      "คุณเคยรู้สึกว่าความทรงจำบางอย่างไม่ยุติธรรมไหม?",
      "คุณคิดว่าเราควรยึดติดกับความทรงจำแค่ไหน?",
      "ถ้าคุณสามารถบันทึกความทรงจำได้ คุณอยากบันทึกช่วงไหน?",
      "คุณเคยลืมความทรงจำที่คุณเคยหวงแหนไหม?",
      "ใครเป็นคนที่ทำให้คุณมีความทรงจำดีที่สุด?",
      "คุณกล้ากลับไปในสถานที่ที่เต็มไปด้วยอดีตไหม?",
      "คุณเคยเสียดายที่ไม่ใช้เวลากับใครบางคนมากกว่านี้ไหม?",
      "คุณคิดว่าความทรงจำจะอยู่กับเราตลอดไปไหม?",
      "ถ้าคุณต้องเลือกเก็บไว้แค่หนึ่งความทรงจำ คุณจะเลือกอะไร?"
    ],

    feelings: [
      "ตอนนี้คุณรู้สึกยังไงจริง ๆ?",
      "คุณเคยเก็บความรู้สึกไว้คนเดียวไหม?",
      "คุณกลัวความรู้สึกอะไรที่สุดในชีวิต?",
      "คุณเคยร้องไห้แบบไม่มีเหตุผลไหม?",
      "คุณรู้สึกว่าตัวเองเข้มแข็งหรือเปราะบาง?",
      "คุณเคยรู้สึกว่าคุณไม่เพียงพอไหม?",
      "อะไรทำให้คุณรู้สึกเป็นตัวของตัวเองที่สุด?",
      "คุณรับมือกับความเศร้าอย่างไร?",
      "คุณเคยรู้สึกโดดเดี่ยวท่ามกลางผู้คนไหม?",
      "คุณเคยรู้สึกไม่เข้าใจกับความรู้สึกของตัวเองไหม?",
      "คุณแสดงความรู้สึกกับคนอื่นได้ง่ายไหม?",
      "คุณเคยทำร้ายความรู้สึกของใครโดยไม่ตั้งใจไหม?",
      "มีเพลงไหนที่ตรงกับความรู้สึกคุณที่สุดตอนนี้?",
      "คุณรู้สึกว่าความรู้สึกของคุณมีค่าหรือเปล่า?",
      "คุณเคยกลัวที่จะพูดความรู้สึกจริง ๆ ออกไปไหม?",
      "คุณมีใครที่สามารถเข้าใจความรู้สึกคุณได้โดยไม่ต้องพูดไหม?",
      "อะไรที่ทำให้หัวใจคุณรู้สึกอุ่นที่สุด?",
      "คุณรู้สึกว่าตัวเองมีคุณค่าในสายตาใครบ้าง?",
      "ความรู้สึกไหนที่คุณอยากเก็บไว้ตลอดไป?",
      "คุณกล้าที่จะซื่อสัตย์กับความรู้สึกตัวเองมากแค่ไหน?",
      "คุณเคยไม่เข้าใจความรู้สึกของตัวเองนานที่สุดนานแค่ไหน?",
      "คุณเคยรู้สึกว่าตัวเอง 'ว่างเปล่า' บ้างไหม?",
      "คุณเคยฝืนความรู้สึกตัวเองเพื่อใครสักคนไหม?",
      "คุณเคยรู้สึกดีมาก ๆ จนกลัวมันจะหายไปไหม?",
      "ความรู้สึกที่คุณกลัวจะกลับมาอีกครั้งคืออะไร?",
      "คุณเคยรู้สึกเหมือนหลงทางในชีวิตไหม?",
      "คุณเคยรู้สึกว่าไม่มีใครเข้าใจคุณจริง ๆ ไหม?",
      "คุณคิดว่าความรู้สึกสามารถโกหกตัวเองได้ไหม?",
      "อะไรที่ทำให้คุณรู้สึกว่าคุณยังมีคุณค่า?",
      "คุณรู้สึกว่าใจคุณตอนนี้หนักหรือเบา?"
    ]
  };



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Create floating elements
    const elements = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        icon: [Heart, Star, Sparkles, Moon, Sun, Rainbow, Smile, Coffee, Music][Math.floor(Math.random() * 9)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4
      });
    }
    setFloatingElements(elements);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString('th-TH', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('th-TH', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRandomQuestion = (category) => {
    const categoryQuestions = questions[category];
    const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    setCurrentQuestion(categoryQuestions[randomIndex]);
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setCurrentQuestion('');
  };

  const getPageConfig = (page) => {
    const configs = {
      love: {
        title: "ความรัก",
        icon: Heart,
        description: "สำรวจความรู้สึกและความรักในใจของคุณ"
      },
      memories: {
        title: "ความทรงจำ",
        icon: Camera,
        description: "ย้อนรอยความทรงจำที่งามในชีวิตคุณ"
      },
      feelings: {
        title: "ความรู้สึก",
        icon: Brain,
        description: "เข้าใจและสำรวจความรู้สึกภายในใจ"
      }
    };
    return configs[page] || configs.love;
  };

  if (currentPage !== 'home') {
    const config = getPageConfig(currentPage);
    const IconComponent = config.icon;

    return (
      <div className={`page-container ${currentPage}-theme`}>
        {/* Floating Background Elements */}
        <div className="floating-elements">
          {floatingElements.map((element) => {
            const FloatingIcon = element.icon;
            return (
              <div
                key={element.id}
                className="floating-element"
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`
                }}
              >
                <FloatingIcon className="floating-icon" />
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <div className="header">
            <button
              onClick={() => navigateToPage('home')}
              className="back-button"
            >
              <ArrowLeft className="icon-small" />
              กลับหน้าหลัก
            </button>
            <div className="title-section">
              <IconComponent className="title-icon" />
              <h1 className="page-title">{config.title}</h1>
            </div>
          </div>

          {/* Description */}
          <div className="description">
            <p className="description-text">{config.description}</p>
          </div>

          {/* Random Question Button */}
          <div className="button-container">
            <button
              onClick={() => getRandomQuestion(currentPage)}
              className={`random-button ${currentPage}-button`}
            >
              <RefreshCw className="icon-medium" />
              สุ่มคำถาม
              <Lightbulb className="icon-medium" />
            </button>
          </div>

          {/* Question Display */}
          {currentQuestion && (
            <div className="question-container">
              <div className="question-card">
                <div className="question-header">
                  <IconComponent className="question-icon" />
                </div>
                <h2 className="question-title">คำถามสำหรับคุณ</h2>
                <p className="question-text">{currentQuestion}</p>
              </div>
            </div>
          )}

          {/* Decorative Cards */}
          <div className="cards-grid">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="decorative-card">
                <div className="card-icon-container">
                  <IconComponent className="card-icon" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">
                    {config.title} #{index}
                  </h3>
                  <p className="card-description">
                    สำรวจ{config.title.toLowerCase()}ในมุมมองใหม่
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        {floatingElements.map((element) => {
          const IconComponent = element.icon;
          return (
            <div
              key={element.id}
              className="floating-element"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`
              }}
            >
              <IconComponent className="floating-icon" />
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="home-content">
        {/* Header Section */}
        <div className="welcome-section">
          <div className="welcome-header">
            <Sparkles className="sparkle-icon sparkle-left" />
            <h1 className="welcome-title">ยินดีต้อนรับ</h1>
            <Sparkles className="sparkle-icon sparkle-right" />
          </div>
          <p className="welcome-subtitle">
            สู่โลกแห่งความรู้สึกและความทรงจำ
          </p>
        </div>

        {/* Time and Date Display */}
        <div className="time-card">
          <div className="time-content">
            <div className="time-display">
              {formatTime(currentTime)}
            </div>
            <div className="date-display">
              {formatDate(currentTime)}
            </div>
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="interactive-cards">
          <div 
            onClick={() => navigateToPage('love')}
            className="interactive-card love-card"
          >
            <div className="card-icon-wrapper">
              <Heart className="interactive-icon heart-icon" />
            </div>
            <h3 className="interactive-title">ความรัก</h3>
            <p className="interactive-description">สำรวจความรู้สึกรักและความผูกพันในใจ</p>
          </div>

          <div 
            onClick={() => navigateToPage('memories')}
            className="interactive-card memories-card"
          >
            <div className="card-icon-wrapper">
              <Camera className="interactive-icon camera-icon" />
            </div>
            <h3 className="interactive-title">ความทรงจำ</h3>
            <p className="interactive-description">ย้อนรอยความทรงจำที่งามในชีวิต</p>
          </div>

          <div 
            onClick={() => navigateToPage('feelings')}
            className="interactive-card feelings-card"
          >
            <div className="card-icon-wrapper">
              <Brain className="interactive-icon brain-icon" />
            </div>
            <h3 className="interactive-title">ความรู้สึก</h3>
            <p className="interactive-description">เข้าใจและสำรวจความรู้สึกภายในใจ</p>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="footer-text">
            <Coffee className="footer-icon" />
            สร้างด้วยความรักและการใส่ใจ
            <Music className="footer-icon" />
          </p>
           <p className="footer-text">        
            Dev By. JARMES 2025
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>
      <div className="decoration decoration-3"></div>
      <div className="decoration decoration-4"></div>
    </div>
  );
};

export default CuteLandingPage;