import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class ThreeJsService {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  constructor() {}

  init(container: HTMLElement): void {
    // Create the scene
    this.scene = new THREE.Scene();

    // Create the camera
    this.camera = new THREE.PerspectiveCamera(
      70,
      container.clientWidth / container.clientHeight,
      0.01,
      10
    );
    this.camera.position.z = 1;

    // Create the renderer with anti-aliasing enabled
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.clientWidth, container.clientHeight);

    // Append the renderer's canvas to the container
    container.appendChild(this.renderer.domElement);

    // Create a simple box
    const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    // Start the animation loop
    this.animate();
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Rotate the cube
    this.scene.children[0].rotation.x += 0.01;
    this.scene.children[0].rotation.y += 0.01;

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  }
}