<script>
export default {
    name: 'CardListElement',
    props: ['name', 'image']
}
</script>


<template>
    <div class="card-list">
        <div class="image">
            <img :src="image" :alt="name">
        </div>
        <h3>{{ name }}</h3>
    </div>
</template>


<style lang="scss" scoped></style>