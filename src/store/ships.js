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
        async getShips(ctx) {
            try {
                const url = 'https://swapi.co/api/starships/'
                const res = await axios.get(url)
                const ships = res.data.results
                console.log(ships)
                ctx.commit('updateShips', ships)
                console.log('action')
            } catch (e) {
                console.log(e)
                throw new Error('данные с сревера не поступили')
            }
        },
    },
    getters: {
        allShips(state) {
            console.log('state' ,state.ships)
            return state.ships
        }

    }
}
