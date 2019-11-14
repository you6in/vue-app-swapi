<template>
    <div>
        <b-alert v-model="error.status" variant="danger" dismissible>
            {{error.message}}
        </b-alert>
        <div class="loading" v-if="loading">Loading...</div>
        <b-col v-else>
            <h1>{{ship.name}}</h1>
            <p><b>model</b> - {{ship.model}}</p>
            <p><b>manufacturer</b> - {{ship.manufacturer}}</p>
            <p><b>passengers</b> - {{ship.passengers}}</p>
            <p><b>starship class</b> - {{ship.starship_class}}</p>
        </b-col>
    </div>

</template>

<script>
    export default {
        name: "Ship",
        data: () => ({
            loading: true,
            ship: null,
            error: {
                status: false,
                message : ''
            }
        }),
        async mounted() {
            try {
                const name = this.$route.params.name
                await this.$store.dispatch('getShips')
                console.log('getships')
                this.ship = this.$store.getters.allShips.find(s => s.name === name)
                this.loading = false
            } catch (e) {
                this.error.message = e.message
                this.error.status = true
                console.log(e)
            }

        }

    }
</script>

<style scoped>

</style>
