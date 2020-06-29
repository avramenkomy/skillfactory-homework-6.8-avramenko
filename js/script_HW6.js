jQuery(document).ready(init);

function init() {
    console.log('документ загружен');

    if (progress <= 0) {
        jQuery('.j-pull-btn').prop('disabled', true);
        messageNull();
    };

    jQuery('.j-btn').on('click', function(event) {
        progress += parseInt(event.target.value);
        if (progress >= 100) {
            progress = 100;        
            addAttr(progress);
            messageFull();
            jQuery('.j-add-btn').prop('disabled', true);
            jQuery('.j-pull-btn').prop('disabled', false);
            console.log('progress', progress);
        } else if (progress <= 0) {
            progress = 0;
            addAttr(progress);
            messageNull();
            jQuery('.j-pull-btn').prop('disabled', true);
            jQuery('.j-add-btn').prop('disabled', false);
            console.log('progress', progress);    
        } else {
            addAttr(progress);
            messageInProcess();        
            jQuery('.j-pull-btn').prop('disabled', false);
            jQuery('.j-add-btn').prop('disabled', false);
            console.log('progress', progress);
        }    
    });
    
};


function addAttr(progress) {
    jQuery('.j-progress').attr('style', `width: ${progress}%`);
};

function messageFull() {
    jQuery('.message').html('Progress is full');
};

function messageNull () {
    jQuery('.message').html('Progress is zero');
};

function messageInProcess () {
    jQuery('.message').html('Progress in process');
};

let progress = 0;


