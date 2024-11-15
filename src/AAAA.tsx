import { Unity, useUnityContext } from "react-unity-webgl";

export const AAAA = () => {
  // useEffect(() => {
  //   const aaa = async () => {
  //     console.log(
  //       await fetch("Build/Builds.framework.js.gz", {
  //         headers: {
  //           "Content-Encoding": "gzip",
  //         },
  //       })
  //     );
  //   };
  //   aaa();
  // }, []);

  const { unityProvider, initialisationError, loadingProgression, isLoaded } =
    useUnityContext({
      loaderUrl: "Build/MONKE_RUN_TEST_U_6_GZIP.loader.js",
      dataUrl: "Build/MONKE_RUN_TEST_U_6_GZIP.data.gz",
      frameworkUrl: "Build/MONKE_RUN_TEST_U_6_GZIP.framework.js.gz",
      codeUrl: "Build/MONKE_RUN_TEST_U_6_GZIP.wasm.gz",
    });

  console.log(initialisationError, loadingProgression, isLoaded);

  return (
    <Unity
      style={{ width: window.innerWidth, height: window.innerHeight - 200 }}
      unityProvider={unityProvider}
    />
  );
};
