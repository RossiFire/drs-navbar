
<!-- [![npm version](https://img.shields.io/npm/v/ngx-bootstrap-navbar.svg?style=flat-square)](https://www.npmjs.com/package/ngx-bootstrap-navbar)
[![npm downloads total](https://img.shields.io/npm/dt/ngx-bootstrap-navbar.svg?style=flat-square)](https://www.npmjs.com/package/ngx-bootstrap-navbar)
[![npm downloads monthly](https://img.shields.io/npm/dm/ngx-bootstrap-navbar.svg?style=flat-square)](https://www.npmjs.com/package/ngx-bootstrap-navbar) -->
# DRS - Navbar 

This is an Angular responsive Navbar. It is fully responsive and highly customizable


## Installation

Using npm:
```shell
$ npm i drs-navbar
```

## Usage
Some informations before the effective usage:

* You can set as many dropdown as you want
* This library use [FontAwesome](https://fontawesome.com/) as icons. In order to use this Navbar you have to import the following libraries:

```shell
$ npm i @fortawesome/fontawesome-svg-core
$ npm i @fortawesome/free-solid-svg-icons
$ npm i @fortawesome/angular-fontawesome<version>
```
* Follow [This Guide](https://www.npmjs.com/package/@fortawesome/angular-fontawesome) to select the right angular-fortawensome version


In your app.module.ts
```js
import { DrsNavbarModule } from 'drs-navbar';

@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    DrsNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
```

In your ts file
```js
@NgModule({
    drsNavabarConfig: DrsNavbarConfiguration = {
        links:[
          {name: 'Link 1', route: '/route1', icon: faBackspace},
          {name: 'Link 2', route: '/route2', icon: faAddressCard, 
            dropDownList: 
              [
                {text: 'DropDown 1'},
                {text: 'DropDown 2'},
                {text: 'DropDown 3'}
              ]
          },
          {name: 'Link 3', route: '/route3', icon: faTableTennis},
          {name: 'Link 4', route: '/route4', icon: faICursor,
            dropDownList: 
              [
                {text: 'DropDown 1'},
                {text: 'DropDown 2'},
                {text: 'DropDown 3'}
              ]
          },
        ],
        logo: 'https://link-image.png', // You can also use local src
        palette: DrsNavbarPalette.SkyPalette
    }
```

In your HTML file
```shell
<drs-navbar [navbarConfiguration]="drsNavabarConfig"></drs-navbar>
```

* in mobile mode, the dropdown links are scrollable, so you see the firsts three and than you can scroll

## Properties
 Property | Usage | Mandatory
------------- | ------------- | -------------
 navbarConfiguration  | Main configuration of the navbar, here you can set links, logo, color palette,ecc | true  
 openIcon  | Top right icon when menù is closed | false
 closeIcon  | Top right icon when menù is open | false

## Output
 Output | Usage
------------- | -------------
 onLinkClick  | Called when click on one of the main link
 onDropDownClick  | Called when click on one of the link in the dropdown/s

## Other
There are six differents color palette for this navbar:
* Dark
* Orange
* Greeen
* Red
* Blue Sky
* Violet

If you want you can follow me on [Instagram](https://www.instagram.com/dna.iele/) 