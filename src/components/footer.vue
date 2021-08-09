<template>
    <ul id="nav">
      <li><i class="fas fa-home fa-lg"></i><a href="http://localhost:8080/">ホーム</a></li>
      <li><i class="fas fa-user fa-lg"></i><a href="http://localhost:8080/MyPage">マイページ</a></li>
      <li><i class="fas fa-heart fa-lg"></i><a href="#">お気に入り</a></li>
    </ul>
</template>

<style>
    #nav {
        list-style: none;
    }
 
    #nav li {
        width: 140px;
        text-align: center;
    }
 
    #nav {
        list-style: none;
        overflow: hidden;
        position: fixed;
        width: 100%;
        bottom: 0;
    }
 
    #nav li {
        width: 33.3%;
        text-align: center;
        background-color: rgb(223, 162, 72);
        float: left;
        height: 50px;
        line-height: 50px;
        /* margin-right: 2px; */
    }
 
    #nav li a {
        text-decoration: none;
        color: rgb(253, 251, 244);
        font-weight: bold;
        padding: 20px;
    }

    .home-cta {
        height: 35px;
        position: sticky;
    }
</style>