const state = {
    collapse: false,
};

const actions = {
    collapseMenu({ commit }) {
        commit('collapseMenu');
    }
};

const mutations = {
    collapseMenu(state) {
        state.collapse = !state.collapse;
    }
};

export const navigation = {
    namespaced: true,
    state,
    actions,
    mutations
};