import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { faBars, faChevronDown, faChevronUp, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'drs-navbar',
  templateUrl:'./drs-navbar.html',
  styleUrls:['./drs-navbar.css','./palette.css']
})
export class DrsNavbarComponent implements OnInit, OnChanges{

  constructor(
    ) { }

    /*  Declarations
    ============================================================================================== */

    @ViewChild("drsNavbar") navbar!: ElementRef<HTMLElement>;

    // Hamburger icon
    currentMenuIcon = faBars
    menuIcons: DrsMenuIcons = {whenNavbarClose: faBars, whenNavbarOpen: faTimes}

    // Dropdown showed
    dropDownShowing: number = -1

    // User data
    @Input() navbarConfiguration!: DrsNavbarConfiguration;

    // My Links
    internalLinks!: CustomNavbarLink[];
    paletteClass: string = '';

    // Event emitter
    @Output() onDropDownClick = new EventEmitter<string>();
    @Output() onLinkClick = new EventEmitter<string>();


    /*  LifeCycle Hooks
    ============================================================================================== */
    ngOnInit(): void {
      this.initializeConfiguration();
    }
    ngOnChanges(): void {
      this.initializeConfiguration();
    }

    /* Navbar Style/Open & Close Method
    ======================================================================================= */

    @HostListener('window:scroll', ['$event'])
    navbarChanges(event: any){
      if(document.documentElement.scrollTop > 50){
        this.navbar.nativeElement.classList.add("slim-nvb")
        this.navbar.nativeElement.classList.remove("show");
        this.navbar.nativeElement.querySelector(".nvb-close")?.classList.remove("show");
        this.closeNvb();
      }else{
        this.navbar.nativeElement.classList.remove("slim-nvb")
      }
    }

    // open navbar when device mode
    openNav(){
      if(this.navbar.nativeElement.classList.contains("show")){
        this.navbar.nativeElement.classList.remove("show");
        this.navbar.nativeElement.querySelector(".nvb-close")?.classList.remove("show");
        this.currentMenuIcon = this.menuIcons.whenNavbarClose
      }else{
        this.navbar.nativeElement.classList.add("show");
        this.navbar.nativeElement.querySelector(".nvb-close")?.classList.add("show");
        this.currentMenuIcon = this.menuIcons.whenNavbarOpen
      }
    }

    // close when clicking a route
    closeNvb(){
      this.navbar.nativeElement.classList.remove("show");
      this.navbar.nativeElement.querySelector(".nvb-close")?.classList.remove("show");
      this.clearDropdown();
    }


    /* DropDown Method
    ====================================================================================*/

    // Set All NavbarConfiguration
    initializeConfiguration(){
      /* Set Dropdown if needed */
      this.internalLinks = []
      this.navbarConfiguration.links.map(
        (link,i)=>{
          if(link.dropDownList){
            let customDropDown: CustomDrsDropdown[] = []
            link.dropDownList.map((dropdown,j)=>{ customDropDown.push({key: j, name: dropdown.name})})
            this.internalLinks?.push({key: i, name: link.name, route: link.route, dropDownList: customDropDown, icon: link.icon, show: false, arrow: faChevronDown})
          }else{
            this.internalLinks?.push({key: i, name: link.name, route: link.route,icon: link.icon});
          }
        }
      )
      /* Set Palette */
      if(this.navbarConfiguration.palette){
        this.paletteClass = this.navbarConfiguration.palette?.valueOf()!
      }
      /* Set icon */
      this.menuIcons = this.navbarConfiguration.currentMenuIcon ? this.navbarConfiguration.currentMenuIcon : {whenNavbarClose: faBars, whenNavbarOpen: faTimes}
      this.currentMenuIcon = this.menuIcons.whenNavbarClose


    }

    /* Show dropdown methopd for desktop device */
    showDesktopDropdown(key: number){
      let dropdownAlreadyOpen = this.internalLinks.find(x=> x.arrow === faChevronUp)
      if(dropdownAlreadyOpen){
        dropdownAlreadyOpen.arrow = faChevronDown
        dropdownAlreadyOpen.show = false
      }
      let link = this.internalLinks.find(x=> x.key === key);
      if(link?.show || (this.internalLinks.indexOf(link!) === this.internalLinks.indexOf(dropdownAlreadyOpen!))){
        this.dropDownShowing = -1;
        link!.show = false
        link!.arrow = faChevronDown
      }else{
        this.dropDownShowing = key;
        link!.show = true;
        link!.arrow = faChevronUp
      }
    }

    /* Show dropdown methopd for phone device */
    showPhoneDropdown(key: number){
      let link = this.internalLinks.find(x=> x.key === key);
      if(link?.show){
        link.show = false
        link.arrow = faChevronDown
      }else{
        link!.show = true;
        link!.arrow = faChevronUp
      }
    }
    clearDropdown(){
      this.dropDownShowing = -1;
      this.internalLinks.map(
        link=>{
          if(link.arrow){
            link.arrow = faChevronDown
          }
          if(link.show){
            link.show = false
          }
        }
      )
      this.currentMenuIcon = this.menuIcons.whenNavbarClose
    }

    /* Event Emitters Method
    ==================================================================================*/

    /** Link emitter */
    emitLinksClick(name: string){
      this.onLinkClick.emit(name);
      this.clearDropdown();
      this.closeNvb();
    }

    /** Dropdown emitter */
    emitDropDownClick(type: string){
      this.onDropDownClick.emit(type);
      this.clearDropdown();
      this.closeNvb();
    }


}


export class DrsNavbarConfiguration{
  links!: DrsNavbarLinks[]
  palette?: DrsNavbarPalette
  logoSrc?: string
  currentMenuIcon?: DrsMenuIcons
 }

export class DrsMenuIcons{
  whenNavbarClose!: IconDefinition
  whenNavbarOpen!: IconDefinition
}

export class DrsNavbarLinks{
  name!: string
  route!: string
  icon?: IconDefinition
  dropDownList?: DrsNavbarDropdown[]
}

/* Used only here in the component */
class CustomNavbarLink{
  key!: number
  name!: string
  route!: string
  icon?: IconDefinition
  show?: boolean
  dropDownList?: CustomDrsDropdown[]
  arrow?: IconDefinition
 }

export class DrsNavbarDropdown{
   name!: string
 }

 class CustomDrsDropdown{
  key!: number
  name!: string
 }

export enum DrsNavbarPalette{
   DarkPalette = 'dark-palette',
   RedPalette = 'red-palette',
   VioletPalette = 'violet-palette',
   GreenPalette = 'green-palette',
   SkyPalette = 'sky-palette',
   OrangePalette = 'orange-palette'
 }
