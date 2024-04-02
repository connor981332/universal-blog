import * as universalBlogAPI from '../../src/apis/universalBlogApi';
import LargeScreenNavBar from './LargeNavBar';
import MobileNavBar from './MobileNavBar';

const MAX_CATEGORIES = 5;

export default async function NavBar() {
    let categoriesResponse = null;
    try {
        categoriesResponse = await universalBlogAPI.getCategories();
    } catch (error) {
        console.error(error);
    }

    let categories = new Array<String>;

    for (const category of categoriesResponse.data.categories) {
        if (categories.length >= MAX_CATEGORIES) break;
        categories.push(category.name);
    }
    
    return (
        <>
            <div className="h-1"></div>
            <div className="left-0 right-0 w-full h-0.5 bg-black"></div>
            <div className="h-1"></div>
            <LargeScreenNavBar categories={categories} />
            <MobileNavBar categories={categories} />
            <div className="h-1"></div>
            <div className="left-0 right-0 w-full h-0.5 bg-black"></div>
            <div className="h-1"></div>
        </>
    );
}