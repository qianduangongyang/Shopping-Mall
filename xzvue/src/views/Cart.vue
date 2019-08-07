<template>
   <main id="main" class="container">
   <my-header/>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-transparent border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-bold">购物车</h5>
      
    </div>
    <table id="cart" class="table">
      <thead>
        <tr class="small text-muted text-center">
          <th class="py-1">
			<input type="checkbox" id="quanxuan"> <span class="btn btn-sm text-muted pl-1">全选</span>
          </th>
          <th class="align-middle py-1">商品</th>
          <th class="align-middle py-1">单价(元)</th>
          <th class="align-middle py-1">数量</th>
          <th class="align-middle py-1">金额</th>
          <th class="align-middle py-1">操作</th>
        </tr>
      </thead>
    </table>



    <div class="container">
      <div class="row bg-white mb-3">
        <div class="col-md-1 border text-center">
          <input type="checkbox" class="checenter" id="input1">
        </div>
        <div class="col-md-5 card flex-md-row box-shadow">
          <a href="product_details.html?lid=19">
            <img class="card-img-left flex-auto d-none d-md-block mt-4" src="img/product/sm/57bbc38eN9def8042.jpg">
          </a>
          <div class="card-body d-flex flex-column align-items-start">
            <a class="text-dark small" href="product_details.html?lid=19">戴尔DELL灵越燃7000 R1525S 14.0英寸轻薄窄边框笔记本电脑(i5-7200U 4G 128GSSD+500G 940MX 2G独显 FHD)银</a>
            <p class="card-text mb-auto mt-2">
              <span class="small">规格：</span>
              <span class="color-desc small">【流光银】i5-7200u 4G 128 500G</span>
            </p>
          </div>
        </div>
        <div class="col-md-2 border text-center pt-5">
          <h6 class="text-primary small">阿甲专享价</h6>
          <p>¥5299.00</p>
        </div>
        <div class="col-md-1 border px-0 py-5 text-center">
          <button class="btn btn-secondary p-0 py-0 border-1" type="button">-</button>
          <span>1</span>
          <button class="btn btn-secondary p-0 py-0 border-1" type="button">+</button>
        </div>
        <div class="col-md-2 border pt-5 text-center">
          <span class="d-inline-block py-1 price">¥5299.00</span>
        </div>
        <div class="col-md-1 border py-5">
          <a class="btn btn-sm btn-link text-muted text-center small" href="#" data-iid="33">删除</a>
        </div>
      </div>



      
    </div>
    <div id="cart-footer" class="d-flex flex-column flex-md-row align-items-center pl-2 pr-0 my-3 border-bottom box-shadow">
      <span class="my-0 mr-md-auto small">
        <img src="img/cart/product_normal.png" alt=""><span class="btn btn-sm text-muted pl-1">全选</span> 
        <a class="btn btn-sm btn-link text-muted" href="#">删除</a>
        <a class="btn btn-sm btn-secondary" href="#">清空失效商品</a>
      </span>
      <nav class="my-2 my-md-0 mr-md-3">
        <span class="p-2 text-dark small">已选</span>
        <span class="p-2 text-primary font-weight-bold">1</span>
        <span class="p-2 text-dark small">件商品 合计(不计运费)：</span>
        <span class="p-2 text-primary font-weight-bold" id="abc">¥5299.00</span>
      </nav>
      <a class="btn btn-primary px-5" href="#">去结算</a>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body pt-5 pl-5">
            <p id="alertMsg_info"> <img style="height:50px;" src="img/register/tan.png" alt=""><span class="ml-5 pl-5">您尚未登录！</span></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning text-white" onclick="javascript:location.href='login.html'">确定</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
    export default {
        data(){
            
            return {
               
            }
        },
        computed:{
            
        },
        methods:{
            
        }
    }
</script>

<style>
    @import url("../assets/css/cart.css");
    .num0{
        margin:5px;
    }
    .checenter{
        line-height:131px;
        margin-top:50px;
    }
</style>
