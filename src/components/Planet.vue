<template>
<div>
  <b-card
    :title="planet.name"
    :img-src="planet.img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-list-group>
        <b-list-group-item><strong>Climate: </strong>{{planet.climate}}</b-list-group-item>
        <b-list-group-item><strong>Diametr: </strong>{{planet.diameter}}</b-list-group-item>
        <b-list-group-item><strong>Population: </strong>{{planet.population}}</b-list-group-item>
        <b-list-group-item><strong>Terrain: </strong>{{planet.terrain}}</b-list-group-item>
    </b-list-group>



  </b-card>
</div>
</template>

<script>

export default {
  props: {
    planet: {
      type: Object,
      required: true
    }
  }

}
</script>
