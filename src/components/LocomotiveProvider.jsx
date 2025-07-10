import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // ✅ core styles

export default function LocomotiveProvider({ children }) {
    const containerRef = useRef(null);

    useEffect(() => {
        // init once
        const loco = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true },
        });

        // update on route / content changes
        const onResize = () => loco.update();
        window.addEventListener('resize', onResize);

        return () => {
            loco.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div id="scroll-container" ref={containerRef} data-scroll-container>
            {children}
        </div>
    );
}
