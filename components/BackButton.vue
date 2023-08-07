<template>
    <button @click="goBack" class="go-back">
        <i class="las la-arrow-circle-left"></i>
        Go Back
    </button>
</template>

<script>
export default {
    methods: {
        // The goBack function will take the user back one step in the router.
        goBack() {
            return this.$router.go(-1); // Change -1 to another number to go back further than one page.
        }
    }
};
</script>
