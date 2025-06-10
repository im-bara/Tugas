import { useState, useEffect } from 'react';


type Props = {
  text: string;
  speed?: number;
};

export default function Typewriter({ text, speed = 80 }: Props) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="whitespace-pre">{displayedText}|</span>;
}
