import { useRef, useEffect } from 'react';

/**
 * NeuralCanvas — Animated particle network backdrop for the hero section.
 * Renders a web of neural-inspired dots and connections that react to
 * the viewport size. Soft, organic movement with the brand's warm palette.
 */
export default function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const PARTICLE_COUNT = 80;
    const CONNECTION_DIST = 150;
    const PRIMARY_R = 255, PRIMARY_G = 255, PRIMARY_B = 255;

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function initParticles() {
      particles = [];
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
        });
      }
    }

    function draw() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Update & draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Wrap around edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const alpha = 0.2 + Math.sin(p.pulse) * 0.15;
        const radius = p.r + Math.sin(p.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PRIMARY_R}, ${PRIMARY_G}, ${PRIMARY_B}, ${alpha})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${PRIMARY_R}, ${PRIMARY_G}, ${PRIMARY_B}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    const resizeHandler = () => {
      resize();
      initParticles();
    };
    window.addEventListener('resize', resizeHandler);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="hero-canvas-container">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
        aria-hidden="true"
      />
    </div>
  );
}
