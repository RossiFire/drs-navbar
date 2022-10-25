
[![](https://img.shields.io/github/followers/RossiFire?label=Github&style=for-the-badge)](https://github.com/RossiFire)

# Drs - Navbar 

Customizable Routing based Angular Navbar. It's fully responsive and highly customizable.

# Demo

[Test Here](https://codesandbox.io/embed/practical-night-1ueohq?fontsize=14&hidenavigation=1&theme=dark)

## Installation

Using npm:
```shell
$ npm i drs-navbar
```

## Usage

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
@NgModule({
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
        logo: 'https://link-image.png', // Or local images
        palette: DrsNavbarPalette.SkyPalette
    }
```

In your HTML file
```shell
<drs-navbar [navbarConfiguration]="drsNavabarConfig"></drs-navbar>
```

* Dropdown links are scrollable, only the first five are visible

## Templates
The Navbar is provided with a default style but you can customize links/dropdowns/button with your custom templates, also thanks to some amazing tricks😉
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

so you can fully customize your template in this way:

```HTML
<!-- To customize main links -->
<ng-template #myLinkTemplate let-link>
  {{link.name}} {{link.custom && .link.custom.otherIcon ? link.custom.otherIcon : ''}}
</ng-template>

<!-- To customize all dropdowns single row -->
<ng-template #myDropdownTemplate let-item>
  {{item.name}} {{item.custom && .item.custom.dropdownIcon ? item.custom.dropdownIcon : ''}}
</ng-template>

  <drs-navbar 
    [navbarConfiguration]="drsNavabarConfig" 
    [linkTemplate]="myLinkTemplate" 
    [dropdownTemplate]="myDropdownTemplate">
  </drs-navbar>
```


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
