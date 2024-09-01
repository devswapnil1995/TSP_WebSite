import { Component, OnInit } from '@angular/core';
import { category, contactDetail, product, socialLink } from './models/shared.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TheSweetPandaWebsite';

  selectedCategoryId = 1;
  categoryHeading = 'SHOP BY CATEGORY';
  categories: category[] = [];

  products: product[] = [];
  filterProductsList: product[] = [];

  socialLinks: socialLink[] = [];

  contactDetail: contactDetail | undefined;

  ngOnInit(): void {
    this.getCategories();
    this.getSocialLinks();
    this.getContactDetail();
    this.getProducts();
    this.filterProducts(this.selectedCategoryId);
  }

  getCategories = () => {
    this.categories = [
      { categoryId: 1, categoryName: 'Cakes', imgPath: 'assets/categories/cakes.png' },
      { categoryId: 2, categoryName: 'Cheesecakes', imgPath: 'assets/categories/cheesecakes.png' },
      { categoryId: 3, categoryName: 'Doughnuts', imgPath: 'assets/categories/doughnuts.png' },
      { categoryId: 4, categoryName: 'Brownies', imgPath: 'assets/categories/brownies.png' },
      { categoryId: 5, categoryName: 'Cupcakes', imgPath: 'assets/categories/cupcakes.png' }
    ]

    this.categories = this.categories.sort((a, b) => a.categoryId - b.categoryId);
  }

  getSocialLinks = () => {
    this.socialLinks = [
      { socialId: 1, socialName: 'Facebook', socialIcon: 'assets/socialicons/facebook.png', socialLinkUrl: '#' },
      { socialId: 2, socialName: 'Instagram', socialIcon: 'assets/socialicons/instagram.png', socialLinkUrl: 'https://www.instagram.com/thesweet_panda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
      { socialId: 3, socialName: 'YouTube', socialIcon: 'assets/socialicons/youtube.png', socialLinkUrl: 'https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FT445ALFA2KTLL1&e=AT2FCbtTSpocuKFZUcxMK6aHpiLC1yD8E-rwJP1SGK7h0j4hlnQV3g-o8MiQlOOlEZ-reCKzMqXlW4vk0gN8Gq_VsYIH14-hfM8_qw' },
      { socialId: 4, socialName: 'WhatsApp', socialIcon: 'assets/socialicons/whatsapp.png', socialLinkUrl: 'https://wa.me/c/917326858900' },
    ];

    this.socialLinks = this.socialLinks.sort((a, b) => a.socialId - b.socialId);
  }

  getContactDetail = () => {
    this.contactDetail = {
      phone: '+91-73268 58900',
      address: 'The sweet panda, Opposite of Westside, Sarbahal, Jharsuguda Street, 36 P, Lane, next to Hotel Royal India, Jharsuguda, Odisha 768201, 10am - 6pm',
      email: 'thesweetpanda@gmail.com'
    }
  }

  getProducts = () => {
    this.products = [
      { productId: 1, categoryId: 1, productName: 'Fruit cake', imgPath: 'https://media.geeksforgeeks.org/wp-content/uploads/20240301114023/image_100.png', price: 500 },
      { productId: 2, categoryId: 3, productName: 'Donut', imgPath: 'https://media.geeksforgeeks.org/wp-content/uploads/20240301113939/image4_100.png', price: 200 },
      { productId: 3, categoryId: 2, productName: 'Sparkel cake', imgPath: 'https://media.geeksforgeeks.org/wp-content/uploads/20240301114023/image_100.png', price: 500 },
      { productId: 4, categoryId: 1, productName: 'Nutella cake', imgPath: 'https://media.geeksforgeeks.org/wp-content/uploads/20240301113914/image6_100.png', price: 800 },
      { productId: 5, categoryId: 4, productName: 'Choco Cup', imgPath: 'https://media.geeksforgeeks.org/wp-content/uploads/20240301113939/image4_100.png', price: 70 }
    ]
  }

  filterProducts = (selectedCategoryId: number) => {
    this.filterProductsList = [];
    this.selectedCategoryId = selectedCategoryId;
    this.filterProductsList = this.products.filter(x => x.categoryId == this.selectedCategoryId);
    this.filterProductsList = this.filterProductsList.sort((a, b) => a.productId - b.productId);
  }

}
