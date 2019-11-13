import axios from 'axios'

export default {
    state: {
        planets: [],
        randomPlanet: null,
    },
    mutations: {
        updatePlanets(state, planets) {
            state.planets = planets.map((planet, index) => {
                planet.id = index + 2
                planet.img = `https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`
                return planet
            })
        },
    },
    actions: {
        getPlanets(ctx) {
            const url = 'https://swapi.co/api/planets/'
            axios.get(url)
            .then(response => response.data.results)
            .then(planets => {
                // console.log(planets);
                ctx.commit('updatePlanets', planets)
            })
        },
    },
    getters: {
        allPlanets(state) {
            return state.planets
        },
        randomPlanet: state => index => state.planets[index],
    }
}
