var editableList;
(function () {

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
                console.log(editableList.el.children[i].id);
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

    Sortable.create(list1, {
        animation: 100,
    });

    Sortable.create(list2, {
        animation: 100,
    });

    Sortable.create(list3, {
        animation: 100
    });



})();


$('#editable > li .js-edit').click(function () {

    console.log($(this).parent().find('ul').html());

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

    $('#editable  li').each(function (i, val) {
        console.log($(this)[0].id);
    });
});

