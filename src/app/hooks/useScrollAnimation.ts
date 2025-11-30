
import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);
  
    useEffect(() => {
      // Tạo Intersection Observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Element đã xuất hiện trong viewport
              const element = entry.target as HTMLElement;
              
              // Thêm class ladi-animation trước
              element.classList.add('ladi-animation');
              
              // Sau 200ms mới xoá ladi-animation-hidden
              setTimeout(() => {
                element.classList.remove('ladi-animation-hidden');
              }, 1000);

               // Xử lý lazyload - xoá ngay lập tức
            if (element.classList.contains('ladi-lazyload')) {
                element.classList.remove('ladi-lazyload');
              }
              
              // Ngừng observe element này sau khi đã animate
              observerRef.current?.unobserve(element);
            }
          });
        },
        {
          threshold: 0, // Trigger khi 10% element xuất hiện
          rootMargin: '0px' // Có thể điều chỉnh để trigger sớm hơn
        }
      );
  
      // Tìm tất cả elements có class ladi-animation-hidden
      const elements = document.querySelectorAll('.ladi-animation-hidden');
      const lazyloadElements = document.querySelectorAll('.ladi-lazyload');
      lazyloadElements.forEach((element) => {
        observerRef.current?.observe(element);
      });
      elements.forEach((element) => {
        observerRef.current?.observe(element);
      });
  
      // Cleanup
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);
  };