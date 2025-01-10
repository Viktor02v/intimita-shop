import type {
  UnwrapRefCarouselApi as CarouselApi,
  CarouselEmits,
  CarouselProps,
} from "./interface";
import { createInjectionState } from "@vueuse/core";
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted, ref } from "vue";

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({ opts, orientation, plugins }: CarouselProps, emits: CarouselEmits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    const currentIndex = ref(0);

    // Function to handle scrolling to the previous slide, going to the last slide if at the start
    function scrollPrev() {
      if (emblaApi.value?.canScrollPrev()) {
        emblaApi.value?.scrollPrev(); // Scroll to the previous slide if possible
      } else {
        const lastIndex = (emblaApi.value?.scrollSnapList()?.length || 0) - 1;
        emblaApi.value?.scrollTo(lastIndex); // Otherwise, scroll to the last slide
      }
    }

    // Function to handle scrolling to the next slide, going back to first slide if at the end
    function scrollNext() {
      if (emblaApi.value?.canScrollNext()) {
        emblaApi.value?.scrollNext(); // Scroll to the next slide if possible
      } else {
        emblaApi.value?.scrollTo(0); // Otherwise, scroll to the first slide
      }
    }

    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
	 let autoScrollInterval: NodeJS.Timeout | null = null;

    // Callback function for handling changes in the selected slide
    function onSelect(api: CarouselApi) {
      canScrollNext.value = api?.canScrollNext() || false;
      canScrollPrev.value = api?.canScrollPrev() || false;
      currentIndex.value = api?.selectedScrollSnap() || 0; // Update currentIndex when slide changes
    }


	//  Auto-Scroll function
	 function startAutoScroll(interval: number = 5000) {
      stopAutoScroll(); // Clear any existing interval
      autoScrollInterval = setInterval(() => {
        scrollNext();
      }, interval);
    }

//  Stop Auto-Scroll function
    function stopAutoScroll() {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
      }
    }

    onMounted(() => {
      if (!emblaApi.value) return;

      emblaApi.value?.on("init", onSelect);
      emblaApi.value?.on("reInit", onSelect);
      emblaApi.value?.on("select", onSelect);

      emits("init-api", emblaApi.value);
    });

    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      canScrollNext,
		startAutoScroll,
      stopAutoScroll,
      scrollPrev,
      scrollNext,
      orientation,
      currentIndex,
    };
  }
);

function useCarousel() {
  const carouselState = useInjectCarousel();

  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");

  return carouselState;
}

export { useCarousel, useProvideCarousel };

