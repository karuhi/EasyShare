<template>
    <div class="hello">
        <section class="hero is-light is-fullheight">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <header class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <img src="../assets/logo.png" alt="Logo">EasyShare
                            </a>
                            <span class="navbar-burger burger" v-bind:class="{ 'is-active': menuActive }" v-on:click="menuToggle()" data-target="navbarMenuHeroC">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroC" class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
                            <div class="navbar-end">
                                <a class="navbar-item is-active">
                                    Home
                                </a>
                                <a class="navbar-item">
                                    共有リスト(futured)
                                </a>
                                <span class="navbar-item">
                                    <a class="button is-primary is-inverted">
                                        <span>Chromeストアでダウンロード</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <img src="../assets/logo.png">
                    <h1 class="title">
                        EasyShare
                    </h1>
                    <h2 class="subtitle">
                        URLを簡単共有
                    </h2>
                    <article class="message is-info">
                        <div class="message-header">
                            <p>EasyShareIDを入力</p>
                        </div>
                        <div class="message-body">
                            <p>PC版Chrome拡張機能EasyShareに表示されたEasyShareIDを入力してください。</p><br>
                            <input id="idf" class="input" type="text" style="width: 40px;" maxlength='1' @change="checkid">
                            <input id="ids" class="input" type="text" style="width: 40px;" maxlength='1' @change="checkid">
                            <input id="idt" class="input" type="text" style="width: 40px;" maxlength='1' @change="checkid">
                            <br><br><span class="button is-primary">決定</span>
                        </div>
                    </article>
                </div>
            </div>
            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
            </div>
        </section>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    &copy <a href="https://twitter.com/hi_karuh">karuhi</a> All rights reserved.
                </p>
                <a href="https://bulma.io">
                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                </a>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'Main',
    data() {
        return {
            menuActive: false,
        }
    },
    methods: {
        menuToggle() {
            this.menuActive = !this.menuActive;
        },
        checkid(){
          var firstID = document.getElementById("idf").value;
          var secondID = document.getElementById("ids").value;
          var thirdID = document.getElementById("idt").value;
          alert(firstID + secondID + thirdID);
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>