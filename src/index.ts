// Provider
import GXProvider from "./providers/index.js";

// Constants
import { AsyncActionStatuses } from "./helpers/types.js";

// Types
import { type AsyncActionResponse } from "./helpers/types.js";

// Helpers functions
import createSignal from "./helpers/createSignal.js";
import createStore from "./helpers/createStore.js";
import createAsyncAction from "./helpers/createAsyncAction.js";

// Hooks
import useAction from "./hooks/useAction.js";
import useActions from "./hooks/useActions.js";
import useAsyncActions from "./hooks/useAsyncActions.js";
import useAllSignals from "./hooks/useAllSignals.js";
import useSignal from "./hooks/useSignal.js";
import useOperations from "./hooks/useOperations.js";

export default GXProvider;

export {
  createSignal,
  createStore,
  createAsyncAction,
  useAction,
  useActions,
  useAsyncActions,
  useAllSignals,
  useSignal,
  useOperations,
  AsyncActionStatuses,
  AsyncActionResponse
};

// "build": "tsc && npx babel dist --out-dir cjs --extensions '.js' --source-maps inline --copy-files",
