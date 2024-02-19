const songs = null
console.log('hh')

const songJson = $.ajax({
    url: '../data/songs.json',
    type: 'GET',
    dataType: 'json',
    async: false,
    success: function (data) {
        console.log('请求成功', data)
    }
})