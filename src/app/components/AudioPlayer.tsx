"use client";

import { useEffect, useRef, useState } from "react";

interface AutoAudioPlayerProps {
  src: string; // Đường dẫn file nhạc (vd: /sounds/music.mp3)
}

export default function AutoAudioPlayer({ src }: AutoAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Hàm xử lý để phát nhạc
    const handleInteraction = () => {
      const audio = audioRef.current;
      if (audio && !isPlaying) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            // Sau khi đã phát được rồi thì gỡ bỏ sự kiện để không gọi lại nữa
            cleanupListeners(); 
          })
          .catch((err) => {
            console.warn("Vẫn chưa thể phát nhạc:", err);
          });
      }
    };

    // Hàm dọn dẹp các sự kiện lắng nghe
    const cleanupListeners = () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    // 1. Thử phát ngay lập tức (thường sẽ thất bại nếu chưa có tương tác trước đó)
    handleInteraction();

    // 2. Nếu thất bại, lắng nghe bất kỳ hành động nào của người dùng để phát nhạc
    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("touchstart", handleInteraction); // Hỗ trợ mobile

    // Dọn dẹp khi component unmount
    return () => {
      cleanupListeners();
    };
  }, [src, isPlaying]);

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 9999 }}>
       {/* Ẩn audio đi, hoặc để controls nếu muốn người dùng tự tắt.
         Ở đây mình để hiển thị nhỏ để bạn biết trạng thái.
       */}
      <audio
      style={{display: 'none'}}
        ref={audioRef}
        src={src}
        loop
        controls // Bạn có thể xóa 'controls' và thêm style={{ display: 'none' }} nếu muốn ẩn hoàn toàn
      />
      
      {/* (Tùy chọn) Hiển thị trạng thái cho bạn debug */}
      {/* {!isPlaying && (
        <div style={{ background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px', fontSize: '12px', borderRadius: '4px' }}>
           Click bất kỳ đâu để phát nhạc
        </div>
      )} */}
    </div>
  );
}