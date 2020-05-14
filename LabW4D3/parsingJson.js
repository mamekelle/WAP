/*jshint  esversion:6, globalstrict:true */
"use strict";
$(function () {
    $('#fetchUser').on('click', fetchUserJson);

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

});
