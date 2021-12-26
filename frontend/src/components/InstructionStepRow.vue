<template>
    <div class="instruction-step-row row mb-3">
        <div class="col-11">
            <textarea
                v-model="instructionText"
                :placeholder="`${step}. Adım`"
                class="form-control"
                name
                id
                cols="30"
                rows="10"
            ></textarea>
        </div>
        <div class="col-1">
            <button
                v-if="step - 1 > 0"
                @click="deleteInstructionRow"
                class="btn btn-outline-danger rounded-circle mt-4"
            >
                <i class="bi bi-journal-minus"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "InstructionStepRow",
    props: {
        step: {
            type: Number,
            required: true,
        },
        index: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            instructionText: "",
        };
    },
    watch: {
        instructionText(newVal) {
            this.$emit('instruction-updated', {
                text: newVal,
                index: this.index
            });
        },
    },
    methods: {
        deleteInstructionRow() {
            this.$emit("delete-row", this.step - 1);
        },
    },
};
</script>

<style scoped>
textarea {
    height: 100px;
}
</style>
