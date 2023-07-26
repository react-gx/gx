import createSignal from "./helpers/createSignal.js";
import createStore from "./helpers/createStore.js";
import GXProvider from "./providers/index.js";

import useAction from "./hooks/useAction.js";
import useActions from "./hooks/useActions.js";
import useSignal from "./hooks/useSignal.js";
import useOperations from "./hooks/useOperations.js";

export default GXProvider;

export {
  createSignal,
  createStore,
  useAction,
  useActions,
  useSignal,
  useOperations,
};

// "build": "tsc && npx babel dist --out-dir cjs --extensions '.js' --source-maps inline --copy-files",
