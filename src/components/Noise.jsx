import React, { useEffect, useRef } from 'react';

const Noise = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let frame = 0;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createNoise = () => {
      const idata = ctx.createImageData(canvas.width, canvas.height);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        buffer32[i] = ((Math.random() * 255) | 0) << 24;
      }

      ctx.putImageData(idata, 0, 0);
    };

    const loop = () => {
      frame = requestAnimationFrame(loop);
      createNoise();
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-[0.11] mix-blend-soft-light"
      />
    </div>
  );
};

export default Noise; 