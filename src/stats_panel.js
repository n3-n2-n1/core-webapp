import * as THREE from 'three';

export function setupStats() {
  // Parchear BufferGeometry de Three.js para evitar warnings
  THREE.BufferGeometry.prototype.addAttribute = function (name, attribute) {
    this.setAttribute(name, attribute); // Redirige a setAttribute
  };

  // Configurar Stats.js
  const stats = new Stats();
  stats.customFpsPanel = stats.addPanel(new Stats.Panel('Rend.', '#000', '#002'));
  stats.showPanel(stats.domElement.children.length - 1);

  // Agregar el panel al DOM
  const parent = document.getElementById('stats');
  parent.appendChild(stats.domElement);

  // Ajustar estilo de los paneles canvas
  const statsPanes = parent.querySelectorAll('canvas');
  for (let i = 0; i < statsPanes.length; ++i) {
    statsPanes[i].style.width = '140px';
    statsPanes[i].style.height = '80px';

  }

  return stats;
}
