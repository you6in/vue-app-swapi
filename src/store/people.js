import axios from 'axios'

export default {
    state: {
        people: []
    },
    mutations: {
        updatePeople(state, people) {
            state.people = people
        }
    },
    actions: {
        getPeople(ctx) {
            const url = 'https://swapi.co/api/people/'
            axios.get(url)
                .then(response => response.data.results)
                .then(people => {
                    ctx.commit('updatePeople', people)
                })
        },
    },
    getters: {
        allPeople(state) {
            console.log(state.people)
            return state.people
        }

    }
}
