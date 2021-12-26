<template>
    <div class="instruction-step-row mb-3">
        <textarea v-model="instructionText" :placeholder="`${step}. Adım`" class="form-control" name="" id="" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
    name: 'InstructionStepRow',
    props: {
        step: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            instructionText: ''
        }
    }
}
</script>

<style scoped>
textarea {
    height: 100px;
}
</style>