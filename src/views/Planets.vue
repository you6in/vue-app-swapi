<template>
    <b-container>
        <h1>Planets</h1>
        <b-row>
            <b-col>
                <b-list-group>
                    <b-list-group-item
                        v-for="planet in allPlanets"
                        :key="planet.id"
                        @click="getInfo"
                        :data-id="planet.id"
                        >
                        {{planet.name}}
                    </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col>
                <h2 v-if="!highlightedPlanet">select planet:</h2>
                <planet v-else :planet="highlightedPlanet"></planet>
            </b-col>
        </b-row>


    </b-container>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Planet from './../components/Planet'

export default {
    components: {
        Planet
    },
    data: () => ({
        highlightedId: null
    }),
    computed: {
        ...mapGetters(['allPlanets']),
        highlightedPlanet() {
            if (this.highlightedId || this.highlightedId === 0) {
                return this.$store.getters.randomPlanet(this.highlightedId)
            }
        }
    },
    async mounted() {
        this.getPlanets()
    },
    methods: {
        ...mapActions(['getPlanets']),
        getInfo(event) {
            console.log(event.target.dataset.id);
            this.highlightedId = event.target.dataset.id - 2
            const parent = event.target.parentElement
            parent.childNodes.forEach(ch => ch.classList.remove('active'))
            event.target.classList.add('active')
        },
    },
    watch: {
        highlightedId () {
            console.log(this.highlightedId)
        }
    }
}
</script>

<style scoped>
    .list-group-item {
        cursor: pointer;
    }
</style>
