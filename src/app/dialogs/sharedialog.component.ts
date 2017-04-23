import { Component } from "@angular/core";

@Component({
    selector: 'share-dialog',
    templateUrl: './sharedialog.component.html'
})
export class ShareDialog {
    shareBtns: any = [
        {"name": "Facebook", "url": "https://facebook.com/sharer.php?url=", "icon": "facebook-box"},
        {"name": "Twitter", "url": "https://twitter.com/intent/tweet?url=", "icon": "twitter-box"},
        {"name": "Google+", "url": "https://plus.google.com/share?url=", "icon": "google-plus-box"}
    ]
    /**
     * The share button which is clicked
     */
    shareBtnSelected: any = {"name": "", "url": "", "icon": ""};
    socialMedia: any = {"name": "", "url": "", "icon": ""};
    socialMediaType: string;
    shareBtnClick(socialMedia) {
        console.log('Parm sharedBtn passed in as: '+JSON.stringify(socialMedia));
        window.open(socialMedia.url+window.location.href, "Test", "height=400, width=200");
    }
    onSelect(shareBtn) {
        this.socialMedia = shareBtn;
        console.log(this.socialMedia);
    }
    update(socialMediaBtn) {
        console.log(JSON.stringify(socialMediaBtn));
        this.socialMedia = socialMediaBtn;
    }
}