
[![](https://img.shields.io/github/followers/RossiFire?label=Github&style=for-the-badge)](https://github.com/RossiFire)

# Drs - Navbar 

Fully responsive and highly customizable routing based Angular Navbar.

# Demo

[Simple Example Here](https://stackblitz.com/edit/drs-navbar)

# Installation

Using npm:
```shell
$ npm i drs-navbar
```

# Usage

Import `DrsNavbarModule` in your `app.module.ts`
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

Declare a configuration in your .ts file
```js
    drsNavabarConfig: DrsNavbarConfiguration = {
      links:[
        {name: 'Link 1', route: '/route1'},
        {
          name: 'Link 2', 
          route: '/route2',
          dropDownList: 
            [
              {name: 'DropDown 1', key: 0},
              {name: 'DropDown 2', key: '1'},
              {name: 'DropDown 3', key: 2.5}
            ]
        },
        {name: 'Link 3', route: '/route3'},
        {
          name: 'Link 4', 
          route: '/route4',
          dropDownList: 
            [
              {name: 'DropDown 1', key: 'enum'},
              {name: 'DropDown 2', key: 'other'},
              {name: 'DropDown 3', key: ()=> 'hello'}
            ]
        },
      ],
      logoSrc: 'https://link-image.png', // Or local images
      palette: DrsNavbarPalette.SkyPalette
    }
```

In your HTML file
```shell
<drs-navbar [navbarConfiguration]="drsNavabarConfig"></drs-navbar>
```

# Templates
The Navbar needs your custom templates to customize links and dropdowns
How to do that:

Both in the links and dropdowns configuration you can pass a custom object with any parameter you want, like this:
```js
drsNavabarConfig: DrsNavbarConfiguration = {
  links:[
    {name: 'Link 1', route: '/route1', custom: {otherIcon: 'icon'}},
    {name: 'Link 2', route: '/route2', custom: {text: 'text'}},
    {
      name: 'Link 3', 
      route: '/route3',
      dropDownList:[
        {name: 'DropDown 1', key: 0, custom: {dropdownIcon: 'icon'}},
        {name: 'DropDown 2', key: 1, custom: {other: 'rehto'}},
        {name: 'DropDown 3', key: 2, custom: }
      ]
    },
    {name: 'Link 4', route: '/route4', custom: {somethingElse: 'else'}},
  ]
}
```

You can implement your templates in this way:

```HTML
<!-- To customize main links -->
<ng-template #myLinkTemplate let-link>
  {{link.name}} {{link.custom && link.custom.otherIcon ? link.custom.otherIcon : ''}}
</ng-template>

<!-- To customize all dropdowns single row -->
<ng-template #myDropdownTemplate let-item>
  {{item.name}} {{item.custom && item.custom.dropdownIcon ? item.custom.dropdownIcon : ''}}
</ng-template>

  <drs-navbar 
    [navbarConfiguration]="drsNavabarConfig" 
    [linkTemplate]="myLinkTemplate" 
    [dropdownTemplate]="myDropdownTemplate">
  </drs-navbar>
```


# Properties
 Property | Usage | Mandatory
------------- | ------------- | -------------
 navbarConfiguration  | Main configuration of the navbar. You can set links, logo, color palette,ecc | true  
 linkTemplate  | Main links template | true
 dropdownTemplate  | Dropdown links template | true
 buttonTemplate  | Open/Close custom button template  | false

# Output
 Output | Usage
------------- | -------------
 onLinkClick  |  Main link clicked
 onDropDownLinkClick  |  Dropdown link clicked

# Other
There are six differents color palette for this navbar:
* Dark
* Orange
* Greeen
* Red
* Blue Sky
* Violet
