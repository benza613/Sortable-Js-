var editableList;
var _pDir;
var _p;
function initDDL() {

    var byId = function (id) { return document.getElementById(id); }

    // Editable list
    editableList = Sortable.create(byId('editable'), {
        animation: 150,
        filter: '.js-remove',
        onFilter: function (evt) {
            console.log(evt.target);
            evt.item.parentNode.removeChild(evt.item);
        },
        onSort: function (evt) {
            $.each(editableList.el.children, function (i, val) {
                //console.log(editableList.el.children[i].id);
                console.log($(this).attr("data-ben"));
            });
        },
    });


    byId('addUser').onclick = function () {
        Ply.dialog('prompt', {
            title: 'Add',
            form: {
                name: 'Add Short Name',
                dname: 'Add Long Name',
				}
        }).done(function (ui) {
            var el = document.createElement('li');
            el.setAttribute("id", "parent-1");
            el.innerHTML = ui.data.name + '--' + ui.data.dname + '<i class="js-remove">✖</i>';
            editableList.el.appendChild(el);
        });
    };

    _pDir = ["list1", "list2", "list3"];
    _p=[];

    for (var i = 0; i < _pDir.length; i++) {
        console.log(i + " __ " + _pDir[i]);
        _p.push(Sortable.create(byId(_pDir[i]), {
            animation: 100,
            group: { name: _pDir[i] }
        }));
    }




};


$('#editable > li .js-edit').click(function () {


    $(this).parent().find('ul').toggle(300);
    if ($(this).hasClass("glyphicon-triangle-bottom")) {
        $(this).removeClass("glyphicon-triangle-bottom");
        $(this).addClass("glyphicon-triangle-top");
    } else {
        $(this).removeClass("glyphicon-triangle-top");
        $(this).addClass("glyphicon-triangle-bottom");
    }

    


});

$('#toggleAll').on('click', function () {
    $('#editable > li').find('ul').show(300);
});

$('#toggleAllOff').on('click', function () {
    $('#editable > li').find('ul').hide(300);


});

$('#btnSubmit').on('click', function () {
    console.clear();

    console.log(editableList.toArray());
    console.log(_p[0].toArray());
    console.log(_p[1].toArray());
    console.log(_p[2].toArray());


    $('#editable  li').each(function (i, val) {
        console.log($(this)[0].id);
    });
});

