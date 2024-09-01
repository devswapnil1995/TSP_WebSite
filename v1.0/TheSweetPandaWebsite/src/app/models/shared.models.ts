export class commonProps {
    imgPath: string;

    constructor(imgPath: string) {
        this.imgPath = imgPath;
    }
}

export class category {
    categoryId: number;
    categoryName: string;
    imgPath: string;

    constructor(imgPath: string, categoryName: string, categoryId: number) {
        this.categoryName = categoryName;
        this.imgPath = imgPath;
        this.categoryId = categoryId;
    }
}

export class product {
    productId: number;
    categoryId: number;
    productName: string;
    imgPath: string;
    price: number;

    constructor(imgPath: string, productName: string, categoryId: number, productId: number, price: number) {
        this.productName = productName;
        this.imgPath = imgPath;
        this.categoryId = categoryId;
        this.productId = productId;
        this.price = price;
    }
}

export class socialLink {
    socialId: number;
    socialName: string;
    socialIcon: string;
    socialLinkUrl: string;

    constructor(socialId: number, socialName: string, socialIcon: string, socialLinkUrl: string) {
        this.socialId = socialId;
        this.socialName = socialName;
        this.socialIcon = socialIcon;
        this.socialLinkUrl = socialLinkUrl;
    }
}

export class contactDetail {
    address: string;
    email: string;
    phone: string;

    constructor(address: string, email: string, phone: string) {
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
}