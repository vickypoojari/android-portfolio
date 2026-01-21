import * as THREE from 'three';

/**
 * Vanilla Three.js scene - completely isolated from React
 * Manages its own render loop and resources
 */
class DeveloperScene {
  constructor(container) {
    this.container = container;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.figure = null;
    this.animationId = null;
    this.clock = new THREE.Clock();
    this.currentSection = 0;
    this.targetX = 0;
    this.currentX = 0;
    
    this.init();
  }

  init() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = null; // Transparent

    // Camera - fixed position
    this.camera = new THREE.PerspectiveCamera(
      50,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(0, 0, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.container.appendChild(this.renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    this.scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-5, 3, -5);
    this.scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(0, 2, 2);
    this.scene.add(pointLight);

    // Create developer figure
    this.createDeveloperFigure();

    // Start render loop
    this.animate();

    // Handle resize
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  createDeveloperFigure() {
    this.figure = new THREE.Group();
    
    // Materials
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xe0e0e0,
      roughness: 0.3,
      metalness: 0.1
    });
    
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.2
    });
    
    const darkMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      roughness: 0.4,
      metalness: 0.1
    });

    // Head
    const headGroup = new THREE.Group();
    const headGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const head = new THREE.Mesh(headGeometry, bodyMaterial);
    headGroup.add(head);
    
    // Glasses
    const glassesGeometry = new THREE.BoxGeometry(0.35, 0.12, 0.02);
    const glasses = new THREE.Mesh(glassesGeometry, darkMaterial);
    glasses.position.set(0, 0.05, 0.21);
    headGroup.add(glasses);
    
    headGroup.position.set(0, 1.4, 0);
    this.figure.add(headGroup);
    this.headGroup = headGroup;

    // Body/Torso
    const bodyGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.3);
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 0.7, 0);
    this.figure.add(body);
    this.body = body;

    // Laptop
    const laptopGroup = new THREE.Group();
    const laptopBaseGeometry = new THREE.BoxGeometry(0.5, 0.02, 0.35);
    const laptopBase = new THREE.Mesh(laptopBaseGeometry, darkMaterial);
    laptopBase.rotation.x = -0.3;
    laptopGroup.add(laptopBase);
    
    const laptopScreenGeometry = new THREE.BoxGeometry(0.5, 0.3, 0.02);
    const laptopScreen = new THREE.Mesh(laptopScreenGeometry, accentMaterial);
    laptopScreen.position.set(0, 0.15, -0.1);
    laptopScreen.rotation.x = -0.6;
    laptopGroup.add(laptopScreen);
    
    laptopGroup.position.set(0, 0.2, 0.2);
    this.figure.add(laptopGroup);

    // Left Arm
    const leftArmGroup = new THREE.Group();
    const leftUpperArmGeometry = new THREE.BoxGeometry(0.12, 0.5, 0.12);
    const leftUpperArm = new THREE.Mesh(leftUpperArmGeometry, bodyMaterial);
    leftUpperArm.position.set(0, -0.25, 0);
    leftUpperArm.rotation.z = 0.1;
    leftArmGroup.add(leftUpperArm);
    
    const leftForearmGeometry = new THREE.BoxGeometry(0.1, 0.4, 0.1);
    const leftForearm = new THREE.Mesh(leftForearmGeometry, bodyMaterial);
    leftForearm.position.set(-0.05, -0.6, 0.15);
    leftForearm.rotation.x = -0.5;
    leftForearm.rotation.z = 0.1;
    leftArmGroup.add(leftForearm);
    
    leftArmGroup.position.set(-0.35, 0.9, 0);
    this.figure.add(leftArmGroup);
    this.leftArmGroup = leftArmGroup;

    // Right Arm
    const rightArmGroup = new THREE.Group();
    const rightUpperArmGeometry = new THREE.BoxGeometry(0.12, 0.5, 0.12);
    const rightUpperArm = new THREE.Mesh(rightUpperArmGeometry, bodyMaterial);
    rightUpperArm.position.set(0, -0.25, 0);
    rightUpperArm.rotation.z = -0.1;
    rightArmGroup.add(rightUpperArm);
    
    const rightForearmGeometry = new THREE.BoxGeometry(0.1, 0.4, 0.1);
    const rightForearm = new THREE.Mesh(rightForearmGeometry, bodyMaterial);
    rightForearm.position.set(0.05, -0.6, 0.15);
    rightForearm.rotation.x = -0.5;
    rightForearm.rotation.z = -0.1;
    rightArmGroup.add(rightForearm);
    
    rightArmGroup.position.set(0.35, 0.9, 0);
    this.figure.add(rightArmGroup);
    this.rightArmGroup = rightArmGroup;

    // Legs
    const leftLegGeometry = new THREE.BoxGeometry(0.15, 0.5, 0.15);
    const leftLeg = new THREE.Mesh(leftLegGeometry, darkMaterial);
    leftLeg.position.set(-0.15, -0.15, 0);
    this.figure.add(leftLeg);
    
    const rightLegGeometry = new THREE.BoxGeometry(0.15, 0.5, 0.15);
    const rightLeg = new THREE.Mesh(rightLegGeometry, darkMaterial);
    rightLeg.position.set(0.15, -0.15, 0);
    this.figure.add(rightLeg);

    // Position and scale
    this.figure.position.set(0, -0.5, 0);
    this.figure.scale.set(0.8, 0.8, 0.8);
    
    this.scene.add(this.figure);
  }

  animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));
    
    const elapsed = this.clock.getElapsedTime();
    
    if (this.figure) {
      // Subtle breathing animation
      const breathe = Math.sin(elapsed * 0.5) * 0.02;
      this.figure.position.y = -0.5 + breathe;
      
      // Subtle head tilt
      if (this.headGroup) {
        this.headGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.05;
      }
      
      // Subtle arm movement (typing posture)
      if (this.leftArmGroup && this.rightArmGroup) {
        this.leftArmGroup.rotation.x = -0.3 + Math.sin(elapsed * 0.4) * 0.05;
        this.rightArmGroup.rotation.x = -0.3 + Math.sin(elapsed * 0.4 + 0.5) * 0.05;
      }
      
      // Smooth X-axis movement based on section
      this.currentX += (this.targetX - this.currentX) * 0.05;
      this.figure.position.x = this.currentX;
    }
    
    this.renderer.render(this.scene, this.camera);
  }

  updateSection(sectionIndex) {
    this.currentSection = sectionIndex;
    // Alternate left/right position
    this.targetX = sectionIndex % 2 === 0 ? -0.5 : 0.5;
  }

  handleResize() {
    if (!this.container || !this.camera || !this.renderer) return;
    
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    
    this.renderer.setSize(width, height);
  }

  dispose() {
    // Stop animation loop
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    // Remove resize listener
    window.removeEventListener('resize', this.handleResize.bind(this));

    // Dispose geometries and materials
    this.scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });

    // Dispose renderer
    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }

    // Clear references
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.figure = null;
  }
}

export default DeveloperScene;
