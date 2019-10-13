<template>
  <div class="row">
    <div class="col-12 col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="(article,index) in articles" :key="index">
              <span v-text="index+1" style="font-weight:500"></span>. &nbsp;&nbsp;
              <a :href="article.resourceUrl" target="_blank" v-text="article.title">知乎</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12 mb-4">
      <div class="hero bg-primary text-white">
        <div class="hero-inner">
          <h2 v-text="siteInfo.name">知乎</h2>
          <!-- <p class="lead">發現更大的世界.</p> -->
          <div class="mt-4">
            <a href="#" class="btn btn-outline-white btn-lg btn-icon icon-left">
              <i class="far fa-user"></i>
              订阅
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { listArticle } from "@/api/site";
export default {
  props: {
    id: String
  },
  data() {
    return {
      articles: [],
      siteInfo:{}
    };
  },
  methods: {
    ...mapMutations(["setSectionHeader"]),
    loadData() {
      listArticle({ siteId: this.id }).then(res => {
        this.articles = res.data.content;
        if (this.articles.length) {
          this.siteInfo = this.articles[0].siteInfo
          this.setSectionHeader(this.siteInfo.name);
        }
      });
    }
  },
  watch: {
    id() {
      this.loadData();
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>