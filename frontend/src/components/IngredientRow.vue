<template>
    <div class="ingredient-row d-flex mb-3 row">
        <div class="col-5">
            <input type="text" class="form-control me-5 ingredient-name" />
        </div>

        <div class="col-6">
            <v-select
                label="name"
                :filterable="false"
                :options="options"
                v-model="selectedIngredient"
                @search="onSearch"
            >
                <template #no-options>Malzeme aramak için yazınız...</template>
                <template #option="option">
                    <div class="d-center">
                        <img :src="option.imageURL" />
                        <span>{{ option.name }}</span>
                    </div>
                </template>
                <template #selected-option="option">
                    <div class="selected d-center">
                        <img :src="option.imageURL" />
                        <span>{{ option.name }}</span>
                    </div>
                </template>
            </v-select>
        </div>
        <div class="col-1">
            <button
                v-if="index > 0"
                @click="deleteIngredientRow"
                class="btn btn-block btn-danger mx-auto ms-3"
            >Sil</button>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import { mapActions, mapState } from "vuex";

export default {
    name: 'IngredientsRow',
    props: {
        index: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            options: [],
            selectedIngredient: null
        }
    },
    methods: {
        ...mapActions(["getIngredients"]),
        deleteIngredientRow() {
            this.$emit('delete-row', this.index)
        },
        onSearch(search, loading) {
            if (search.length) {
                loading(true);
                this.search(loading, search, this);
            }
        },
        search: _.debounce(async function (loading, search, vm) {
            console.log(this);
            await this.getIngredients(search);

            vm.options = this.ingredients;

            loading(false);
        }, 350),
    },
    computed: {
        ...mapState(["ingredients"]),
    },
};
</script>

<style lang="scss" scoped>
img {
    height: auto;
    max-width: 2.5rem;
    margin-right: 1rem;
}

.d-center {
    display: flex;
    align-items: center;
}

.selected img {
    width: 60px;
    object-fit: cover;
    max-height: 23px;
    margin-right: 0.5rem;
}

.v-select {
    width: 100%;
}

.v-select .dropdown li {
    width: 100%;
    border-bottom: 1px solid red !important;
}

.v-select .dropdown li:last-child {
    border-bottom: none;
}

.v-select .dropdown li a {
    padding: 10px 20px;
    font-size: 1.25em;
    color: #3c3c3c;
    background-color: red;
    overflow-wrap: break-word;
}
</style>
