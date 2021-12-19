<template>
    <div class="col">
        <div class="card shadow-sm">
            <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>

            <div class="card-body">
                <p class="card-text fs-3 fw-bolder">{{ recipeTitle }}</p>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-success"
                        >Tarifi Görüntüle</button>
                        <button type="button" class="btn btn-sm btn-outline-danger">
                            <i class="bi bi-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="container">
                    <a
                        href="#"
                        class="d-flex link-dark text-decoration-none pt-2"
                        aria-expanded="false"
                    >
                        <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                        />
                        <p class="fs-4 ps-3">Burak Yucel</p>
                    </a>
                    <small class="text-muted">10 dakika 5 kisilik</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeCard',
    props: {
        recipeTitle: {
            type: String
        },
    }
}
</script>

<style>
</style>