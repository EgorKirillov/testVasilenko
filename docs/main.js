"use strict";
(self["webpackChunktest01"] = self["webpackChunktest01"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/members.service */ 1776);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
    constructor(membersService) {
        this.membersService = membersService;
        this.title = 'test01';
    }
    ngOnInit() {
        this.membersService.getMembers();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MembersService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ts-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _list_list_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.module */ 2130);
/* harmony import */ var _summary_summary_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary/summary.module */ 7001);
/* harmony import */ var _page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.module */ 6815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _list_list_module__WEBPACK_IMPORTED_MODULE_2__.ListModule, _summary_summary_module__WEBPACK_IMPORTED_MODULE_3__.SummaryModule, _page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _list_list_module__WEBPACK_IMPORTED_MODULE_2__.ListModule, _summary_summary_module__WEBPACK_IMPORTED_MODULE_3__.SummaryModule, _page_not_found_page_not_found_module__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundModule] }); })();


/***/ }),

/***/ 3569:
/*!*************************************!*\
  !*** ./src/app/data/membersData.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "membersData": () => (/* binding */ membersData)
/* harmony export */ });
const membersData = {
    total: 100,
    data: [
        {
            _id: '5d99beb677015a5c2c14542e',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Jordan',
                last: 'Bauer',
            },
            company: 'SNORUS',
            email: 'jordan.bauer@snorus.net',
            phone: '+1 (901) 404-2928',
            address: '712 Bills Place, Cochranville, Florida, 6951',
        },
        {
            _id: '5d99beb69a6aac64be820dbe',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Francis',
                last: 'Owens',
            },
            company: 'EXOPLODE',
            email: 'francis.owens@exoplode.us',
            phone: '+1 (954) 566-2476',
            address: '457 Stockholm Street, Montura, Pennsylvania, 7855',
        },
        {
            _id: '5d99beb635dd82195040195b',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Bass',
                last: 'Church',
            },
            company: 'ACCRUEX',
            email: 'bass.church@accruex.com',
            phone: '+1 (881) 403-2661',
            address: '786 Ira Court, Abiquiu, Kentucky, 1055',
        },
        {
            _id: '5d99beb6283bac04b3763000',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Mabel',
                last: 'Holt',
            },
            company: 'MALATHION',
            email: 'mabel.holt@malathion.io',
            phone: '+1 (951) 520-3392',
            address: '890 Alice Court, Bath, New Hampshire, 6400',
        },
        {
            _id: '5d99beb6207f35413c9b629b',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Lambert',
                last: 'Higgins',
            },
            company: 'GEEKOLOGY',
            email: 'lambert.higgins@geekology.name',
            phone: '+1 (957) 573-3207',
            address: '513 Schroeders Avenue, Moquino, Connecticut, 6353',
        },
        {
            _id: '5d99beb6f6db754cee0835a0',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Jeanie',
                last: 'Wiley',
            },
            company: 'CORECOM',
            email: 'jeanie.wiley@corecom.tv',
            phone: '+1 (931) 432-2272',
            address: '196 Highland Boulevard, Wildwood, Georgia, 8732',
        },
        {
            _id: '5d99beb6c0c5d1e73c8bb5a2',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Lynn',
                last: 'Summers',
            },
            company: 'BLUEGRAIN',
            email: 'lynn.summers@bluegrain.biz',
            phone: '+1 (877) 578-3987',
            address: '999 Ellery Street, Hartsville/Hartley, Tennessee, 8475',
        },
        {
            _id: '5d99beb69aec11b778e276c9',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Roseann',
                last: 'Lowe',
            },
            company: 'NORALI',
            email: 'roseann.lowe@norali.org',
            phone: '+1 (969) 433-3912',
            address: '209 Saratoga Avenue, Riegelwood, Northern Mariana Islands, 3804',
        },
        {
            _id: '5d99beb61851f0fadfe6bca0',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Dianna',
                last: 'Underwood',
            },
            company: 'GEOLOGIX',
            email: 'dianna.underwood@geologix.me',
            phone: '+1 (831) 506-2281',
            address: '379 Polar Street, Derwood, Michigan, 8219',
        },
        {
            _id: '5d99beb61894e3a0d8a8aaeb',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Misty',
                last: 'Wells',
            },
            company: 'ZILCH',
            email: 'misty.wells@zilch.info',
            phone: '+1 (803) 453-3224',
            address: '473 Rochester Avenue, Kraemer, Illinois, 140',
        },
        {
            _id: '5d99beb6b15536f75b46a608',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Tammie',
                last: 'Cotton',
            },
            company: 'GENMOM',
            email: 'tammie.cotton@genmom.co.uk',
            phone: '+1 (891) 471-2924',
            address: '599 Juliana Place, Alafaya, Maryland, 917',
        },
        {
            _id: '5d99beb62fc237aa62133abc',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Rasmussen',
                last: 'Paul',
            },
            company: 'SUPPORTAL',
            email: 'rasmussen.paul@supportal.biz',
            phone: '+1 (829) 473-3553',
            address: '164 Cedar Street, Basye, District Of Columbia, 5164',
        },
        {
            _id: '5d99beb6e0f76b46c0f5ce21',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Allie',
                last: 'Solomon',
            },
            company: 'TOYLETRY',
            email: 'allie.solomon@toyletry.net',
            phone: '+1 (835) 596-3561',
            address: '335 Noll Street, Ernstville, New York, 5938',
        },
        {
            _id: '5d99beb67ba49c6e156b8999',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Hammond',
                last: 'Stanton',
            },
            company: 'XTH',
            email: 'hammond.stanton@xth.us',
            phone: '+1 (967) 413-2650',
            address: '468 Clifton Place, Harold, Puerto Rico, 2501',
        },
        {
            _id: '5d99beb6b13450897a61c8b0',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Scott',
                last: 'Petty',
            },
            company: 'ZOINAGE',
            email: 'scott.petty@zoinage.com',
            phone: '+1 (913) 425-3420',
            address: '475 Herkimer Street, Barstow, Utah, 9466',
        },
        {
            _id: '5d99beb6f9f4e1748d85a971',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Alexander',
                last: 'Harrell',
            },
            company: 'RONELON',
            email: 'alexander.harrell@ronelon.io',
            phone: '+1 (940) 577-2114',
            address: '962 Falmouth Street, Loma, Iowa, 2743',
        },
        {
            _id: '5d99beb600162e31cce6d255',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Letitia',
                last: 'Combs',
            },
            company: 'PHOLIO',
            email: 'letitia.combs@pholio.name',
            phone: '+1 (962) 515-2518',
            address: '480 Tapscott Avenue, Remington, Arkansas, 4987',
        },
        {
            _id: '5d99beb6f46990cdedd7a054',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Myers',
                last: 'Russell',
            },
            company: 'IDEGO',
            email: 'myers.russell@idego.tv',
            phone: '+1 (923) 524-3492',
            address: '912 Veronica Place, Sugartown, Alabama, 1510',
        },
        {
            _id: '5d99beb68066435dd603b971',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Daphne',
                last: 'Pearson',
            },
            company: 'ZYTREK',
            email: 'daphne.pearson@zytrek.biz',
            phone: '+1 (887) 565-2927',
            address: '786 Elliott Walk, Collins, California, 7185',
        },
        {
            _id: '5d99beb6481acdc4f1f2dbcd',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Dillon',
                last: 'Hull',
            },
            company: 'CENTURIA',
            email: 'dillon.hull@centuria.org',
            phone: '+1 (882) 473-3051',
            address: '915 Dekoven Court, Tyhee, Indiana, 7029',
        },
        {
            _id: '5d99beb66abe615580c7868c',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Reese',
                last: 'Hunt',
            },
            company: 'KEENGEN',
            email: 'reese.hunt@keengen.me',
            phone: '+1 (983) 503-2309',
            address: '280 Delevan Street, Tyro, Nebraska, 3995',
        },
        {
            _id: '5d99beb6cf9df8720ce4e771',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Howard',
                last: 'Hodge',
            },
            company: 'KIOSK',
            email: 'howard.hodge@kiosk.info',
            phone: '+1 (937) 538-3339',
            address: '350 Schenectady Avenue, Osmond, North Carolina, 6893',
        },
        {
            _id: '5d99beb6022f6189a1f23970',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Kathleen',
                last: 'Patel',
            },
            company: 'ACCUFARM',
            email: 'kathleen.patel@accufarm.co.uk',
            phone: '+1 (988) 567-3882',
            address: '801 Albany Avenue, Greenbackville, Delaware, 8396',
        },
        {
            _id: '5d99beb6230c62aa8243ff80',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Amparo',
                last: 'Horne',
            },
            company: 'MARQET',
            email: 'amparo.horne@marqet.biz',
            phone: '+1 (958) 519-3437',
            address: '584 Colonial Court, Waterview, Oregon, 8213',
        },
        {
            _id: '5d99beb6f7f32d24da875f1b',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Acevedo',
                last: 'Finley',
            },
            company: 'DANCITY',
            email: 'acevedo.finley@dancity.net',
            phone: '+1 (955) 598-3527',
            address: '185 Amboy Street, Elliston, Virgin Islands, 374',
        },
        {
            _id: '5d99beb68b54b0c3a0ef3470',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Moore',
                last: 'Strong',
            },
            company: 'TELEQUIET',
            email: 'moore.strong@telequiet.us',
            phone: '+1 (809) 406-3732',
            address: '542 Will Place, Hampstead, Montana, 6733',
        },
        {
            _id: '5d99beb6b7490a9aacc00b1a',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Ina',
                last: 'Becker',
            },
            company: 'QUOTEZART',
            email: 'ina.becker@quotezart.com',
            phone: '+1 (955) 491-3087',
            address: '699 Miller Place, Glidden, Idaho, 6159',
        },
        {
            _id: '5d99beb64e9dfcb53acd8626',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Dorsey',
                last: 'Juarez',
            },
            company: 'ENERSAVE',
            email: 'dorsey.juarez@enersave.io',
            phone: '+1 (937) 403-2109',
            address: '427 Rock Street, Joppa, New Jersey, 9046',
        },
        {
            _id: '5d99beb6f53bb9cc0b870839',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Wolfe',
                last: 'Michael',
            },
            company: 'ISOLOGIA',
            email: 'wolfe.michael@isologia.name',
            phone: '+1 (928) 559-2490',
            address: '612 Varick Street, Charco, West Virginia, 8585',
        },
        {
            _id: '5d99beb626d3124fa91e7429',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Manning',
                last: 'Preston',
            },
            company: 'GENMY',
            email: 'manning.preston@genmy.tv',
            phone: '+1 (897) 497-3105',
            address: '161 Hubbard Street, Coaldale, Wyoming, 617',
        },
        {
            _id: '5d99beb664a4e4c72591f9a3',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Tucker',
                last: 'Bender',
            },
            company: 'SUPREMIA',
            email: 'tucker.bender@supremia.biz',
            phone: '+1 (934) 461-2588',
            address: '844 Metropolitan Avenue, Brule, Colorado, 3619',
        },
        {
            _id: '5d99beb66b24688a0de700a0',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Skinner',
                last: 'Mcfarland',
            },
            company: 'ZBOO',
            email: 'skinner.mcfarland@zboo.org',
            phone: '+1 (965) 468-3953',
            address: '513 Clarkson Avenue, Crawfordsville, Palau, 2489',
        },
        {
            _id: '5d99beb6c0dba22f51f3adc2',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Farrell',
                last: 'Campbell',
            },
            company: 'HALAP',
            email: 'farrell.campbell@halap.me',
            phone: '+1 (803) 588-2940',
            address: '481 Suydam Place, Machias, South Dakota, 1384',
        },
        {
            _id: '5d99beb6d3647cf8b14c9409',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Cathy',
                last: 'Oneil',
            },
            company: 'ACUSAGE',
            email: 'cathy.oneil@acusage.info',
            phone: '+1 (924) 587-3879',
            address: '663 Dahill Road, Crucible, Oklahoma, 4041',
        },
        {
            _id: '5d99beb698d1fbade2a863a3',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Lindsey',
                last: 'Gates',
            },
            company: 'HOTCAKES',
            email: 'lindsey.gates@hotcakes.co.uk',
            phone: '+1 (912) 502-2920',
            address: '958 Crescent Street, Coyote, Vermont, 2958',
        },
        {
            _id: '5d99beb633f3e5c3e8378aa7',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Key',
                last: 'Armstrong',
            },
            company: 'VISUALIX',
            email: 'key.armstrong@visualix.biz',
            phone: '+1 (845) 531-2978',
            address: '933 Woodpoint Road, Fontanelle, New Mexico, 7487',
        },
        {
            _id: '5d99beb6af9bf2e627e8f6ad',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Mueller',
                last: 'Woods',
            },
            company: 'SENSATE',
            email: 'mueller.woods@sensate.net',
            phone: '+1 (853) 514-2094',
            address: '804 Kermit Place, Cetronia, Maine, 3848',
        },
        {
            _id: '5d99beb6967feb03ef03b2e9',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Stacey',
                last: 'Aguilar',
            },
            company: 'ENAUT',
            email: 'stacey.aguilar@enaut.us',
            phone: '+1 (919) 573-2912',
            address: '237 Concord Street, Bannock, Mississippi, 2727',
        },
        {
            _id: '5d99beb6069071371bb4fe57',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Fitzpatrick',
                last: 'Martinez',
            },
            company: 'HINWAY',
            email: 'fitzpatrick.martinez@hinway.com',
            phone: '+1 (868) 569-2829',
            address: '856 Willoughby Avenue, Draper, Washington, 4905',
        },
        {
            _id: '5d99beb645e90e295a14abaf',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Sanchez',
                last: 'Hooper',
            },
            company: 'REVERSUS',
            email: 'sanchez.hooper@reversus.io',
            phone: '+1 (934) 445-2142',
            address: '489 Roebling Street, Gorst, Guam, 5212',
        },
        {
            _id: '5d99beb65b3f217fd4c9fe32',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Christian',
                last: 'Henry',
            },
            company: 'QUALITEX',
            email: 'christian.henry@qualitex.name',
            phone: '+1 (871) 451-2636',
            address: '515 Baycliff Terrace, Englevale, Massachusetts, 2526',
        },
        {
            _id: '5d99beb690336c6b9a82eb4a',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Jodie',
                last: 'Guerrero',
            },
            company: 'ZENTIME',
            email: 'jodie.guerrero@zentime.tv',
            phone: '+1 (849) 571-3318',
            address: '995 Tampa Court, Bloomington, Minnesota, 4717',
        },
        {
            _id: '5d99beb6c3b33f427845205d',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Conley',
                last: 'Monroe',
            },
            company: 'CANOPOLY',
            email: 'conley.monroe@canopoly.biz',
            phone: '+1 (981) 584-2075',
            address: '439 Paerdegat Avenue, Gouglersville, Hawaii, 3452',
        },
        {
            _id: '5d99beb6121ba61ba9c779bc',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Janell',
                last: 'Banks',
            },
            company: 'ZORK',
            email: 'janell.banks@zork.org',
            phone: '+1 (957) 525-3157',
            address: '706 Kimball Street, Brutus, Marshall Islands, 3668',
        },
        {
            _id: '5d99beb6e7771bb8cff666d6',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Ward',
                last: 'Castro',
            },
            company: 'SIGNIDYNE',
            email: 'ward.castro@signidyne.me',
            phone: '+1 (881) 450-3092',
            address: '346 Atkins Avenue, Gloucester, Federated States Of Micronesia, 2540',
        },
        {
            _id: '5d99beb6086149feeefc2e66',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Hogan',
                last: 'Walter',
            },
            company: 'BARKARAMA',
            email: 'hogan.walter@barkarama.info',
            phone: '+1 (815) 574-2671',
            address: '857 Indiana Place, Esmont, Texas, 8818',
        },
        {
            _id: '5d99beb6ff11eacb34de4f10',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Inez',
                last: 'Zamora',
            },
            company: 'ESSENSIA',
            email: 'inez.zamora@essensia.co.uk',
            phone: '+1 (894) 557-2393',
            address: '465 Tompkins Place, Caron, Wisconsin, 5950',
        },
        {
            _id: '5d99beb60be55eb1da68c4ba',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Bridges',
                last: 'Patton',
            },
            company: 'SONGBIRD',
            email: 'bridges.patton@songbird.biz',
            phone: '+1 (929) 410-2526',
            address: '137 Apollo Street, Balm, Arizona, 1965',
        },
        {
            _id: '5d99beb64337005cefde4626',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Grimes',
                last: 'Jenkins',
            },
            company: 'GINKLE',
            email: 'grimes.jenkins@ginkle.net',
            phone: '+1 (916) 426-2443',
            address: '397 Ashland Place, Cedarville, Kansas, 8820',
        },
        {
            _id: '5d99beb6f7e4e652c75868a8',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Shepherd',
                last: 'Durham',
            },
            company: 'ZEAM',
            email: 'shepherd.durham@zeam.us',
            phone: '+1 (970) 570-2377',
            address: '826 Union Avenue, Walker, Rhode Island, 9180',
        },
        {
            _id: '5d99beb63c892055952c1908',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Morris',
                last: 'Stephens',
            },
            company: 'AQUACINE',
            email: 'morris.stephens@aquacine.com',
            phone: '+1 (854) 409-3865',
            address: '183 Tehama Street, Spokane, Nevada, 2375',
        },
        {
            _id: '5d99beb6c614fe4c8ca3c023',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Josie',
                last: 'House',
            },
            company: 'ISOSURE',
            email: 'josie.house@isosure.io',
            phone: '+1 (901) 547-2615',
            address: '659 Hill Street, Rowe, Missouri, 8918',
        },
        {
            _id: '5d99beb6558891537809623e',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Hall',
                last: 'Brewer',
            },
            company: 'UBERLUX',
            email: 'hall.brewer@uberlux.name',
            phone: '+1 (954) 436-3000',
            address: '335 Cumberland Walk, Loveland, North Dakota, 853',
        },
        {
            _id: '5d99beb6a5060fbac46cc79d',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Perkins',
                last: 'Watkins',
            },
            company: 'RUBADUB',
            email: 'perkins.watkins@rubadub.tv',
            phone: '+1 (822) 587-3479',
            address: '240 Independence Avenue, Wanamie, Alaska, 3833',
        },
        {
            _id: '5d99beb68533edf2fdc241bb',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Bender',
                last: 'Rivas',
            },
            company: 'UNIA',
            email: 'bender.rivas@unia.biz',
            phone: '+1 (826) 448-3886',
            address: '255 McDonald Avenue, Soudan, Louisiana, 6344',
        },
        {
            _id: '5d99beb6ba779217e965a21c',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Boone',
                last: 'Butler',
            },
            company: 'OPTICOM',
            email: 'boone.butler@opticom.org',
            phone: '+1 (943) 451-3074',
            address: '895 Whitney Avenue, Curtice, Ohio, 150',
        },
        {
            _id: '5d99beb6ffddf4af466b7a06',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Cathleen',
                last: 'Brown',
            },
            company: 'FIBEROX',
            email: 'cathleen.brown@fiberox.me',
            phone: '+1 (809) 550-3045',
            address: '864 Nautilus Avenue, Tuttle, Virginia, 1619',
        },
        {
            _id: '5d99beb6d927af5635543e87',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Marcia',
                last: 'Haley',
            },
            company: 'SENMEI',
            email: 'marcia.haley@senmei.info',
            phone: '+1 (844) 436-3094',
            address: '388 Debevoise Avenue, Denio, American Samoa, 4603',
        },
        {
            _id: '5d99beb6b0699f34547ef9cd',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Claire',
                last: 'Curtis',
            },
            company: 'EXOSIS',
            email: 'claire.curtis@exosis.co.uk',
            phone: '+1 (960) 540-2403',
            address: '427 Covert Street, Fingerville, Florida, 3375',
        },
        {
            _id: '5d99beb61eac41d3bcaeea76',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Gardner',
                last: 'Burch',
            },
            company: 'MARTGO',
            email: 'gardner.burch@martgo.biz',
            phone: '+1 (966) 574-3591',
            address: '513 Lois Avenue, Sanders, Pennsylvania, 8293',
        },
        {
            _id: '5d99beb6ef3b7cd3990499d8',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Mercer',
                last: 'Sexton',
            },
            company: 'PUSHCART',
            email: 'mercer.sexton@pushcart.net',
            phone: '+1 (999) 417-2060',
            address: '225 Vandervoort Place, Kerby, Kentucky, 9591',
        },
        {
            _id: '5d99beb6815f3f77883aaf66',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Rebecca',
                last: 'Odonnell',
            },
            company: 'IMKAN',
            email: 'rebecca.odonnell@imkan.us',
            phone: '+1 (962) 484-3520',
            address: '895 Troy Avenue, Watchtower, New Hampshire, 9063',
        },
        {
            _id: '5d99beb6adcc0c81c5e63963',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Church',
                last: 'Vance',
            },
            company: 'EARBANG',
            email: 'church.vance@earbang.com',
            phone: '+1 (815) 531-3967',
            address: '600 Adams Street, Dola, Connecticut, 9089',
        },
        {
            _id: '5d99beb685d74a082da6bc67',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Jocelyn',
                last: 'Henderson',
            },
            company: 'MATRIXITY',
            email: 'jocelyn.henderson@matrixity.io',
            phone: '+1 (801) 423-2390',
            address: '781 Fairview Place, Eagleville, Georgia, 2656',
        },
        {
            _id: '5d99beb688c61720ca3ce583',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Virginia',
                last: 'Vega',
            },
            company: 'MITROC',
            email: 'virginia.vega@mitroc.name',
            phone: '+1 (981) 544-3928',
            address: '657 Bedell Lane, Springhill, Tennessee, 5426',
        },
        {
            _id: '5d99beb6639c96a75559eeac',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Odonnell',
                last: 'Lewis',
            },
            company: 'GEOFORMA',
            email: 'odonnell.lewis@geoforma.tv',
            phone: '+1 (996) 457-3721',
            address: '898 Montauk Avenue, Sehili, Northern Mariana Islands, 752',
        },
        {
            _id: '5d99beb67a6153f9b5df016e',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Tia',
                last: 'Best',
            },
            company: 'KINETICUT',
            email: 'tia.best@kineticut.biz',
            phone: '+1 (903) 494-3935',
            address: '760 Wallabout Street, Neahkahnie, Michigan, 5540',
        },
        {
            _id: '5d99beb6fb959e811bd36cb4',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Duran',
                last: 'Russo',
            },
            company: 'TROPOLIS',
            email: 'duran.russo@tropolis.org',
            phone: '+1 (855) 478-2256',
            address: '967 Horace Court, Starks, Illinois, 888',
        },
        {
            _id: '5d99beb64ffa3eefb4f844ae',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Margo',
                last: 'Gill',
            },
            company: 'TASMANIA',
            email: 'margo.gill@tasmania.me',
            phone: '+1 (815) 567-2478',
            address: '755 Haring Street, Rote, Maryland, 773',
        },
        {
            _id: '5d99beb626a11674d75bba44',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Lyons',
                last: 'Hobbs',
            },
            company: 'MOMENTIA',
            email: 'lyons.hobbs@momentia.info',
            phone: '+1 (992) 545-2079',
            address: '468 Rogers Avenue, Troy, District Of Columbia, 5550',
        },
        {
            _id: '5d99beb6b6d969195fff486f',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Gonzales',
                last: 'Horn',
            },
            company: 'TELPOD',
            email: 'gonzales.horn@telpod.co.uk',
            phone: '+1 (948) 401-2653',
            address: '976 Jamison Lane, Morriston, New York, 2635',
        },
        {
            _id: '5d99beb6e28b54e75b93127f',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Larsen',
                last: 'Merritt',
            },
            company: 'CIRCUM',
            email: 'larsen.merritt@circum.biz',
            phone: '+1 (801) 587-3681',
            address: '544 Ditmas Avenue, Stockdale, Puerto Rico, 5202',
        },
        {
            _id: '5d99beb62ddbe863c0e68462',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Bradshaw',
                last: 'Browning',
            },
            company: 'MAGNEMO',
            email: 'bradshaw.browning@magnemo.net',
            phone: '+1 (881) 483-2401',
            address: '179 Centre Street, Worcester, Utah, 4299',
        },
        {
            _id: '5d99beb6064d6307872d67d3',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Leta',
                last: 'Hayden',
            },
            company: 'UNIWORLD',
            email: 'leta.hayden@uniworld.us',
            phone: '+1 (842) 436-2136',
            address: '975 Irwin Street, Leming, Iowa, 4510',
        },
        {
            _id: '5d99beb6410994433c7d1eba',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Baxter',
                last: 'Craft',
            },
            company: 'BALUBA',
            email: 'baxter.craft@baluba.com',
            phone: '+1 (858) 400-3810',
            address: '695 Quincy Street, Retsof, Arkansas, 2277',
        },
        {
            _id: '5d99beb65bf1a846313590f0',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Chen',
                last: 'Riley',
            },
            company: 'ECSTASIA',
            email: 'chen.riley@ecstasia.io',
            phone: '+1 (944) 487-3236',
            address: '897 Devoe Street, Conestoga, Alabama, 3810',
        },
        {
            _id: '5d99beb6fc1c67e102aee9e7',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Mcfarland',
                last: 'Clayton',
            },
            company: 'ZENCO',
            email: 'mcfarland.clayton@zenco.name',
            phone: '+1 (803) 451-2232',
            address: '545 Dumont Avenue, Woodburn, California, 1170',
        },
        {
            _id: '5d99beb63a32d412427672da',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Hernandez',
                last: 'Lee',
            },
            company: 'NURALI',
            email: 'hernandez.lee@nurali.tv',
            phone: '+1 (819) 421-3593',
            address: '687 Luquer Street, Cade, Indiana, 8731',
        },
        {
            _id: '5d99beb61f78f116aafaad7b',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Katina',
                last: 'Solis',
            },
            company: 'SLAMBDA',
            email: 'katina.solis@slambda.biz',
            phone: '+1 (945) 416-3177',
            address: '583 Elton Street, Lund, Nebraska, 9403',
        },
        {
            _id: '5d99beb6abc50cae2376910a',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Tanya',
                last: 'Hewitt',
            },
            company: 'ZILLIDIUM',
            email: 'tanya.hewitt@zillidium.org',
            phone: '+1 (885) 544-2633',
            address: '197 Tillary Street, Nash, North Carolina, 9575',
        },
        {
            _id: '5d99beb6a6c3c2ca5dcb855c',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Tillman',
                last: 'Buchanan',
            },
            company: 'BOILICON',
            email: 'tillman.buchanan@boilicon.me',
            phone: '+1 (997) 520-2562',
            address: '741 Seigel Street, Whitestone, Delaware, 5588',
        },
        {
            _id: '5d99beb695b05943e5dd78dd',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Maria',
                last: 'Hart',
            },
            company: 'PYRAMI',
            email: 'maria.hart@pyrami.info',
            phone: '+1 (814) 400-2126',
            address: '507 Royce Place, Makena, Oregon, 451',
        },
        {
            _id: '5d99beb6608b27c39d17ce02',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Sondra',
                last: 'Stuart',
            },
            company: 'CUBIX',
            email: 'sondra.stuart@cubix.co.uk',
            phone: '+1 (924) 580-2223',
            address: '845 Voorhies Avenue, Defiance, Virgin Islands, 2198',
        },
        {
            _id: '5d99beb649dcf9042e8ebf3e',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Carpenter',
                last: 'Castillo',
            },
            company: 'PASTURIA',
            email: 'carpenter.castillo@pasturia.biz',
            phone: '+1 (886) 528-2709',
            address: '862 Colby Court, Hillsboro, Montana, 3192',
        },
        {
            _id: '5d99beb6eff39a753c169f9c',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Christina',
                last: 'Roman',
            },
            company: 'KINDALOO',
            email: 'christina.roman@kindaloo.net',
            phone: '+1 (979) 517-2630',
            address: '379 Evans Street, Bowden, Idaho, 5871',
        },
        {
            _id: '5d99beb634e062b7a7bca29b',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Anna',
                last: 'Boyd',
            },
            company: 'DANCERITY',
            email: 'anna.boyd@dancerity.us',
            phone: '+1 (887) 403-2364',
            address: '183 Rockwell Place, Rosburg, New Jersey, 264',
        },
        {
            _id: '5d99beb6fd10ed3634a91a16',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Yolanda',
                last: 'Mcdonald',
            },
            company: 'OVATION',
            email: 'yolanda.mcdonald@ovation.com',
            phone: '+1 (946) 502-2228',
            address: '889 Herbert Street, Woodlands, West Virginia, 9435',
        },
        {
            _id: '5d99beb67d581d81e0038c8e',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Kristi',
                last: 'Wilkins',
            },
            company: 'ZIALACTIC',
            email: 'kristi.wilkins@zialactic.io',
            phone: '+1 (853) 441-3800',
            address: '391 Dahlgreen Place, Twilight, Wyoming, 5130',
        },
        {
            _id: '5d99beb654a34b0559076fe6',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Stacie',
                last: 'Ortiz',
            },
            company: 'KONGLE',
            email: 'stacie.ortiz@kongle.name',
            phone: '+1 (828) 468-3196',
            address: '735 Bushwick Court, Ilchester, Colorado, 8597',
        },
        {
            _id: '5d99beb6b28061f866d2c339',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Bonner',
                last: 'Carter',
            },
            company: 'IMAGINART',
            email: 'bonner.carter@imaginart.tv',
            phone: '+1 (998) 548-2731',
            address: '740 Harrison Place, Lacomb, Palau, 5392',
        },
        {
            _id: '5d99beb65814fce715011141',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Graciela',
                last: 'Deleon',
            },
            company: 'OVOLO',
            email: 'graciela.deleon@ovolo.biz',
            phone: '+1 (841) 531-2309',
            address: '975 McKibben Street, Nicholson, South Dakota, 5431',
        },
        {
            _id: '5d99beb62061d5009c894004',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Marsha',
                last: 'Chan',
            },
            company: 'ENORMO',
            email: 'marsha.chan@enormo.org',
            phone: '+1 (829) 501-3906',
            address: '765 Whitwell Place, Keyport, Oklahoma, 2647',
        },
        {
            _id: '5d99beb66941cc9e3e358edd',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Ladonna',
                last: 'Bentley',
            },
            company: 'NETPLODE',
            email: 'ladonna.bentley@netplode.me',
            phone: '+1 (928) 512-3093',
            address: '606 Cambridge Place, Harrison, Vermont, 8587',
        },
        {
            _id: '5d99beb669a12f644f5139ee',
            amount: 'floating(1, 4000, 2)',
            type: 'outcome',
            name: {
                first: 'Alta',
                last: 'Thompson',
            },
            company: 'VOLAX',
            email: 'alta.thompson@volax.info',
            phone: '+1 (889) 405-2732',
            address: '357 Brighton Avenue, Dexter, New Mexico, 9046',
        },
        {
            _id: '5d99beb6d97a1b21014e5ff1',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Ayala',
                last: 'Conrad',
            },
            company: 'EMTRAC',
            email: 'ayala.conrad@emtrac.co.uk',
            phone: '+1 (850) 557-2894',
            address: '168 Kane Street, Laurelton, Maine, 6367',
        },
        {
            _id: '5d99beb6ccc8097475120981',
            amount: 'floating(1, 4000, 2)',
            type: 'investment',
            name: {
                first: 'Glenda',
                last: 'Lindsey',
            },
            company: 'ECLIPSENT',
            email: 'glenda.lindsey@eclipsent.biz',
            phone: '+1 (887) 479-2196',
            address: '383 Grove Street, Belvoir, Mississippi, 7175',
        },
        {
            _id: '5d99beb645a511c0f6bce20b',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Rhodes',
                last: 'Lyons',
            },
            company: 'SYNKGEN',
            email: 'rhodes.lyons@synkgen.net',
            phone: '+1 (943) 441-2257',
            address: '602 Conselyea Street, Rockhill, Washington, 8676',
        },
        {
            _id: '5d99beb6a22b596eaf635fd1',
            amount: 'floating(1, 4000, 2)',
            type: 'loan',
            name: {
                first: 'Bond',
                last: 'Talley',
            },
            company: 'DIGIGEN',
            email: 'bond.talley@digigen.us',
            phone: '+1 (905) 498-2315',
            address: '566 Central Avenue, Ebro, Guam, 8891',
        },
        {
            _id: '5d99beb65daa71ef83ec6f57',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Curry',
                last: 'Conley',
            },
            company: 'BICOL',
            email: 'curry.conley@bicol.com',
            phone: '+1 (946) 450-3173',
            address: '682 Lawrence Avenue, Gilgo, Massachusetts, 4292',
        },
        {
            _id: '5d99beb60457512fe012d3c8',
            amount: 'floating(1, 4000, 2)',
            type: 'income',
            name: {
                first: 'Rhoda',
                last: 'Pickett',
            },
            company: 'PYRAMAX',
            email: 'rhoda.pickett@pyramax.io',
            phone: '+1 (938) 546-2133',
            address: '547 Ebony Court, Rivera, Minnesota, 915',
        },
    ],
};


/***/ }),

/***/ 3654:
/*!******************************!*\
  !*** ./src/app/data/tabs.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabsNames": () => (/* binding */ tabsNames)
/* harmony export */ });
const tabsNames = ['income', 'outcome', 'loan', 'investment'];


/***/ }),

/***/ 7309:
/*!********************************************************!*\
  !*** ./src/app/list/components/list/list.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _data_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/tabs */ 3654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/members.service */ 1776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs/tabs.component */ 6375);







function ListComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", member_r1.name.first, "", member_r1.name.last, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", member_r1.amount, " ");
  }
}

class ListComponent {
  constructor(route, membersService) {
    this.route = route;
    this.membersService = membersService;
  }

  ngOnInit() {
    this.queryParamSubscr = this.route.queryParams.subscribe(param => {
      this.membersService.setFinancialType(_data_tabs__WEBPACK_IMPORTED_MODULE_0__.tabsNames[param['tab']]);
    });
    this.members$ = this.membersService.filteredMembers$;
  }

  ngOnDestroy() {
    this.queryParamSubscr.unsubscribe();
  }

}

ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_members_service__WEBPACK_IMPORTED_MODULE_1__.MembersService));
};

ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["ts-list"]],
  decls: 14,
  vars: 3,
  consts: [[1, "container"], ["routerLink", "/", 1, "btn", "btn-primary", "mb-1"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "go to summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ts-tabs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 2)(5, "thead")(6, "tr")(7, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Acount");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ListComponent_tr_12_Template, 5, 3, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 1, ctx.members$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__.TabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["tr[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidHIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 6375:
/*!********************************************************!*\
  !*** ./src/app/list/components/tabs/tabs.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _data_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/tabs */ 3654);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = function (a0) {
  return {
    tab: a0
  };
};

function TabsComponent_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const tabIndex_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tabs__tab_active", tabIndex_r1 === i_r4.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tab_r3);
  }
}

function TabsComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TabsComponent_ul_0_li_1_Template, 3, 6, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.tabsNames);
  }
}

class TabsComponent {
  constructor(route) {
    this.route = route;
    this.tabsNames = _data_tabs__WEBPACK_IMPORTED_MODULE_0__.tabsNames;
    this.currentTabIndex = route.queryParams.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(param => param['tab']));
  }

}

TabsComponent.ɵfac = function TabsComponent_Factory(t) {
  return new (t || TabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};

TabsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TabsComponent,
  selectors: [["ts-tabs"]],
  decls: 2,
  vars: 3,
  consts: [["class", "nav nav-tabs", 4, "ngIf"], [1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["routerLink", "/navigator", 1, "nav-link", "active", 3, "queryParams"]],
  template: function TabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ul_0_Template, 2, 1, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.currentTabIndex));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: [".nav-tabs[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%]    > .tabs__tab_active[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6InRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXRhYnMgPi5uYXYtaXRlbT4udGFic19fdGFiX2FjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 5932:
/*!*********************************************!*\
  !*** ./src/app/list/list-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListRoutingModule": () => (/* binding */ ListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/list/list.component */ 7309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{ path: 'navigator', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent }];
class ListRoutingModule {
}
ListRoutingModule.ɵfac = function ListRoutingModule_Factory(t) { return new (t || ListRoutingModule)(); };
ListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ListRoutingModule });
ListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2130:
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListModule": () => (/* binding */ ListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tabs/tabs.component */ 6375);
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list/list.component */ 7309);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-routing.module */ 5932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class ListModule {
}
ListModule.ɵfac = function ListModule_Factory(t) { return new (t || ListModule)(); };
ListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ListModule });
ListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _list_routing_module__WEBPACK_IMPORTED_MODULE_2__.ListRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ListModule, { declarations: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_0__.TabsComponent, _components_list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _list_routing_module__WEBPACK_IMPORTED_MODULE_2__.ListRoutingModule], exports: [_components_list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent] }); })();


/***/ }),

/***/ 2330:
/*!**************************************************************************************!*\
  !*** ./src/app/page-not-found/components/page-not-found/page-not-found.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class PageNotFoundComponent {
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["ts-page-not-found"]], decls: 5, vars: 0, consts: [[1, "container", "mt-5"], ["routerLink", "/", 1, "btn", "btn-primary"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "page-not-found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "go to main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7236:
/*!*****************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundRoutingModule": () => (/* binding */ PageNotFoundRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 2330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '404', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
];
class PageNotFoundRoutingModule {
}
PageNotFoundRoutingModule.ɵfac = function PageNotFoundRoutingModule_Factory(t) { return new (t || PageNotFoundRoutingModule)(); };
PageNotFoundRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageNotFoundRoutingModule });
PageNotFoundRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageNotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6815:
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundModule": () => (/* binding */ PageNotFoundModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 2330);
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found-routing.module */ 7236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class PageNotFoundModule {
}
PageNotFoundModule.ɵfac = function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); };
PageNotFoundModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
PageNotFoundModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundRoutingModule] }); })();


/***/ }),

/***/ 1776:
/*!****************************************************!*\
  !*** ./src/app/shared/services/members.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersService": () => (/* binding */ MembersService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _data_membersData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/membersData */ 3569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);



class MembersService {
    constructor() {
        this.members$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.financialType$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('investment');
        this.filteredMembers$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([
            this.members$,
            this.financialType$,
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(([members, fType]) => members.filter(member => member.type === fType)));
    }
    setFinancialType(type) {
        this.financialType$.next(type);
    }
    getMembers() {
        this.members$.next(_data_membersData__WEBPACK_IMPORTED_MODULE_0__.membersData.data);
    }
}
MembersService.ɵfac = function MembersService_Factory(t) { return new (t || MembersService)(); };
MembersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MembersService, factory: MembersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6658:
/*!***********************************************************!*\
  !*** ./src/app/summary/components/card/card.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function (a0) { return { tab: a0 }; };
class CardComponent {
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["ts-card"]], inputs: { type: "type", count: "count", index: "index" }, decls: 8, vars: 5, consts: [[1, "card", "text-center"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["routerLink", "/navigator", 1, "btn", "btn-primary", 3, "queryParams"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "See all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.index));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7275:
/*!*****************************************************************!*\
  !*** ./src/app/summary/components/summary/summary.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/tabs */ 3654);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/members.service */ 1776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card.component */ 6658);







function SummaryComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const members_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" you have ", members_r2.length, " trnsactions ");
  }
}

function SummaryComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ts-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", type_r3)("index", i_r4)("count", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, ctx_r1.filteredMembersCounts$[i_r4]));
  }
}

class SummaryComponent {
  constructor(membersService) {
    this.membersService = membersService;
    this.tabsNames = src_app_data_tabs__WEBPACK_IMPORTED_MODULE_0__.tabsNames;
    this.members$ = this.membersService.members$;
    this.filteredMembersCounts$ = src_app_data_tabs__WEBPACK_IMPORTED_MODULE_0__.tabsNames.map(type => this.getFilteredMembersObservable(type));
  }

  getFilteredMembersObservable(type) {
    return this.members$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(members => members.filter(member => member.type === type).length));
  }

}

SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
  return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_members_service__WEBPACK_IMPORTED_MODULE_1__.MembersService));
};

SummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SummaryComponent,
  selectors: [["ts-summary"]],
  decls: 14,
  vars: 4,
  consts: [[1, "container"], [1, "card", "text-center", "mb-4"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary"], ["class", "card-footer text-muted", 4, "ngIf"], [1, "row", "row-cols-5"], ["class", "col mb-4", 4, "ngFor", "ngForOf"], [1, "card-footer", "text-muted"], [1, "col", "mb-4"], [3, "type", "index", "count"]],
  template: function SummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequuntur!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "See transactions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SummaryComponent_div_10_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SummaryComponent_div_13_Template, 3, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 2, ctx.members$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabsNames);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 3608:
/*!***************************************************!*\
  !*** ./src/app/summary/summary-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryRoutingModule": () => (/* binding */ SummaryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/summary/summary.component */ 7275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{ path: '', component: _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__.SummaryComponent, pathMatch: 'full' }];
class SummaryRoutingModule {
}
SummaryRoutingModule.ɵfac = function SummaryRoutingModule_Factory(t) { return new (t || SummaryRoutingModule)(); };
SummaryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SummaryRoutingModule });
SummaryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SummaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7001:
/*!*******************************************!*\
  !*** ./src/app/summary/summary.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryModule": () => (/* binding */ SummaryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card/card.component */ 6658);
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/summary/summary.component */ 7275);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary-routing.module */ 3608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class SummaryModule {
}
SummaryModule.ɵfac = function SummaryModule_Factory(t) { return new (t || SummaryModule)(); };
SummaryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SummaryModule });
SummaryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _summary_routing_module__WEBPACK_IMPORTED_MODULE_2__.SummaryRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SummaryModule, { declarations: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_1__.SummaryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _summary_routing_module__WEBPACK_IMPORTED_MODULE_2__.SummaryRoutingModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map