import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { MockVariantSearchService } from '../../../mocks/variant-search-service.mock';
import { VariantSearchService } from '../../../services/variant-search-service';
import { GenomeBrowserComponent } from '../../parts/genome-browser/genome-browser.component';
import { AlleleFreqComponent } from '../../parts/allele-freq/allele-freq.component';
import { FormsModule } from '@angular/forms';
import { VsalService } from '../../../services/vsal-service';
import { MockVsalService } from '../../../mocks/vsal-service.mock';
import { MockAuth } from '../../../mocks/auth.mock';
import { Auth } from '../../../services/auth-service';
import { GenomeBrowserResizeComponent } from '../../parts/genome-browser-resizable/genome-browser-resizable.component';
import { SearchBarComponent } from '../../parts/search-bar/search-bar.component';
import { SearchOptionComponent } from '../../parts/search-option/search-option.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ActivatedRoute, Router, RouterModule, RouterOutletMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchBarService } from '../../../services/search-bar-service';
import { MockSearchBarService } from '../../../mocks/search-bar-service.mock';
import { GeneInformationComponent } from '../../parts/gene-information/gene-information.component';
import { MaterialModule } from '@angular/material';
import { SearchResultsComponent } from '../../parts/search-results/search-results.component';
import { VariantsTableComponent } from '../../parts/variants-table/variants-table.component';
import { OverlayMenuComponent } from '../../parts/overlay-menu/overlay-menu.component';
import { ColumnsMenuComponent } from '../../parts/columns-menu/columns-menu.component';
import { FilterAutoComponent } from '../../parts/filter-auto/filter-auto.component';
import { SearchBarWithOptionsComponent } from '../../parts/search-bar-with-options/search-bar-with-options.component';
import { PageContainerComponent } from '../../parts/page-container/page-container.component';
import { PrivacyFooterComponent } from '../../parts/privacy-footer/privacy-footer.component';
import { SideNavComponent } from '../../parts/side-nav/side-nav.component';
import { HeaderNavComponent } from '../../parts/header-nav/header-nav.component';
import { ScrollService } from '../../../services/scroll-service';
import { LocationStrategy } from '@angular/common';
import { MockRouter } from '../../../mocks/router.mock';
import { MockLocationStrategy } from '../../../mocks/locationstrategy.mock';
import { RegionInformationComponent } from '../../parts/region-information/region-information.component';
import { ElasticGeneSearch } from '../../../services/autocomplete/elastic-gene-search-service';
import { RegionService } from '../../../services/autocomplete/region-service';
import { PositionService } from '../../../services/autocomplete/position-service';

describe('Component: Search', () => {

    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                Ng2PaginationModule,
                MaterialModule,
                RouterModule
            ],
            declarations: [
                AlleleFreqComponent,
                SearchResultsComponent,
                VariantsTableComponent,
                GenomeBrowserComponent,
                SearchComponent,
                GenomeBrowserResizeComponent,
                SearchBarComponent,
                SearchOptionComponent,
                GeneInformationComponent,
                RegionInformationComponent,
                OverlayMenuComponent,
                ColumnsMenuComponent,
                FilterAutoComponent,
                SearchBarWithOptionsComponent,
                PageContainerComponent,
                PrivacyFooterComponent,
                SideNavComponent,
                HeaderNavComponent
            ],
            providers: [
                ScrollService,
                {
                    provide: LocationStrategy,
                    useValue: new MockLocationStrategy()
                },
                {
                    provide: ActivatedRoute,
                    useValue: {}
                },
                {
                    provide: Router,
                    useValue: new MockRouter()
                },
                {
                    provide: Auth,
                    useValue: new MockAuth()
                },
                {
                    provide: SearchBarService,
                    useValue: new MockSearchBarService()
                },
                {
                    provide: VariantSearchService,
                    useValue: new MockVariantSearchService()
                },
                {
                    provide: VsalService,
                    useValue: new MockVsalService([])
                },
                {
                    provide: ElasticGeneSearch,
                    useValue: {}
                },
                {
                    provide: RegionService,
                    useValue: {}
                },
                {
                    provide: PositionService,
                    useValue: {}
                }
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });
});