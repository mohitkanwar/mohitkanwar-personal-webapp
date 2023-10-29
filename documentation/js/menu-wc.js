'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ang2-mohitkanwar documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-c78f617c3aa2091c1978a39ed229ebe47a17cf3a92243ddbcf961c176b8e7a411f2b79428caea6dcdb6e721860c60376776af5a6d7ab4b7a87f0fc433715e9f9"' : 'data-bs-target="#xs-components-links-module-AppModule-c78f617c3aa2091c1978a39ed229ebe47a17cf3a92243ddbcf961c176b8e7a411f2b79428caea6dcdb6e721860c60376776af5a6d7ab4b7a87f0fc433715e9f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c78f617c3aa2091c1978a39ed229ebe47a17cf3a92243ddbcf961c176b8e7a411f2b79428caea6dcdb6e721860c60376776af5a6d7ab4b7a87f0fc433715e9f9"' :
                                            'id="xs-components-links-module-AppModule-c78f617c3aa2091c1978a39ed229ebe47a17cf3a92243ddbcf961c176b8e7a411f2b79428caea6dcdb6e721860c60376776af5a6d7ab4b7a87f0fc433715e9f9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleModule.html" data-type="entity-link" >ArticleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ArticleModule-a6f874ba74536c76976825632ce57665852279a3ad95e72249cc47e05e9456e82e661546f295bc853f917ae5032040a60c5b396683446cac54cd2433b95df038"' : 'data-bs-target="#xs-components-links-module-ArticleModule-a6f874ba74536c76976825632ce57665852279a3ad95e72249cc47e05e9456e82e661546f295bc853f917ae5032040a60c5b396683446cac54cd2433b95df038"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArticleModule-a6f874ba74536c76976825632ce57665852279a3ad95e72249cc47e05e9456e82e661546f295bc853f917ae5032040a60c5b396683446cac54cd2433b95df038"' :
                                            'id="xs-components-links-module-ArticleModule-a6f874ba74536c76976825632ce57665852279a3ad95e72249cc47e05e9456e82e661546f295bc853f917ae5032040a60c5b396683446cac54cd2433b95df038"' }>
                                            <li class="link">
                                                <a href="components/ArticleCommentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleCommentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArticleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-ArticleModule-a6f874ba74536c76976825632ce57665852279a3ad95e72249cc47e05e9456e82e661546f295bc853f917ae5032040a60c5b396683446cac54cd2433b95df038"' : 'data-bs-target="#xs-pipes-links-module-ArticleModule-a6f874ba74536c76976825632ce57665852279a3ad95e72249cc47e05e9456e82e661546f295bc853f917ae5032040a60c5b396683446cac54cd2433b95df038"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ArticleModule-a6f874ba74536c76976825632ce57665852279a3ad95e72249cc47e05e9456e82e661546f295bc853f917ae5032040a60c5b396683446cac54cd2433b95df038"' :
                                            'id="xs-pipes-links-module-ArticleModule-a6f874ba74536c76976825632ce57665852279a3ad95e72249cc47e05e9456e82e661546f295bc853f917ae5032040a60c5b396683446cac54cd2433b95df038"' }>
                                            <li class="link">
                                                <a href="pipes/MarkdownPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarkdownPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleRoutingModule.html" data-type="entity-link" >ArticleRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-083d9ee90e58e77218f912262fe72f772865e6aaa06eed6066b0908b5d77f277c0ab8fa5a1c0545dc50df9af1e65aba9eb175f6d45424fd320da5560cc0c9e23"' : 'data-bs-target="#xs-components-links-module-AuthModule-083d9ee90e58e77218f912262fe72f772865e6aaa06eed6066b0908b5d77f277c0ab8fa5a1c0545dc50df9af1e65aba9eb175f6d45424fd320da5560cc0c9e23"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-083d9ee90e58e77218f912262fe72f772865e6aaa06eed6066b0908b5d77f277c0ab8fa5a1c0545dc50df9af1e65aba9eb175f6d45424fd320da5560cc0c9e23"' :
                                            'id="xs-components-links-module-AuthModule-083d9ee90e58e77218f912262fe72f772865e6aaa06eed6066b0908b5d77f277c0ab8fa5a1c0545dc50df9af1e65aba9eb175f6d45424fd320da5560cc0c9e23"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContentModule.html" data-type="entity-link" >ContentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ContentModule-652c19fdc0b0dd041b5e178bae9392a8c0f48424b6a98da51f4a98e362f78ad23adb8beef747c24d89b50ed9ccf180caf2abe1eb2d9983f21c72eaef42171b89"' : 'data-bs-target="#xs-components-links-module-ContentModule-652c19fdc0b0dd041b5e178bae9392a8c0f48424b6a98da51f4a98e362f78ad23adb8beef747c24d89b50ed9ccf180caf2abe1eb2d9983f21c72eaef42171b89"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContentModule-652c19fdc0b0dd041b5e178bae9392a8c0f48424b6a98da51f4a98e362f78ad23adb8beef747c24d89b50ed9ccf180caf2abe1eb2d9983f21c72eaef42171b89"' :
                                            'id="xs-components-links-module-ContentModule-652c19fdc0b0dd041b5e178bae9392a8c0f48424b6a98da51f4a98e362f78ad23adb8beef747c24d89b50ed9ccf180caf2abe1eb2d9983f21c72eaef42171b89"' }>
                                            <li class="link">
                                                <a href="components/BlogsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PresentationListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PresentationListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PresentationListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PresentationListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PresentationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PresentationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuotesBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuotesBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-0d453fa1d749443e72836cd48077d6c931d22cfd8cb2efa6a5a2ea04b6d2dae3a9a7bdfe2907956ca4f3fc694dbdcb4d4c6367de0a2dca7dcffddcf94932e266"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-0d453fa1d749443e72836cd48077d6c931d22cfd8cb2efa6a5a2ea04b6d2dae3a9a7bdfe2907956ca4f3fc694dbdcb4d4c6367de0a2dca7dcffddcf94932e266"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-0d453fa1d749443e72836cd48077d6c931d22cfd8cb2efa6a5a2ea04b6d2dae3a9a7bdfe2907956ca4f3fc694dbdcb4d4c6367de0a2dca7dcffddcf94932e266"' :
                                        'id="xs-injectables-links-module-CoreModule-0d453fa1d749443e72836cd48077d6c931d22cfd8cb2efa6a5a2ea04b6d2dae3a9a7bdfe2907956ca4f3fc694dbdcb4d4c6367de0a2dca7dcffddcf94932e266"' }>
                                        <li class="link">
                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ArticlesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticlesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CommentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CxoModule.html" data-type="entity-link" >CxoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CxoModule-44177c699b75b7b4ec7822026e5d849dda404051f0a4efd16d1c80b812a452f65eb20b9f92bb384637828f940dfa0c6db74f94dbf5ac2c72e15d961798b0f513"' : 'data-bs-target="#xs-components-links-module-CxoModule-44177c699b75b7b4ec7822026e5d849dda404051f0a4efd16d1c80b812a452f65eb20b9f92bb384637828f940dfa0c6db74f94dbf5ac2c72e15d961798b0f513"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CxoModule-44177c699b75b7b4ec7822026e5d849dda404051f0a4efd16d1c80b812a452f65eb20b9f92bb384637828f940dfa0c6db74f94dbf5ac2c72e15d961798b0f513"' :
                                            'id="xs-components-links-module-CxoModule-44177c699b75b7b4ec7822026e5d849dda404051f0a4efd16d1c80b812a452f65eb20b9f92bb384637828f940dfa0c6db74f94dbf5ac2c72e15d961798b0f513"' }>
                                            <li class="link">
                                                <a href="components/YourCxoCircleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YourCxoCircleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditorModule.html" data-type="entity-link" >EditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EditorModule-e5150825ecfd8bddf41fe359158f79c90f8ab69f1125524fd3154c51431534cb6961619f6c33573fdc0e808b5606d03e19e7228058af0f38f7fa3f81147a984e"' : 'data-bs-target="#xs-components-links-module-EditorModule-e5150825ecfd8bddf41fe359158f79c90f8ab69f1125524fd3154c51431534cb6961619f6c33573fdc0e808b5606d03e19e7228058af0f38f7fa3f81147a984e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditorModule-e5150825ecfd8bddf41fe359158f79c90f8ab69f1125524fd3154c51431534cb6961619f6c33573fdc0e808b5606d03e19e7228058af0f38f7fa3f81147a984e"' :
                                            'id="xs-components-links-module-EditorModule-e5150825ecfd8bddf41fe359158f79c90f8ab69f1125524fd3154c51431534cb6961619f6c33573fdc0e808b5606d03e19e7228058af0f38f7fa3f81147a984e"' }>
                                            <li class="link">
                                                <a href="components/EditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditorRoutingModule.html" data-type="entity-link" >EditorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-4f53441d8eb3ede364428ff208505c590e0e005243aa4c7c04234f1fbb6d3fbbf02c68a3d1d6ebef692ebcc679ccf10c9184d700062a3f88c01ff3f2f560825f"' : 'data-bs-target="#xs-components-links-module-HomeModule-4f53441d8eb3ede364428ff208505c590e0e005243aa4c7c04234f1fbb6d3fbbf02c68a3d1d6ebef692ebcc679ccf10c9184d700062a3f88c01ff3f2f560825f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-4f53441d8eb3ede364428ff208505c590e0e005243aa4c7c04234f1fbb6d3fbbf02c68a3d1d6ebef692ebcc679ccf10c9184d700062a3f88c01ff3f2f560825f"' :
                                            'id="xs-components-links-module-HomeModule-4f53441d8eb3ede364428ff208505c590e0e005243aa4c7c04234f1fbb6d3fbbf02c68a3d1d6ebef692ebcc679ccf10c9184d700062a3f88c01ff3f2f560825f"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImagePostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagePostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimelineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimelineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoPostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MoneyModule.html" data-type="entity-link" >MoneyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MoneyModule-39b7336afba29003211cdae3d43453ac9bc469a35d7801a8a7b1abf89977eeb024bf157a1dd3962d1e6ee691bbe73f8d7baf8f5cfcc379260385a88ec10189f9"' : 'data-bs-target="#xs-components-links-module-MoneyModule-39b7336afba29003211cdae3d43453ac9bc469a35d7801a8a7b1abf89977eeb024bf157a1dd3962d1e6ee691bbe73f8d7baf8f5cfcc379260385a88ec10189f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MoneyModule-39b7336afba29003211cdae3d43453ac9bc469a35d7801a8a7b1abf89977eeb024bf157a1dd3962d1e6ee691bbe73f8d7baf8f5cfcc379260385a88ec10189f9"' :
                                            'id="xs-components-links-module-MoneyModule-39b7336afba29003211cdae3d43453ac9bc469a35d7801a8a7b1abf89977eeb024bf157a1dd3962d1e6ee691bbe73f8d7baf8f5cfcc379260385a88ec10189f9"' }>
                                            <li class="link">
                                                <a href="components/DonationBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonationBoxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProfileModule-708d60429161841b9793b4a2d65590d443fe08ca3783900503d99d3d30664241dc2d65540c1dd3c8d8d779adcdefdef5fd8f3d2e717970ce8503c0e4db04d16a"' : 'data-bs-target="#xs-components-links-module-ProfileModule-708d60429161841b9793b4a2d65590d443fe08ca3783900503d99d3d30664241dc2d65540c1dd3c8d8d779adcdefdef5fd8f3d2e717970ce8503c0e4db04d16a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-708d60429161841b9793b4a2d65590d443fe08ca3783900503d99d3d30664241dc2d65540c1dd3c8d8d779adcdefdef5fd8f3d2e717970ce8503c0e4db04d16a"' :
                                            'id="xs-components-links-module-ProfileModule-708d60429161841b9793b4a2d65590d443fe08ca3783900503d99d3d30664241dc2d65540c1dd3c8d8d779adcdefdef5fd8f3d2e717970ce8503c0e4db04d16a"' }>
                                            <li class="link">
                                                <a href="components/ProfileArticlesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileArticlesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileFavoritesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileFavoritesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link" >ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectsModule.html" data-type="entity-link" >ProjectsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProjectsModule-1905f1c1e51504d797b05ed235986ff5368c5531405cf5e7182d3cc29530957415c1bcda2e160c3c5e5e42a9612c911e4a26d70e2307a9d0ec9706a1fc9dbcbf"' : 'data-bs-target="#xs-components-links-module-ProjectsModule-1905f1c1e51504d797b05ed235986ff5368c5531405cf5e7182d3cc29530957415c1bcda2e160c3c5e5e42a9612c911e4a26d70e2307a9d0ec9706a1fc9dbcbf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectsModule-1905f1c1e51504d797b05ed235986ff5368c5531405cf5e7182d3cc29530957415c1bcda2e160c3c5e5e42a9612c911e4a26d70e2307a9d0ec9706a1fc9dbcbf"' :
                                            'id="xs-components-links-module-ProjectsModule-1905f1c1e51504d797b05ed235986ff5368c5531405cf5e7182d3cc29530957415c1bcda2e160c3c5e5e42a9612c911e4a26d70e2307a9d0ec9706a1fc9dbcbf"' }>
                                            <li class="link">
                                                <a href="components/JeevanRatansComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JeevanRatansComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyBlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyBlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyPublicInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyPublicInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SettingsModule-c98ef14185341567fbf143dfffc3a37995b71356132d62f46274368ba9f79d8e7de9d84615d59a5f8b24871ada3389ec0bf13795d4a5475924f60f7ff1f013dc"' : 'data-bs-target="#xs-components-links-module-SettingsModule-c98ef14185341567fbf143dfffc3a37995b71356132d62f46274368ba9f79d8e7de9d84615d59a5f8b24871ada3389ec0bf13795d4a5475924f60f7ff1f013dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-c98ef14185341567fbf143dfffc3a37995b71356132d62f46274368ba9f79d8e7de9d84615d59a5f8b24871ada3389ec0bf13795d4a5475924f60f7ff1f013dc"' :
                                            'id="xs-components-links-module-SettingsModule-c98ef14185341567fbf143dfffc3a37995b71356132d62f46274368ba9f79d8e7de9d84615d59a5f8b24871ada3389ec0bf13795d4a5475924f60f7ff1f013dc"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-99bf6c6088621ecebd7be18760ee3e20619c329469872ff4769e0e1848102b8b1de57e1428c62762f052ae4df92bfc12f5437a944e4e0c11f79f77e6f8746c20"' : 'data-bs-target="#xs-components-links-module-SharedModule-99bf6c6088621ecebd7be18760ee3e20619c329469872ff4769e0e1848102b8b1de57e1428c62762f052ae4df92bfc12f5437a944e4e0c11f79f77e6f8746c20"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-99bf6c6088621ecebd7be18760ee3e20619c329469872ff4769e0e1848102b8b1de57e1428c62762f052ae4df92bfc12f5437a944e4e0c11f79f77e6f8746c20"' :
                                            'id="xs-components-links-module-SharedModule-99bf6c6088621ecebd7be18760ee3e20619c329469872ff4769e0e1848102b8b1de57e1428c62762f052ae4df92bfc12f5437a944e4e0c11f79f77e6f8746c20"' }>
                                            <li class="link">
                                                <a href="components/ArticleListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArticleMetaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleMetaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArticlePreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticlePreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavoriteButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FollowButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FollowButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutMobileFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutMobileFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutMobileHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutMobileHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListErrorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListErrorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SharedModule-99bf6c6088621ecebd7be18760ee3e20619c329469872ff4769e0e1848102b8b1de57e1428c62762f052ae4df92bfc12f5437a944e4e0c11f79f77e6f8746c20"' : 'data-bs-target="#xs-directives-links-module-SharedModule-99bf6c6088621ecebd7be18760ee3e20619c329469872ff4769e0e1848102b8b1de57e1428c62762f052ae4df92bfc12f5437a944e4e0c11f79f77e6f8746c20"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-99bf6c6088621ecebd7be18760ee3e20619c329469872ff4769e0e1848102b8b1de57e1428c62762f052ae4df92bfc12f5437a944e4e0c11f79f77e6f8746c20"' :
                                        'id="xs-directives-links-module-SharedModule-99bf6c6088621ecebd7be18760ee3e20619c329469872ff4769e0e1848102b8b1de57e1428c62762f052ae4df92bfc12f5437a944e4e0c11f79f77e6f8746c20"' }>
                                        <li class="link">
                                            <a href="directives/ShowAuthedDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowAuthedDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ArticleListComponent.html" data-type="entity-link" >ArticleListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ArticleMetaComponent.html" data-type="entity-link" >ArticleMetaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ArticlePreviewComponent.html" data-type="entity-link" >ArticlePreviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FavoriteButtonComponent.html" data-type="entity-link" >FavoriteButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FollowButtonComponent.html" data-type="entity-link" >FollowButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BlogItem.html" data-type="entity-link" >BlogItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/Feed.html" data-type="entity-link" >Feed</a>
                            </li>
                            <li class="link">
                                <a href="classes/MediumBlogsResponse.html" data-type="entity-link" >MediumBlogsResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavigationLink.html" data-type="entity-link" >NavigationLink</a>
                            </li>
                            <li class="link">
                                <a href="classes/Presentation.html" data-type="entity-link" >Presentation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quote.html" data-type="entity-link" >Quote</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimelinePost.html" data-type="entity-link" >TimelinePost</a>
                            </li>
                            <li class="link">
                                <a href="classes/Video.html" data-type="entity-link" >Video</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArticlesService.html" data-type="entity-link" >ArticlesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlogsService.html" data-type="entity-link" >BlogsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentsService.html" data-type="entity-link" >CommentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventsService.html" data-type="entity-link" >EventsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtService.html" data-type="entity-link" >JwtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationService.html" data-type="entity-link" >NavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfilesService.html" data-type="entity-link" >ProfilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpTokenInterceptor.html" data-type="entity-link" >HttpTokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/ArticleResolver.html" data-type="entity-link" >ArticleResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/EditableArticleResolver.html" data-type="entity-link" >EditableArticleResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/HomeAuthResolver.html" data-type="entity-link" >HomeAuthResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/NoAuthGuard.html" data-type="entity-link" >NoAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProfileResolver.html" data-type="entity-link" >ProfileResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Article.html" data-type="entity-link" >Article</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArticleListConfig.html" data-type="entity-link" >ArticleListConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Errors.html" data-type="entity-link" >Errors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Profile.html" data-type="entity-link" >Profile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});