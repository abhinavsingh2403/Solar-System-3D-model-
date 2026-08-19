# 🌌 Cosmos Observatory — Ultimate Photorealistic 3D Universe

An interactive, high-fidelity 3D Solar System & Relativistic Cosmos Simulation engineered with **Three.js**, custom **GLSL Shaders**, and physically-grounded astrodynamics running at 60 FPS.

![Deep Space Nebula Theme](https://img.shields.io/badge/Theme-Deep%20Space%20Nebula-blue)
![Three.js](https://img.shields.io/badge/Three.js-r128-orange)
![GLSL Shaders](https://img.shields.io/badge/GLSL-Custom%20Shaders-purple)
![Framerate](https://img.shields.io/badge/Performance-60%20FPS%20Locked-brightgreen)

---

## 🌟 Key Features

### 🔬 Physical & Relativistic Realism
- **Keplerian Elliptical Orbits**: Every planet moves along eccentric orbits ($e_{\text{Mercury}} = 0.205$, $e_{\text{Halley}} = 0.967$, $e_{\text{Pluto}} = 0.249$).
- **Per-Body Sidereal Rotation & Axial Tilts**: True physical inclination and axial tilts (Earth $23.44^\circ$, Mars $25.19^\circ$, Saturn $26.73^\circ$, Uranus $97.77^\circ$, Venus $177.3^\circ$ retrograde).
- **☀️ Ultra-Realistic Sun**: 7-octave FBM convective plasma shader with granulation convective cells, moving sunspots, limb darkening, coronal glow, and magnetic tube prominence arcs.
- **🌍 Earth Day/Night Terminator Shader**: Dynamic twilight terminator with golden metropolitan night lights on the dark hemisphere, specular ocean sun-glint, and drifting cloud layer.
- **💍 Photorealistic Saturn Rings**: Custom shader featuring Cassini Division, Encke Gap, dynamic planet shadow on the rings, and B-ring brightness density.
- **🕳️ Gargantua Kerr Singularity (Black Hole)**: Relativistic accretion disk with Doppler color beaming, photon sphere ring, and extreme spacetime curvature.
- **🌌 Einstein Spacetime Curvature Grid**: Dynamic 3D vectorized gravitational deformation plane warping in real-time beneath celestial masses.

---

### 🛰️ Spacecraft & Interplanetary Relics
- **ISS (International Space Station)**: Low Earth Orbit laboratory with automated active sun-tracking solar arrays and flashing navigation strobes.
- **JWST (James Webb Space Telescope)**: Sun-Earth L2 halo orbit station with 18 gold hexagonal primary beryllium mirror segments and 5-layer Kapton sunshield.
- **Voyager 1**: Interstellar robotic probe beyond the heliopause equipped with the Golden Record plaque and high-gain dish.
- **Halley's Comet**: Periodic comet with cyan ion particle tail pointing anti-sunward.

---

### 🎮 Interactive Tools & Telescopes
- **🌱 Circumstellar Habitable "Goldilocks" Zone**: Glowing radial liquid-water band ($0.95 - 1.45 \text{ AU}$).
- **🧲 Planetary Magnetospheres**: 3D dipole Van Allen radiation belt loops around Earth and Jupiter.
- **⚖️ Planetary Comparison Arena**: Side-by-side interactive comparison modal with real-time astronomical parameters.
- **📏 3D Laser Distance Measurement**: Real-time laser rangefinder computing direct distance in **Million km** and **Astronomical Units (AU)**.
- **🚀 Ride Along / Chase Cam**: Trailing cockpit flight camera locked to any selected planet, moon, or spacecraft.
- **☄️ Shooting Star Meteor Showers**: Dynamic high-velocity atmospheric ion streaks with procedural triggers.
- **✨ 3D Constellations**: Real astronomical asterisms (Orion, Ursa Major, Cassiopeia) mapped onto the deep cosmic sphere.
- **🔊 Generative Space Audio Synthesizer**: Web Audio API ambient drone and planetary resonant frequencies.

---

## ⌨️ Keyboard Shortcuts

| Key | Action / Target |
|---|---|
| <kbd>0</kbd> | Sun |
| <kbd>1</kbd>–<kbd>9</kbd> | Mercury &rarr; Neptune, Pluto |
| <kbd>B</kbd> | Gargantua Singularity (Black Hole) |
| <kbd>V</kbd> / <kbd>J</kbd> / <kbd>I</kbd> | Voyager 1 / JWST / ISS |
| <kbd>H</kbd> | Toggle Habitable Goldilocks Zone |
| <kbd>G</kbd> | Toggle Einstein Spacetime Gravity Grid |
| <kbd>O</kbd> | Toggle Elliptical Orbit Trails |
| <kbd>L</kbd> | Toggle 3D Body Name Labels |
| <kbd>M</kbd> | 3D Laser Distance Rangefinder |
| <kbd>C</kbd> | Cockpit / Ride Along Chase Camera |
| <kbd>T</kbd> | Automated Cinematic Tour |
| <kbd>F</kbd> | Trigger Coronal Mass Ejection (Solar Flare) |
| <kbd>Space</kbd> | Pause / Resume Simulation |
| <kbd>Esc</kbd> | Overview / Close Modals |

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser, or serve locally with Python:

```bash
# Python 3 local server
python -m http.server 3000
```
Then navigate to `http://localhost:3000`.

---

## 🛠️ Tech Stack & Design
- **Three.js (r128)** & **WebGL**
- **Custom GLSL Shaders** (Photosphere, Rayleigh/Mie Atmosphere, Day/Night Terminator, Saturn Rings, Accretion Disk)
- **Web Audio API**
- **Deep Space Nebula Design Tokens** (Glassmorphic HUD, JetBrains Mono telemetry, multi-stop radial gradients)
