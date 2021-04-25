(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\" >\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Tab 1 page\"></app-explore-container> -->\n <div *ngIf=\" numberOfItem() === 0 \">List is Empty!!</div>\n  <ion-list *ngIf=\" numberOfItem() > 0 \">\n     <!-- week3 start -->\n    <ion-item-sliding *ngFor=\"let item of loaditems(); let i=index\">\n      <ion-item>\n        <ion-label>{{item.name}}</ion-label>\n        <ion-label>${{item.quantity}}</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <button (click)=\"edititems(item,i)\" ion-button color=\"primary\" icon-start>\n          <ion-icon name=\"create\"></ion-icon>\n          EDIT\n          </button>\n          <button (click)=\"shareitems(item,i)\" ion-button color=\"light\" icon-start>\n            <ion-icon name=\"share\"></ion-icon>\n            SHARE\n            </button>\n        <button (click)=\"removeItem(item,i)\" ion-button color=\"secondary\" icon-start>\n        <ion-icon name=\"trash\"></ion-icon>\n        DELETE\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n    <!-- week 2 changed -->\n\n    <!-- <ion-item-sliding>\n      <ion-item>\n        <ion-label>Rice</ion-label>\n        <ion-label>$2</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-icon name=\"trash\"></ion-icon>\n        DELETE\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>Butter</ion-label>\n        <ion-label>$2</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-icon name=\"trash\"></ion-icon>\n        DELETE\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>Pancake</ion-label>\n        <ion-label>$2</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-icon name=\"trash\"></ion-icon>\n        DELETE\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>egg</ion-label>\n        <ion-label>$2</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-icon name=\"trash\"></ion-icon>\n        DELETE\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>soda</ion-label>\n        <ion-label>$2</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-icon name=\"trash\"></ion-icon>\n        DELETE\n      </ion-item-options>\n    </ion-item-sliding> -->\n    <!-- --------------------------------------------- -->\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addItem()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../groceries-service.service */ "hoUj");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");







let Tab1Page = class Tab1Page {
    //list of items
    //constructor
    constructor(toastCtrl, navCtrl, alertController, dataservice, socialSharing) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.dataservice = dataservice;
        this.socialSharing = socialSharing;
        //title for the app
        this.title = "Grocery list";
    }
    loaditems() {
        return this.dataservice.getItem();
    }
    numberOfItem() {
        return this.dataservice.getItem().length;
    }
    //removing items function
    removeItem(item, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataservice.removeItem(index);
            console.log("Removing Item - ", item, index);
            const toast = yield this.toastCtrl.create({
                message: 'Removing Item - ' + item.name + " ...",
                duration: 3000
            });
            toast.present();
        });
    }
    shareitems(item, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("item shared");
            const toast = yield this.toastCtrl.create({
                message: 'shared item -' + item.name + "..",
                duration: 3000
            });
            toast.present();
            let message = "shared item: " + item.name + "quantity: " + item.quantity;
            let subject = "shared via ionic app";
            this.socialSharing.share(message, subject).then(() => {
                // Sharing via email is possible
                console.log("shared successfully");
            }).catch((err) => {
                // Sharing via email is not possible
                console.log(err);
            });
        });
    }
    edititems(item, index) {
        console.log("editing item -");
        this.editItemPrompt(item, index);
    }
    //adding function that is calling addItemPrompt for detail input
    addItem() {
        console.log("Removing Item - ");
        this.addItemPrompt();
    }
    editItemPrompt(item, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Input Item Detail',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'NAME',
                        value: item.name
                    },
                    {
                        name: 'quantity',
                        type: 'text',
                        id: 'name2-id',
                        placeholder: 'QUANTITY',
                        value: item.quantity
                    }
                ], buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: item => {
                            console.log('Confirm Ok', item);
                            this.dataservice.editItem(item, index);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    addItemPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Input Item Detail',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'NAME'
                    },
                    {
                        name: 'quantity',
                        type: 'text',
                        id: 'name2-id',
                        placeholder: 'QUANTITY'
                    }
                ], buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: item => {
                            console.log('Confirm Ok', item);
                            this.dataservice.addItem(item);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _groceries_service_service__WEBPACK_IMPORTED_MODULE_5__["GroceriesServiceService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "hoUj":
/*!**********************************************!*\
  !*** ./src/app/groceries-service.service.ts ***!
  \**********************************************/
/*! exports provided: GroceriesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesServiceService", function() { return GroceriesServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let GroceriesServiceService = class GroceriesServiceService {
    constructor() {
        this.items = [
            {
                name: "Milk",
                quantity: 2
            },
            {
                name: "Rice",
                quantity: 2
            },
            {
                name: "Butter",
                quantity: 3
            },
            {
                name: "Pancake",
                quantity: 10
            },
            {
                name: "egg",
                quantity: 12
            },
        ];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    editItem(item, index) {
        this.items[index] = item;
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem() {
        return this.items;
    }
};
GroceriesServiceService.ctorParameters = () => [];
GroceriesServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GroceriesServiceService);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map