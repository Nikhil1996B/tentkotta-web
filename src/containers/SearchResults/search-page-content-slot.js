import React, { useEffect, useState } from 'react';
import {
    useSelector,
    useDispatch
} from "react-redux";
import {
    pathOr,
    isNil,
    sortBy,
    pluck,
    sortWith,
    ascend,
    compose,
    prop,
    pick,
    whereEq,
    any,
    filter,
    flatten
} from 'ramda';
import { apiTokenActions } from "../../actions";
import HeaderComp from '../../components/Header/indexv1';
import { getByGenrer } from '../../components/Carousel/api/Movies';
import SearchResultsList from '../../components/SearchResultsList/SearchResultsList';
import  SearchResultsPageLayout  from './searchpagelayout';
import {
    Global,
    css
} from '@emotion/react';
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
const availableSearchResultsPageComponent = [
    {
        module_id: 'header-component',
        component: HeaderComp
    },
    {
        module_id: 'search-filter-component',
        component: SearchResultsList
    },
    {
        module_id: 'footer-component',
        component: Footer
    }
];




function SearchResultsPageContent({ user }) {

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
                    module_id: 'header-component',
                    index: 1
                }
            ]
        },
        body: {
            position: 'middle',
            components: [
                {
                    module_id: 'search-filter-component',
                    index: 2
                }
            ]

        },
        footer: {
            position: 'bottom',
            components: [
                {
                    module_id: 'footer-component',
                    index: 2
                }
            ]
        }
    };


    const ParseLayout = (parseHeaderComponentId) => {
        var getcompid = pluck('module_id');
        const compids = getcompid(parseHeaderComponentId);
        const filteredcompid = compids.map(id => {
            const returnvalue = availableSearchResultsPageComponent.map(values => {
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
        <main className={`${tenantname}-Search-Results-Page`}>
            <SearchResultsPageLayout />
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

export default SearchResultsPageContent;

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