import { useEffect, useState } from 'react';

/
 * Custom hook for handling animations on CleanSSR website.
 * This hook manages the animation states for various elements
 * to enhance user engagement and experience.
 *
 * @returns {Object} - An object containing animation states and handlers.
 */
interface AnimationState {
  isVisible: boolean;
  triggerAnimation: () => void;
}

export const useAnimation = (): AnimationState => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Trigger animation by changing visibility state
  const triggerAnimation = () => {
    setIsVisible(true);
    // Reset visibility after animation duration
    setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Duration of animation in milliseconds
  };

  useEffect(() => {
    // Initial trigger or any condition to start animation
    const handleScroll = () => {
      if (window.scrollY > 100) {
        triggerAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isVisible, triggerAnimation };
};