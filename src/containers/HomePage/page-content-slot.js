import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { pathOr, isNil, sortBy, pluck, sortWith, ascend, compose, prop, pick, whereEq, any, filter, flatten } from 'ramda';
import { apiTokenActions } from "../../actions";
import HeaderComp from '../../components/Header/indexv1';
import { getByGenrer } from '../../components/Carousel/api/Movies';
import HomePageLayout from './HomePagelayout';
import { HeroBannerText } from '../../components/HeroBannerWithIcon/indexv1';
import { ContentTraySection } from './ContentTraysSection';
import TrayComponentFilter from '../../components/TrayComponentFilter/trayComponent';
import TrayComponentText from '../../components/TrayComponentWithText/index';
import TrayComponent from '../../components/TrayComponent/index';
import TrayWithTitleHome from './Trays/TrayWithTitleHome/tray-with-title-home';
import TrendingNowTrayHome from './Trays/TrendingNowHome/trending-now-home';
import TrayWithFilterHome from './Trays/TrayWithFilterHome/tray-with-filter-home';
import { Global, css } from '@emotion/react';
import Footer from '../../components/Footer/footer';

// Once the user tries to navigate to the pages on website, 
// there will be a configuration pertaining to the slots in which 
// the contents will be layed out and which compnents should render

// TODO:
// Write an config object in which we take in the attributes to decide the slots in which the contents are loaded.
// Before all, we take in the object, create slots and add the components dynamically to these slots

// Use the following structure to avoid prop drilling on each page container

const tenantname = 'tentkotta';


// Lookup table of components based on id
const availableHomePageComponent = [
    {
        module_id: 'header-component',
        component: HeaderComp
    },
    {
        module_id: 'hero-banner-text-component',
        component: HeroBannerText

    },
    {
        module_id: 'traywithtitlecomponent',
        component: TrayWithTitleHome
    },
    {
        module_id: 'trendingtraycomponent',
        component: TrendingNowTrayHome
    },
    {
        module_id: 'traywithtextcomponent',
        component: TrayComponentText
    },
    {
        module_id: 'footer-component',
        component: Footer
    },
    {
        module_id: 'traywithfiltercomponent',
        component: TrayWithFilterHome
    }
];




function HomePageContent({ user }) {

    // Initial setup
    const themes = useSelector(state => state.ThemeReducer);
    const themesLoading = useSelector(state => pathOr(false, ['ThemeReducer', 'loading'])(state))
    const reload = useSelector(state => pathOr('', ['SignInReducer', 'reload'])(state));

    // React-redux setup
    const dispatch = useDispatch();

    const pageconfiguration = {
        header: {
            position: 'top',
            components: [
                {
                    module_id: 'header-component'
                }
            ]
        },
        body: {
            position: 'middle',
            components: [
                {
                    module_id: 'hero-banner-text-component',
                    index: 1
                },
                {
                    module_id: 'traywithfiltercomponent',
                    index: 2
                },
                {
                    module_id: 'traywithtitlecomponent',
                    index: 5
                },
                {
                    module_id: 'trendingtraycomponent',
                    index: 4
                },

                {
                    module_id: 'traywithtextcomponent',
                    index: 3
                }

            ]

        },
        footer: {
            position: 'bottom',
            components: [
                {
                    module_id: 'footer-component'
                }
            ]
        }
    };


    const ParseLayout = (parseHeaderComponentId) => {
        var getcompid = pluck('module_id');
        const compids = getcompid(parseHeaderComponentId);
        const filteredcompid = compids.map(id => {
            const returnvalue = availableHomePageComponent.map(values => {
                return id.includes(values.module_id) ? values.component : null;
            })
            return returnvalue.filter(val => !isNil(val))
        })
        return flatten(filteredcompid);
    };


    const HeaderCompId = pathOr(null, ['header', 'components'])(pageconfiguration);
    const RenderHeader = ParseLayout(HeaderCompId);


    const sortByPostionIndex = sortBy(compose(prop('index')));
    const BodyComId = pathOr(null, ['body', 'components'])(pageconfiguration);
    const SortByPosition = sortByPostionIndex(BodyComId);

    const RenderBody = ParseLayout(SortByPosition);

    const FooterCompId = pathOr(null, ['footer', 'components'])(pageconfiguration);
    const RederFooter = ParseLayout(FooterCompId);


    // get api token if the jwt token is expired or does not exist on the load of page
    useEffect(() => {
        if (!themes._id) {
            dispatch(apiTokenActions.login());
            // dispatch(themeActions.themes());
        }
        // props.videoInfo();
    }, []);


    // Page wise content
    const [trending, setMovies] = useState({ trending: [] })

    useEffect(() => {
        getByGenrer('Action').then(
            res => {
                setMovies({ ...trending, movies: res });
                dispatch({ type: 'HOME_PAGE_CONTENT', ...{ payload: res } })
            }
        );

        return () => { }
    }, []);

    return (
        <main className={`${tenantname}-Home-Page`}>
            <HomePageLayout />
            <Nav>
                {RenderHeader.map((HeaderComp, key) =>
                    <HeaderComp key={key} />
                )}
            </Nav>
            <Body
                content={
                    <Content children={RenderBody.map((Childrencomp, key) =>
                        <Childrencomp key={key} />
                    )}
                    />
                }
            />
            {RederFooter.map((Footercomp, key) =>
                <Footercomp key={key} />
            )}
        </main>
    )
};

export default HomePageContent;

// Render the nav header with children within it/ them
const Nav = ({ sidebar, children }) => (
    <header>
        {/* <SideBar>{sidebar}</SideBar> */}
        {children}
    </header>
);

// Body requirements to be decided based on the cofiguration from API call
// they can be ANYTHING!

const Body = ({ content }) => (
    <section className={`${tenantname}`}>
        {content}
    </section>
);


// Sidebar
const SideBar = ({ children }) => (
    <aside className={`${tenantname} side bar`}>
        {children}
    </aside>
);

// Content 
const Content = ({ children }) => (
    <div>
        {children}
    </div>
)