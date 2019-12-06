import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin   } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {

  constructor() { }

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin   = faLinkedin;


  ngOnInit() {
  }

}
