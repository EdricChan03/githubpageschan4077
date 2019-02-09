import { Component } from '@angular/core';

@Component({
  selector: 'share-dialog',
  templateUrl: './sharedialog.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class ShareDialog {
  shareBtns = [
    { name: 'Facebook', icon: 'facebook-box' },
    { name: 'Twitter', icon: 'twitter-box' },
    { name: 'Google+', icon: 'google-plus-box' }
  ];
  /*
        {"name": "Facebook", "url": "", "icon": "facebook-box"},
        {"name": "Twitter", "url": "https://twitter.com/intent/tweet?url=", "icon": "twitter-box"},
        {"name": "Google+", "url": "https://plus.google.com/share?url=", "icon": "google-plus-box"}
  */
  socialMedia = { text: null, name: null, icon: null, showMore: true };
  socialMediaType: string;
  showMore = false;
  share() {
    switch (this.socialMedia.name) {
      case 'Facebook':
        if (this.socialMedia.text) {
          window.open(
            `https://facebook.com/dialog/share?app_id=145634995501895&href=${window.location.href}&quote=${this.socialMedia.text}`,
            '_blank'
          );
        } else {
          window.open(`https://facebook.com/dialog/share?app_id=145634995501895&href=${window.location.href}`, '_blank');
        }
        break;
      case 'Google+':
        if (this.socialMedia.text) {
          window.open(`https://plus.google.com/share?url=${window.location.href}&text=${this.socialMedia.text}`, '_blank');
        } else {
          window.open(`https://plus.google.com/share?url=${window.location.href}`, '_blank');
        }
        break;
      case 'Twitter':
        if (this.socialMedia.text) {
          window.open(`https://twitter.com/intent/tweet?text=${window.location.href} ${this.socialMedia.text}`, '_blank');
        } else {
          window.open(`https://twitter.com/intent/tweet?text=${window.location.href}`, '_blank');
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
