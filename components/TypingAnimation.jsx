import { useState, useEffect } from 'react';
import  './Components.css';

const TypingAnimation = () => {
  const words = ['Frontend Developer', 'System Designer', 'Backend Developer', 'Website Designer', 'System Analyst', 'Graphics Designer' ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typingSpeed = isDeleting ? 150 : 200; // Adjust typing/deleting speed
    
    const typeEffect = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText((prev) => currentWord.substring(0, prev.length + 1));
        if (displayedText === currentWord) {
          setIsDeleting(true);
          typingSpeed = 1000; // Pause before deleting
        }
      } else {
        setDisplayedText((prev) => currentWord.substring(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to the next word
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typeEffect);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <h1 className="text-4xl font-bold pl-8 my-4">
      I am a <span className="typingAnimation">{displayedText}</span>
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default TypingAnimation;
