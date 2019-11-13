<template>
    <div>
        <b-card
                :title="person.name"
                :sub-title="person.birth_year">
            <b-card-text>
                <ul>
                    <li><b>gender</b> - {{person.gender}} </li>
                    <li><b>height</b> - {{person.height}} cm </li>
                    <li><b>mass</b> - {{person.mass}} kg </li>
                </ul>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        props: {
            person: {
                type: Object,
                required: true
            }
        },
        name: "Person"
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }

</style>
