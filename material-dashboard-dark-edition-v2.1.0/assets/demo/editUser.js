var back_to_profile = document.querySelector('.back_to_profile')
const imgurl = document.querySelector('input[name="user_avatar"]')
const cloudName = 'kee';
const unsignedUploadPreset = 'qvdcslp4';
const img = document.querySelector('[name="avatar_file"]');

img.onchange = function () {
    var file = this.files[0];
    var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var dataJson = JSON.parse(this.responseText)
                imgurl.value = dataJson.url
                var img_review = document.getElementById('image-preview');
                img_review.src = dataJson.url;
            }
        }
    }
    xhr.open('POST', url, true);
    var ud = new FormData();
    ud.append('upload_preset', unsignedUploadPreset);
    ud.append('tags', 'browser_upload')
    ud.append('file', file)
    xhr.send(ud)
}

back_to_profile.onclick = function (){
    window.location.href = location.protocol+"/profile";
}