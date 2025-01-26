<script setup lang="ts">
import {
	COLLAGE_AROMADIFFUSERS_DATA,
	COLLAGE_CRAFT_CANDLES_DATA,
	COLLAGE_SELF_CARE_DATA,
	COLLAGE_PERFUMED_CANDLES_DATA,
} from "./collage.data";
</script>
<template>
	<div class="w-[100vw]">
		<div class="w-full flex flex-col md:flex-row justify-between">
			<div v-for="item in COLLAGE_AROMADIFFUSERS_DATA" :key="item.title">
				<LayoutVideoBlogSectionCollageCard :title="item.title" :subtitle="item.subtitle" :icon="item.icon"
					:video_url="item.video_url" :url="item.url" />
			</div>
			<div v-for="item in COLLAGE_CRAFT_CANDLES_DATA" :key="item.title">
				<LayoutVideoBlogSectionCollageCard :title="item.title" :subtitle="item.subtitle" :icon="item.icon"
					:video_url="item.video_url" :url="item.url" />
			</div>
			<div v-for="item in COLLAGE_SELF_CARE_DATA" :key="item.title">
				<LayoutVideoBlogSectionCollageCard :title="item.title" :subtitle="item.subtitle" :icon="item.icon"
					:video_url="item.video_url" :url="item.url" />
			</div>
			<div v-for="item in COLLAGE_PERFUMED_CANDLES_DATA" :key="item.title">
				<LayoutVideoBlogSectionCollageCard :title="item.title" :subtitle="item.subtitle" :icon="item.icon"
					:video_url="item.video_url" :url="item.url" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
