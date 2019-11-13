<template>
    <b-container>
        <h1>People</h1>
        <b-row>
            <b-col>
                <b-list-group>
                    <b-list-group-item
                            v-for="person in allPeople"
                            :key="person.name"
                            @click="getInfo"
                            :data-name="person.name"
                            class="item"
                    >{{person.name}}</b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col>
                <h2 v-if="!selectedPerson">select person:</h2>
                <person v-else :person="selectedPerson"></person>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
import Person from './../components/Person'
import {mapGetters, mapActions} from 'vuex'

export default {
    components: {
      Person
    },
    data: () => ({
       selectedPerson: null
    }),
    computed: mapGetters(['allPeople']),
    async mounted() {
        this.getPeople()
    },
    methods: {
        ...mapActions(['getPeople']),
        getInfo(event) {
            console.log(event.target.dataset.name)
            const name = event.target.dataset.name
            this.selectedPerson = this.allPeople.find(i => i.name === name)
            console.log(this.selectedPerson)
            const parent = event.target.parentElement
            parent.childNodes.forEach(ch => ch.classList.remove('active'))
            event.target.classList.add('active')
        }
    }
}
</script>

<style scoped>
    .list-group-item {
        cursor: pointer;
    }
</style>
