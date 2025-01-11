interface Bilboard {
	foto_url:string
	title:string
}

interface Block extends Bilboard{
	content:string
	secondary_content?:string
}

export interface BlockFeature extends Block {
	foto_secondary:string
}


export const ABOUT_BLOCK_DATA: Block[] = [
{
   title:"Poetry Home is a creative space where only true connoisseurs of complex perfume compositions enter.",
   foto_url:"about/about-block-1.jpg",
   content:"​​But the possibilities here are wider than just enjoying niche fragrances.",
},
{
   title:"Uniqueness",
   foto_url:"/about/about-block-2.jpeg",
   content:"A creative space where bold ideas are transformed into high perfumery and become olfactory works of art.",
	secondary_content:"The intimate nature of Poetry Home makes it possible to penetrate into the very essence of the perfume and focus on the richness of its play. Feel all the filigree and craftsmanship of the work of niche perfumers down to the very depths of matter.",
},
{
   title:"Personalization",
   foto_url:"/about/about-block-3.jpg",
   content:"Collections of niche products are a real gift for everyone who enters Poetry Home. You have the opportunity not only to get to know and touch olfactory art, but also to become the owner of your private collection of aromatic works.",
	secondary_content:"Here, only you and your sense of smell determine which perfume samples to acquire. And your aesthetic taste will definitely tell you how effectively they will transform your space; where to place the fragrant item so that it plays with all of its vivid colors of natural sound.",
},
{
   title:"Audience",
   foto_url:"/about/about-block-4.jpg",
   content:"Poetry Home is a space where each audience occupies its own place: from the whimsical expert of high perfumery and the professional aroma critic to the lover of intellectual aromatic creations and the fan of live ethereal compositions.",
},
]

export const ABOUT_FEATURES_DATA: BlockFeature[] = [
{
	title:"Possibilities",
	foto_url:"/about/about-feature-1.jpg",
	foto_secondary:"/about/about-feature-2.jpg",
	content:"The versatility of Poetry Home's aromatic creations allows admirers of high perfumery to assemble a complete collection of their favorite compositions in different interpretations and concentrations.​",
	secondary_content:"Thanks to the generous palette of niche products, you can easily change your mood and manage your reality. With the first breath, you travel freely and carefree to the most picturesque corners of our planet and replenish your own resource.",
},
]

export const ABOUT_BILBOARD_DATA: Bilboard[] = [
{
	foto_url:"/about/about-bilboard.jpg",
	title:"Bilboard",
}
]

