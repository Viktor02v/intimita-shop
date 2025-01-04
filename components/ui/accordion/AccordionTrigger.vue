<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-icons/vue";
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center justify-between py-4 text-[24px] font-medium transition-all [&[data-state=open]>svg]:rotate-180',
          props.class
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDownIcon
          class="h-6 w-6 shrink-0 text-muted-foreground transition-transform backflip duration-500"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>

<style scoped>
.backflip {
  transform: rotateY(180deg);
}
</style>
