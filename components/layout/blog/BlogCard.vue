<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps({
	item: {
		type: Object,
		required: true,
	}
})
</script>

<template>
	<div class="card">
		<NuxtLink :to="`/blogs/${props.item.$id}`" class="w-full">
			<div class="overflow-hidden rounded-lg shadow-lg">
				<NuxtImg :src="props.item.foto_url[0]" width="100%" height="auto"
					class="transform transition-all duration-300 hover:brightness-75 hover:scale-105" />
			</div>
			<h3 class="text-xl mt-4 font-semibold text-gray-800 truncate">{{ props.item.title[0] }}</h3>
		</NuxtLink>
	</div>
</template>

<style scoped>
.card {
	height: 550px;
	padding: 1.5rem;
	background-color: #ffffff;
	border-radius: 12px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
		0 1px 3px rgba(0, 0, 0, 0.06);
	transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.card:hover {
	box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2),
		0 4px 6px rgba(0, 0, 0, 0.1);
	transform: translateY(-5px);
}

.card h3 {
	color: #2d3748;
}

.card a {
	display: block;
	text-decoration: none;
}

.card .img-wrapper {
	position: relative;
}

.card .img-wrapper::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.2);
	opacity: 0;
	transition: opacity 0.3s ease;
}

.card:hover .img-wrapper::before {
	opacity: 1;
}

.card .img-wrapper img {
	border-radius: 8px;
}
</style>