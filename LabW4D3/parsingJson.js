/*jshint  esversion:6, globalstrict:true */
"use strict";
$(function () {
    $('#fetchUser').on('click', fetchUserJson1);

    function fetchUserJson() {
        const id = $('#userId').val();
        let html = $('#users').html("");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                    response.map(user => {
                        if (user.id === parseInt(id)) {
                            html.append(`<p> Id: ${user.id} </p> <p> Name: ${user.name} </p> <p> User name: ${user.username} </p> 
                    <p> Emal: ${user.emal} </p> <p> Phone: ${user.phone} </p> <p> Website: ${user.website} </p>`);
                        }
                    });
                }
            )
            .catch(error => console.error("Error: ", error));
        return html;

    }

    function fetchUserJson1() {
        $.get('https://jsonplaceholder.typicode.com/users')
            .done(ajaxSuccess)
            .fail(alaxFail);
    }

    function ajaxSuccess(data) {
        const id = $('#userId').val();
        let html = $('#users').html("");
        data.map(user => {
            if (user.id === parseInt(id)) {
                html.append("<p> ",`Id: ${user.id} `);
                html.append("<p> ", `Name: ${user.name}`);
                html.append("<p> ", `User name: ${user.username}`);
                html.append("<p> ", `Emal: ${user.emal} `);
                html.append("<p> ", `Phone: ${user.phone} `);
                html.append("<p> ", `Website: ${user.website} `);
            }
        });
        return html;

    }

    function alaxFail(xhr, status, exception) {
        console.log(xhr, status, exception);

    }

});
