<template>
    <div class="hello">
        <section class="hero is-fullheight">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <header class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <img src="../assets/logo.png" alt="Logo" style="padding-right: 10px;">EasyShareApp
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
                                    共有リスト(Futured)
                                </a>
                                <span class="navbar-item">
                                    <a class="button is-primary">
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
                            <p>PC版Chrome拡張機能EasyShareに表示されたEasyShareIDを入力してください。</p><span id="errorarea">
                            </span><br>
                            <input id="idf" class="input" type="text" style="width: 40px;" maxlength='1' @change="checkid">
                            <input id="ids" class="input" type="text" style="width: 40px;" maxlength='1' @change="checkid">
                            <input id="idt" class="input" type="text" style="width: 40px;" maxlength='1' @change="checkid">
                        </div>
                    </article>
                </div>
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
        <div class="modal" id="modal">
            <div class="modal-background" v-on:click="modalclose();"></div>
            <div class="modal-card">
              <section class="modal-card-body" id="modal-content">
              </section>
            </div>
            <button class="modal-close is-large" aria-label="close" v-on:click="modalclose();"></button>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
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
        checkid() {
            var firstID = document.getElementById("idf").value;
            var secondID = document.getElementById("ids").value;
            var thirdID = document.getElementById("idt").value;
            var fid = firstID.toUpperCase();
            var sid = secondID.toUpperCase();
            var tid = thirdID.toUpperCase();
            if (firstID != "" && secondID != "" && thirdID != "") {
                this.getData(fid + sid + tid);
            }
        },
        getData(id) {
            var database = firebase.database();
            firebase.database().ref('esid/' + id)
                .once('value').then(function(snapshot) {
                    var id = snapshot.child("id").val();
                    var title = snapshot.child("title").val();
                    var url = snapshot.child("url").val();
                    if (id != null && title != null && url != null) {
                        document.getElementById("modal").className = "modal is-active";
                        document.getElementById("modal-content").innerHTML = '<p class="title">' + title + '</p>にアクセスしますか？<a href="' + url + '" class="button is-primary">アクセスする！</a>';
                    } else {
                        document.getElementById("errorarea").innerHTML = '<div class="notification is-danger">EasyShareIDが間違っているようです。</div>';
                    }
                })
        },
        modalclose() {
            document.getElementById("modal").className = "modal";
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>