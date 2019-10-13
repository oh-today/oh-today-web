<template>
  <Layout :sites="sites">
    <h1 slot="sectionHeader" v-text="sectionHeader"></h1>
    <router-view />
  </Layout>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import Layout from "@/components/Layout.vue";
import { listSiteAll } from "@/api/home";
export default {
  name: "home",
  components: {
    Layout
  },
  data() {
    return {
      sites: []
    };
  },
  computed: {
    ...mapState(["sectionHeader"])
  },
  methods: {
    initSide() {
      listSiteAll().then(res => {
        this.sites = res.data.content;
      });
    }
  },
  mounted() {
    window.initLayout();
    this.initSide();
  }
};
</script>
