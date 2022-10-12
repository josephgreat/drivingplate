<template>
    <div>
        <jumbotron />
        <page-body/>
    </div>
</template>
<script>
import Jumbotron from '../Jumbotron.vue';
import PageBody from '../PageBody.vue';
export default {
    components: {
        Jumbotron,
        PageBody
    }
}
</script>