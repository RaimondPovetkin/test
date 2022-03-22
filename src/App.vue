<template>
    <div>

        <HeaderBlock/>

        <Banner/>

        <Advantages/>

        <Catalog/>

        <Why/>

        <Manufacture/>

        <Form/>

        <Partners/>

        <FeedBack/>

        <Map/>

        <Footer/>

    </div>
</template>

<script>
import Banner from '@/components/Banner/banner.vue';
import HeaderBlock from '@/components/Header/headerBlock.vue';
import Advantages from '@/components/Advantages/advantages.vue';
import Catalog from '@/components/Catalog/catalog.vue';
import Why from '@/components/Why/why.vue';
import Manufacture from '@/components/Manufacture/manufacture.vue';
import Partners from '@/components/Partners/partners.vue';
import FeedBack from '@/components/FeedBack/feedBack.vue';
import Map from '@/components/Map/map.vue';
import Footer from '@/components/Footer/footer.vue';
import Form from '@/components/Form/form.vue';

export default {
  components: { 
      HeaderBlock, Banner, Advantages, Catalog, Why, Manufacture, Partners, FeedBack, Map, Footer, Form
    },
    
}
</script>

<style lang="scss">
    @import "./style.module.scss";
</style>