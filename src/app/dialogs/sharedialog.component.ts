import { Component } from "@angular/core";

@Component({
    selector: 'share-dialog',
    templateUrl: './sharedialog.component.html'
})
export class ShareDialog {
    shareBtns = [
        {"name": "Facebook", "icon": "facebook-box"},
        {"name": "Twitter", "icon": "twitter-box"},
        {"name": "Google+", "icon": "google-plus-box"}
	]
	/*
        {"name": "Facebook", "url": "", "icon": "facebook-box"},
        {"name": "Twitter", "url": "https://twitter.com/intent/tweet?url=", "icon": "twitter-box"},
        {"name": "Google+", "url": "https://plus.google.com/share?url=", "icon": "google-plus-box"}
	*/
    /**
     * The share button which is clicked
     */
    socialMedia: any = {"name": "", "icon": "", "showMore":true};
	socialMediaType: string;
	showMore: boolean = false;
    share() {
		switch (this.socialMedia.name) {
		case "Facebook":
		if (this.socialMedia.text) {
			window.open("https://facebook.com/dialog/share?app_id=145634995501895&href="+document.URL+"&quote="+this.socialMedia.text, "_blank");
		} else {
			window.open("https://facebook.com/dialog/share?app_id=145634995501895&href="+document.URL, "_blank");
		}
		case "Google+":
		if (this.socialMedia.text) {
			window.open("https://plus.google.com/share?url="+document.URL+"&text="+this.socialMedia.text, "_blank");
		} else {
			window.open("https://plus.google.com/share?url="+document.URL, "_blank");
		}
		case "Twitter":
		if (this.socialMedia.text) {
			window.open("https://twitter.com/intent/tweet?text="+document.URL+" "+this.socialMedia.text, "_blank");
		} else {
			window.open("https://twitter.com/intent/tweet?text="+document.URL, "_blank");
		}
		}
		
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