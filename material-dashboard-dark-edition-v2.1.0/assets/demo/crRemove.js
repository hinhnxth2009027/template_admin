document.addEventListener("DOMContentLoaded", function () {
    var btncount = document.querySelector('.cr-option')
    var content = document.querySelector('.mr-display')
    var i = 0;
    btncount.onclick = function () {
        var allopption = []
        content.innerHTML +=
            `
                <div id="items${i}">
                    <div class="row">
                        <div class="col-md-11">
                            <div class="form-group">
                                <lable class="bmd-label-floating  border-bottom bd-bt">Option</lable>
                            </div>
                        </div>
                        <div onclick="document.getElementById('items${i}').remove()" class="col-md-1 align-self-center">
                            <div class="removeItem rounded-circle d-flex pt-cr-img pt-wrap-plus border-success wr-cr-img">
                                <div class="pt-plus cr-img">-</div>
                            </div>
                        </div>
                    </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group border-bottom ptselect padding-bt">
                                    <label class="mr-3 bmd-label-floating">Sizes</label>
                                    <label class="bmd-label-floating">
                                        <select id="sl_sizes${i}" style="width: 100%;" class="pt_select item_size">
                                            <option class="ptoption item_size" value="">M</option>
                                            <option class="ptoption item_size" value="">L</option>
                                            <option class="ptoption item_size" value="">N</option>
                                            <option class="ptoption item_size" value="">quan khong day hahah</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group border-bottom ptselect padding-bt">
                                    <label class="mr-3 bmd-label-floating">Color</label>
                                    <label class="bmd-label-floating">
                                        <select id="sl-color${i}" style="width: 100%;" class="pt_select item_color">
                                            <option class="ptoption item_color" value="">Do</option>
                                            <option class="ptoption item_color" value="">Luc</option>
                                            <option class="ptoption item_color" value="">Xanh Vang</option>
                                            <option class="ptoption item_color" value="">quan khong day hahah</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Quantity</label>
                                    <input id="quantity${i}" type="text" name="quantity" class="form-control item_quantity">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            i++
    }
    var btn_submit = document.querySelector('#submit')
    btn_submit.onclick = function () {
        var options = []
        var index = document.querySelectorAll('.mr-display div').length
        var sizes = document.querySelectorAll('.item_size')
        var color = document.querySelectorAll('.item_color')
        var quantity = document.querySelectorAll('.item_quantity')
        for (let j = 0; j < index; j++) {
            var object = {
                'sizes': sizes[j].value,
                'color': color[j].value,
                'quantity': quantity[j].value
            }
            options[j] = object
        }
        console.log(options)
    }
})
