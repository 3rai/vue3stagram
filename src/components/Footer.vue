<template>
    <div class="footer">
        <ul id="nav">
        <li>
            <i class="fas fa-home fa-lg"></i
            ><a href="http://localhost:8080/">ホーム</a>
        </li>
        <li>
            <i class="fas fa-plus-square fa-lg"></i
            ><a href="http://localhost:8080/Contribution">投稿</a>
        </li>
        <li>
            <i class="fas fa-user fa-lg"></i
            ><a href="http://localhost:8080/MyPage">マイページ</a>
        </li>
        <li>
            <i class="fas fa-cog fa-lg"></i
            ><a href="http://localhost:8080/register">編集</a>
        </li>
        </ul>
    </div>

		<!-- <div class="upload-cta">
          <input
            type="file"
            name="file"
            id="file"
            class="inputfile"
            @change="uploadImage"
            :disabled="step !== 1"
          >
          <label for="file">
            <i class="far fa-plus-square fa-lg"></i>
          </label>
        </div> -->

</template>

<script>
export default {
    name: "Footer",
    components: {
    }
}
</script>


<style>
.footer{
	position: fixed;
	width: 100%;
	padding: 0;
	bottom: 0;
}

#nav li {
  width: 140px;
  text-align: center;
}

#nav {
	width: 100%;
  list-style: none;
  overflow: hidden;
  
}

#nav li {
  width: 25%;
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