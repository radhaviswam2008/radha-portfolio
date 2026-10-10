
import { useEffect } from "react";

export default function CursorEffects() {
  useEffect(() => {
    const mouseDevice = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!mouseDevice.matches) return;

    // Create cursor elements
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    const spotlight = document.createElement("div");

    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    spotlight.className = "cursor-spotlight";

    document.body.append(dot, ring, spotlight);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationId;

    // Smooth cursor movement
    const onMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      spotlight.style.left = `${mouseX}px`;
      spotlight.style.top = `${mouseY}px`;

      dot.classList.add("cursor-visible");
      ring.classList.add("cursor-visible");
      spotlight.classList.add("spotlight-visible");

      // Spotlight follows only within the hero section
      const hero = event.target.closest("#home");

      spotlight.classList.toggle(
        "spotlight-active",
        Boolean(hero)
      );
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      animationId = requestAnimationFrame(animate);
    };

    // Hover reactions
    const onMouseOver = (event) => {
      const target = event.target.closest(
        "a, button, [data-magnetic], [data-tilt]"
      );

      ring.classList.toggle("cursor-hover", Boolean(target));
    };

    // Magnetic buttons
    const onMagneticMove = (event) => {
      const element = event.target.closest("[data-magnetic]");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      element.style.transform =
        `translate(${x * 0.12}px, ${y * 0.12}px)`;
    };

    const resetMagnetic = (event) => {
      const element = event.target.closest("[data-magnetic]");
      if (element) element.style.transform = "";
    };

    // Project-card tilt
    const onTiltMove = (event) => {
      const element = event.target.closest("[data-tilt]");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 7;
      const rotateX = (0.5 - y) * 7;

      element.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    };

    const resetTilt = (event) => {
      const element = event.target.closest("[data-tilt]");
      if (element) element.style.transform = "";
    };

    const onMouseLeave = () => {
      dot.classList.remove("cursor-visible");
      ring.classList.remove("cursor-visible");
      spotlight.classList.remove(
        "spotlight-visible",
        "spotlight-active"
      );
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mousemove", onMagneticMove);
    document.addEventListener("mouseout", resetMagnetic);
    document.addEventListener("mousemove", onTiltMove);
    document.addEventListener("mouseout", resetTilt);
    document.addEventListener("mouseleave", onMouseLeave);

    animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mousemove", onMagneticMove);
      document.removeEventListener("mouseout", resetMagnetic);
      document.removeEventListener("mousemove", onTiltMove);
      document.removeEventListener("mouseout", resetTilt);
      document.removeEventListener("mouseleave", onMouseLeave);

      cancelAnimationFrame(animationId);

      dot.remove();
      ring.remove();
      spotlight.remove();
    };
  }, []);

  return null;
}
