import "./style.css";
import {
  ShaderMount,
  meshGradientFragmentShader,
  defaultObjectSizing,
  getShaderColorFromString,
  ShaderFitOptions,
} from "@paper-design/shaders";

const COLORS = [
  "#001514ff",
  "#b38281ff",
  "#fbfffeff",
  "#6b0504ff",
  "#a3320bff",
  "#c5711dff",
  "#e6af2eff",
];

const parentElement = document.getElementById("mesh-container");

const uniforms = {
  // Own uniforms
  u_colors: COLORS.map(getShaderColorFromString),
  u_colorsCount: COLORS.length,
  u_distortion: 0.8,
  u_swirl: 0.45,
  u_grainMixer: 0.1,
  u_grainOverlay: 0,

  // Sizing uniforms
  u_fit: ShaderFitOptions[defaultObjectSizing.fit],
  u_rotation: defaultObjectSizing.rotation,
  u_scale: defaultObjectSizing.scale,
  u_offsetX: defaultObjectSizing.offsetX,
  u_offsetY: defaultObjectSizing.offsetY,
  u_originX: defaultObjectSizing.originX,
  u_originY: defaultObjectSizing.originY,
  u_worldWidth: defaultObjectSizing.worldWidth,
  u_worldHeight: defaultObjectSizing.worldHeight,
};

// pseudo-random number generator seeded by timestamp
function mulberry32(a) {
  return function () {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rng = mulberry32(Date.now());
const startFrame = Math.floor(rng() * 10000000);

const mount = new ShaderMount(
  parentElement,
  meshGradientFragmentShader,
  uniforms,
  {},
  0.4, // speed
  startFrame, // frame
);

Promise.all([
  document.fonts.ready,
  new Promise((resolve) => requestAnimationFrame(resolve)),
]).then(() => {
  document.body.classList.add("ready");
});
