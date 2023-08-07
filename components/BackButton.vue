<template>
    <button @click="goBack" class="go-back">
        <i class="las la-arrow-circle-left"></i>
        Go Back
    </button>
</template>

<script lang="ts">
export default {
    methods: {
        // The goBack function will take the user back one step in the router.
        goBack() {
            return this.$router.go(-1); // Change -1 to another number to go back further than one page.
        }
    }
};
</script>

<style lang="scss">
@import "../assets/scss/partials/variables";

.go-back {
    display: flex;
    cursor: pointer;
    margin-bottom: 1em;
    background-color: transparent;
    color: $white;
    border: 1px solid $white;
    padding: 5px;
    max-width: 8%;
    justify-content: center;
    i {
        line-height: 1em;
        margin-right: 5px;
        padding-top: 3px;
    }
}

</style>
