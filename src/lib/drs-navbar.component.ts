import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'drs-navbar',
  templateUrl:'./drs-navbar.html',
  styleUrls:['./drs-navbar.css','./palette.css']
})
export class DrsNavbarComponent implements OnInit, OnChanges{

  constructor(
    ) { }


    /**
     * Main links custom template
     */
    @Input() linkTemplate!: TemplateRef<DrsNavbarLinks>;

    /**
     * How the records in dropdown lists are shown
     */
    @Input() dropdownTemplate!: TemplateRef<DrsNavbarDropdown>;

    /**
     * Custom content in the button section when the navbar is open and close.
     *
     * **The button is shown only in mobile version**
     */
    @Input() buttonTemplate?: ButtonTemplate;


    /**
     * {@link DrsNavbarConfiguration DrsNavbarConfiguration} configuration
     */
    @Input() navbarConfiguration!: DrsNavbarConfiguration;


    @ViewChild("drsNavbar") navbar!: ElementRef<HTMLElement>;
    @ViewChildren("lnks") links!: QueryList<any>;

    // Dropdown showed
    dropDownShowing: number = -1
    paletteClass: string = '';
    isOpen = false

    // Event emitter
    @Output() onDropdownClick = new EventEmitter<string>();
    @Output() onDropDownLinkClick = new EventEmitter<string>();


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


    @HostListener('document:click', ['$event'])
    clickout(event: any) {
      if(!this.links.some(x=> x.nativeElement.contains(event.target)) && document.body.clientWidth > 900){
        this.clearDropdown();
      }
    }

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
    toggleNavOnButtonClick(){
      this.navbar.nativeElement.classList.toggle("show");
      this.navbar.nativeElement.querySelector(".nvb-close")?.classList.toggle("show");
      this.isOpen = !this.isOpen
    }

    // close when clicking a route
    closeNvb(){
      this.navbar.nativeElement.classList.remove("show");
      this.navbar.nativeElement.querySelector(".nvb-close")?.classList.remove("show");
      this.clearDropdown();
      this.isOpen = false
    }


    /* DropDown Method
    ====================================================================================*/

    // Set All NavbarConfiguration
    initializeConfiguration(){
      /* Set Palette */
      if(this.navbarConfiguration.palette){
        this.paletteClass = this.navbarConfiguration.palette?.valueOf()!
      }
    }

    /* Show dropdown methopd for desktop device */
    showDesktopDropdown(key: number){
      this.dropDownShowing = this.dropDownShowing === key ? -1 : key
    }

    /* Show dropdown methopd for phone device */
    showPhoneDropdown(key: number){
      this.dropDownShowing = this.dropDownShowing === key ? -1 : key
    }

    clearDropdown(){
      this.dropDownShowing = -1;
    }

    /* Event Emitters Method
    ==================================================================================*/

    /** Link emitter */
    emitLinkClick(name: string){
      this.onDropDownLinkClick.emit(name);
      this.clearDropdown();
      this.closeNvb();
    }

    /** Dropdown emitter */
    emitDropdownClick(type: string){
      this.onDropdownClick.emit(type);
      this.clearDropdown();
      this.closeNvb();
    }


}


export class DrsNavbarConfiguration{
  links!: DrsNavbarLinks[]
  palette?: DrsNavbarPalette
  logoSrc?: string
 }


export class DrsNavbarLinks{
  name!: string
  route!: string
  dropDownList?: DrsNavbarDropdown[]
  custom?: Partial<any>
}


export class DrsNavbarDropdown{
   name!: string
   key!: any
   other?: Partial<any>
 }

 export class ButtonTemplate{
  openedDropdown!: TemplateRef<any>
  closedDropdown!: TemplateRef<any>
 }



export enum DrsNavbarPalette{
   DarkPalette = 'dark-palette',
   RedPalette = 'red-palette',
   VioletPalette = 'violet-palette',
   GreenPalette = 'green-palette',
   SkyPalette = 'sky-palette',
   OrangePalette = 'orange-palette'
 }
