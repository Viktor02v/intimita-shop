<script setup lang="ts">
import { ABOUT_BLOCK_DATA, ABOUT_FEATURES_DATA, ABOUT_BILBOARD_DATA } from "@/components/layout/about/about.data"

const infoBLocks = ref(ABOUT_BLOCK_DATA || []);
const feature = ref(ABOUT_FEATURES_DATA || []);
const bilboard = ref(ABOUT_BILBOARD_DATA || []);
</script>


<template>
	<div class="w-full">
		<!-- Info Bock Group #1 -->
		<div class="w-full">
			<LayoutAboutInfoBlock :view="false" :img="infoBLocks[0].foto_url" :img-backup="infoBLocks[0].title"
				:title="infoBLocks[0].title" :content="infoBLocks[0].content" />
			<LayoutAboutInfoBlock :view="true" :img="infoBLocks[1].foto_url" :img-backup="infoBLocks[1].title"
				:title="infoBLocks[1].title" :content="infoBLocks[1].content"
				:secondary-content="infoBLocks[1].secondary_content" />
		</div>

		<!-- Bilboard Element -->
		<LayoutAboutBilboard v-if="bilboard.length && bilboard[0]" :img="bilboard[0].foto_url"
			:img-backup="bilboard[0].title" />


		<!-- Features Section -->
		<LayoutAboutFeatures :data="feature" />

		<!-- Info Bock Group #2 -->
		<div class="w-full">
			<LayoutAboutInfoBlock :view="false" :img="infoBLocks[2].foto_url" :img-backup="infoBLocks[2].title"
				:title="infoBLocks[2].title" :content="infoBLocks[2].content"
				:secondary-content="infoBLocks[2].secondary_content" />
			<LayoutAboutInfoBlock :view="true" :img="infoBLocks[3].foto_url" :img-backup="infoBLocks[3].title"
				:title="infoBLocks[3].title" :content="infoBLocks[3].content" />
		</div>

	</div>
</template>

<style scoped></style>