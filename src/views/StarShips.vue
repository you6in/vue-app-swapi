<template>
    <b-container>
        <h1>Star Ships</h1>
        <b-list-group>
            <b-list-group-item
                    v-for="ship in allShips"
                    :key="ship.name"
                    @click="getInfo"
            >
                <a href="#" @click.prevent="$router.push('/star-ships/' + ship.name)">{{ship.name}}</a>
                </b-list-group-item>
        </b-list-group>
    </b-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data: () => ({
        }),
        computed: mapGetters(['allShips']),
        async mounted() {
            this.getShips()
        },
        methods: {
            ...mapActions(['getShips']),
            getInfo(e) {
                console.log(e.target)
            }
        }
    }
</script>
