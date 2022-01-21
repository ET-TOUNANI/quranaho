import {
  createStore,
  MutationTree,
  ActionContext,
  ActionTree,
  GetterTree,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  createLogger,
} from "vuex";

// delclare state
export type State = { count: number };

// set state
const state: State = { count: 0 };

// mutations and actions enums
export enum MutationTypes {
  INC_COUNTER = "SET_COUNTER",
}

export enum ActionTypes {
  INC_COUNTER = "SET_COUNTER",
}

// mutations types
export type Mutations<S = State> = {
  [MutationTypes.INC_COUNTER](state: S, payload: number): void;
};

// mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INC_COUNTER](state: State, payload: number) {
    state.count = payload;
  },
};

// actions
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

// actions interface
export interface Actions {
  [ActionTypes.INC_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INC_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.INC_COUNTER, payload);
  },
};

// Getters types
export type Getters = {
  doubleCounter(state: State): number;
};

// getters
export const getters: GetterTree<State, State> & Getters = {
  doubleCounter: (state) => {
    console.log("state", state.count);
    return state.count * 2;
  },
};

// setyp store type

export type Store = Omit<
  VuexStore<State>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger()],
});

export function useStore(): Store {
  return store as Store;
}

// export const store = createStore({
//   state: {
//     count: 0,
//   },
//   mutations: {
//     increment({ state, payload }) {
//       state.count++;
//     },
//   },
//   actions: {
//     increment({ commit }) {
//       commit("increment");
//     },
//   },
//   getters: {
//     count: (state) => state.count,
//   },
//   modules: {},
// });
