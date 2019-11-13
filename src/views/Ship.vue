<template>
    <h2></h2>
</template>

<script>
    export default {
        name: "Ship",
        data: () => ({
            loading: true,
            ship: null
        }),
        async mounted() {
            const name = this.$route.params.name
            await this.$store.dispatch('getShips')
            const ships = this.$store.getters.allShips
            console.log(ships)
            this.ship = ships.find(s => s.name === name )


            this.loading = false
        }
    }
</script>

<style scoped>

</style>
