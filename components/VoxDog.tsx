import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '@utils/model';
import { DogSpinner, DogContainer } from '@components/VoxDogLoader';

const easeOutCirc = (x: number) => Math.sqrt(1 - (x - 1) ** 4);

const VoxelDog = () => {
  const refContainer = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [, setCamera] = useState<THREE.OrthographicCamera>();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI),
    ),
  );
  const [scene] = useState(new THREE.Scene());
  const [, setControls] = useState<OrbitControls>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const newRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      newRenderer.setPixelRatio(window.devicePixelRatio);
      newRenderer.setSize(scW, scH);
      newRenderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(newRenderer.domElement);
      setRenderer(newRenderer);

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, newRenderer.domElement);
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      let req: number = 0;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else controls.update();

        newRenderer.render(scene, camera);
      };

      loadGLTFModel(scene, '/dog.glb', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      return () => {
        cancelAnimationFrame(req);
        newRenderer.dispose();
      };
    }
    return () => {};
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  // <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  );
};

export default VoxelDog;
