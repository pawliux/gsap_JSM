import gsap from 'gsap'

// Get DOM elements
const dock = document.querySelector(".dock"); // The dock container at the bottom
const icons = document.querySelectorAll(".icon"); // Individual icons inside the dock
const trigger = document.querySelector(".dock-trigger"); // Hover trigger area above the dock

// State variables to control hover and animation logic
let isDockVisible = false;        // Is the dock currently visible?
let isDockHovered = false;        // Is the user's mouse inside the dock?
let isTriggerHovered = false;     // Is the user hovering the trigger area?
let isReadyForHover = false;      // Should proximity scaling be active?

const showDock = () => {
  gsap.to(dock, {
    bottom: 0,
    duration: 0.5,
    ease: 'power1.out'

  })

  console.log('showing')
  icons.forEach((icon, i) => {
    gsap.to(icon, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power1.out',
      onComplete: () => {
        isReadyForHover = true;
      }
    })
  })
  isDockVisible = true;


}

const hideDock = () => {
  isDockVisible = false;
  gsap.to(dock, {
    bottom: -150,
    duration: 0.5,
    ease: 'power1.out'
  })

  icons.forEach(icon => {
    gsap.to(icon, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: 'power1.out'
    })
  })

  isReadyForHover = false;


}

const clickIcon = (icon) => {
  gsap.to(icon, {
    y: -10,
    duration: 0.5,
    ease: 'sine.inOut',
    repeat: 3,
    yoyo: true
  })
}

// Mouse enters the trigger area (above the dock)
trigger.addEventListener("mouseenter", () => {
  isTriggerHovered = true;
  showDock()
});

// Mouse leaves the trigger
trigger.addEventListener("mouseleave", () => {
  setTimeout(() => {
    isTriggerHovered = false;
    if (!isDockHovered) {
      hideDock()
    }

  }, 50)
});

// Track when the mouse enters/leaves the dock
dock.addEventListener("mouseenter", () => {
  isDockHovered = true
  isTriggerHovered = true

  icons.forEach((icon) => {
    icon.addEventListener('click', () => {
      clickIcon(icon)
    })
  })
});

dock.addEventListener("mouseleave", () => {
  isDockHovered = false

  setTimeout(() => {
    if (!isTriggerHovered) {
      hideDock()
    }
  }, 50);


});

// Mouse moves inside the dock — used for proximity-based scaling
dock.addEventListener("mousemove", (e) => {
  if (!isDockVisible || !isDockHovered || !isReadyForHover) return;

  const rect = dock.getBoundingClientRect();
  const centerX = e.clientX - rect.left;
  // This logic measures the horizontal distance of each icon from the cursor
  icons.forEach((icon) => {
    const iconRect = icon.getBoundingClientRect();
    const iconCenter = iconRect.left + iconRect.width / 2;
    const distance = Math.abs(centerX - (iconCenter - rect.left));
    const maxDistance = 120;

    const scale = Math.max(1, 1.7 - distance / maxDistance);

    // We'll animate this part using GSAP later
    gsap.to(icon, {
      scale: scale,
      duration: 0.5
    })
  });
});
