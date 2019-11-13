import axios from 'axios'

export default {
    state: {
        ships: []
    },
    mutations: {
        updateShips(state, ships) {
            state.ships = ships
        }
    },
    actions: {
        getShips(ctx) {
            const url = 'https://swapi.co/api/starships/'
            axios.get(url)
                .then(response => response.data.results)
                .then(ships => {
                    ctx.commit('updateShips', ships)
                })
        },
    },
    getters: {
        allShips(state) {
            console.log(state.ships)
            return state.ships
        }

    }
}
