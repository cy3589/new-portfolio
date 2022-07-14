import { Mesh, Scene } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLTFModel = (
  scene: Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true },
) =>
  new Promise((resolve, reject) => {
    const { receiveShadow, castShadow } = options;
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = 'dog';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);
        obj.traverse((child) => {
          if (child instanceof Mesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      (error) => {
        reject(error);
      },
    );
  });
